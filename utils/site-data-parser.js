import fs from 'fs'
import path from 'path'
import { parseProjectInfoMarkdown } from './project-info-markdown-parser'

export const parseMarkdownFiles = fileShortPathArray => {
	return fileShortPathArray.map(fileShortPath => {
		const fileFullPath = path.join(process.cwd(), fileShortPath)
		const fileContent = fs.readFileSync(fileFullPath, 'utf8')
		return {
			...parseProjectInfoMarkdown(fileContent),
			filePath: fileShortPath
		}
	})
}

export const readDir = (shortPath, mode = 'withPath') => {
	const fullPath = path.join(process.cwd(), shortPath)
	const fileNames = fs.readdirSync(fullPath)
	return mode === 'onlyNames'
		? fileNames
		: fileNames.map(fileName => `${shortPath}/${fileName}`)
}
