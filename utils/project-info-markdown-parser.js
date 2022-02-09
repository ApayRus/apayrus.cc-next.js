/**
 * please look at test for understand structure of project md file.
 */

import { marked } from 'marked'
import matchAll from 'string.prototype.matchall'

const splitMarkdownIntoPartsByTemplate = (text, template) => {
	const matches = [...matchAll(text, template)]
	if (!matches) return [{ content: text }]

	const splittedParts = matches.map((elem, index, array) => {
		const nextElem = array[index + 1] || {}
		const nextIndex = nextElem.index || text.length
		const [headerText, title = ''] = elem
		const { index: curIndex, input } = elem
		const content = input
			.slice(curIndex, nextIndex)
			.replace(headerText, '')
			.trim()
		return {
			title,
			content
		}
	})

	const { index: zeroIndex = 0 } = matches[0] || {}
	if (zeroIndex > 0) {
		//we have some data before first header template
		const introText = text.slice(0, zeroIndex)
		splittedParts.unshift({ introText })
	}
	return splittedParts
}

//categories and tags -- 1 paragraph, and array of comma separated strings
const parseCommaSeparatedText = text => {
	return text.split(/[,;]/g).map(elem => elem.trim())
}

//description
const parseToHTML = markdownText => {
	return marked.parse(markdownText)
}

// images, videos, audios, mindmaps, articles, slides, code
const parseLinksOrImages = markdownText => {
	return marked
		.lexer(markdownText)
		.filter(elem => elem.type !== 'space')
		.map(elem => elem.tokens)
		.flat()
		.map(elem => {
			const { type, text, href } = elem
			return { type, text, href }
		})
		.filter(elem => elem.text.trim())
}

const getParserByTitle = title => {
	const defaultParser = parseToHTML

	const mapHeadersParsers = [
		{
			parser: parseLinksOrImages,
			titles: [
				'images',
				'videos',
				'audios',
				'mindmaps',
				'articles',
				'slides',
				'code',
				'links'
			]
		},
		{
			parser: parseCommaSeparatedText,
			titles: ['categories', 'tags', 'stack', 'topics']
		},
		{
			parser: parseToHTML,
			titles: ['description']
		}
	]

	const { parser = defaultParser } =
		mapHeadersParsers.find(elem => elem.titles.includes(title)) || {}

	return parser
}

export const parseProjectInfoMarkdown = markdownText => {
	const h2template = new RegExp(/^\s*#{2}\s+(.+?)\s*$/, 'gm')

	const splittedByHeaders = splitMarkdownIntoPartsByTemplate(
		markdownText,
		h2template
	)

	return splittedByHeaders
		.map(elem => {
			const { title = '', content = '', introText } = elem
			if (introText) {
				return {
					title: 'title',
					content: introText.replace(/\s*#\s*/, '').trim()
				}
			}

			const parser = getParserByTitle(title)

			return { title, content: parser(content) }
		})
		.reduce((prev, item) => {
			const { title, content } = item
			return { ...prev, [title]: content }
		}, {})
}
