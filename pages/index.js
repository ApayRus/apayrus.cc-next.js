import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import path from 'path'
import { parseProjectInfoMarkdown } from '../utils/project-info-markdown-parser'
import Layout from '../components/Layout'

export default function Home (props) {
	return (
		<Layout layoutProps={props.layoutProps}>
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
					<h1
						dangerouslySetInnerHTML={{ __html: props.about.title }}
					/>
					<div
						className={styles.about}
						dangerouslySetInnerHTML={{
							__html: props.about.description
						}}
					></div>
					<pre>{JSON.stringify(props.projects, null, 2)}</pre>
				</main>
			</div>
		</Layout>
	)
}

export async function getStaticProps (context) {
	const { locale } = context

	// TITLE
	const headingFilePath = path.join(
		process.cwd(),
		`content/${locale}/info/title.md`
	)
	const headingFileContent = fs.readFileSync(headingFilePath, 'utf8')
	const heading = parseProjectInfoMarkdown(headingFileContent)

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
	const about = parseProjectInfoMarkdown(aboutFileContent)

	// SOCIAL MEDIA
	const socialMediaFilePath = path.join(
		process.cwd(),
		`content/${locale}/info/social-media.md`
	)
	const socialMediaFileContent = fs.readFileSync(socialMediaFilePath, 'utf8')
	const socialMedia = parseProjectInfoMarkdown(socialMediaFileContent)

	return {
		props: {
			layoutProps: { heading, socialMedia },

			projects,
			about
		}
	}
}
