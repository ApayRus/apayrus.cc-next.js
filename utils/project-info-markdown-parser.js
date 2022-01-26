/**
 * please look at test for understand structure of project md file.
 */

import { marked } from 'marked'

const splitMarkdownIntoPartsByTemplate = (text, template) => {
	const matches = [...text.matchAll(template)]
	if (!matches) return [{ content: text }]

	const splitedParts = matches.map((elem, index, array) => {
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
		splitedParts.unshift({ introText })
	}
	return splitedParts
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

export const parseProjectInfoMarkdown = markdownText => {
	const h2template = new RegExp(/^\s*#{2}\s+(.+?)\s*$/, 'gm')

	const splitedByHeaders = splitMarkdownIntoPartsByTemplate(
		markdownText,
		h2template
	)

	return splitedByHeaders
		.map(elem => {
			const { title = '', content = '', introText } = elem
			let parser
			if (introText) {
				return {
					title: 'title',
					content: introText.replace(/\s*#\s*/, '').trim()
				}
			}
			if (title === 'description') {
				parser = parseToHTML
			} else if (title === 'categories' || title === 'tags') {
				parser = parseCommaSeparatedText
			} else {
				parser = parseLinksOrImages
			}
			return { title, content: parser(content) }
		})
		.reduce((prev, item) => {
			const { title, content } = item
			return { ...prev, [title]: content }
		}, {})
}
