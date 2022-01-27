import Head from 'next/head'
import Logo from '../components/Logo'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import path from 'path'
import { parseProjectInfoMarkdown } from '../utils/project-info-markdown-parser'
import { parseMarkdown } from '../utils/markdown-parser'
import LangSwitcher from '../components/LangSwitcher'
import Title from '../components/Title'

export default function Home (props) {
	const { title, tags } = props
	return (
		<div className={styles.container}>
			<Head>
				<title>ApayRus.CC - creative coding</title>
				<meta
					name='description'
					content='Creative coding projects by Rustam Apay'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Logo />
				<LangSwitcher />
				<Title title={title} tags={tags} />

				<div
					className={styles.about}
					dangerouslySetInnerHTML={{ __html: props.about }}
				></div>
				<pre>{JSON.stringify(props.projects, null, 2)}</pre>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					ApayRus, 2022
				</a>
			</footer>
		</div>
	)
}

export async function getStaticProps (context) {
	const { locale } = context

	// TITLE
	const titleFilePath = path.join(
		process.cwd(),
		`content/${locale}/info/title.md`
	)

	const titleFileContent = fs.readFileSync(titleFilePath, 'utf8')
	const { title, tags } = parseProjectInfoMarkdown(titleFileContent)

	// PROJECTS
	const projectDirectory = path.join(
		process.cwd(),
		`content/${locale}/projects`
	)

	const projectFileNames = fs.readdirSync(projectDirectory)

	const projects = projectFileNames.map(fileName => {
		const filePath = path.join(projectDirectory, fileName)
		const fileContent = fs.readFileSync(filePath, 'utf8')
		return {
			...parseProjectInfoMarkdown(fileContent),
			href: `projects/${fileName}`.replace(/\.md$/, '')
		}
	})

	// ABOUT
	const aboutFilePath = path.join(
		process.cwd(),
		`content/${locale}/info/about.md`
	)

	const aboutFileContent = fs.readFileSync(aboutFilePath, 'utf8')
	const about = parseMarkdown(aboutFileContent)

	return {
		props: {
			title,
			tags,
			projects,
			about
		}
	}
}
