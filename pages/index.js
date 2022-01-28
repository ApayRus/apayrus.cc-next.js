import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { parseMarkdownFiles, readDir } from '../utils/site-data-parser'
import About from '../components/About'
import ProjectCard from '../components/ProjectCard'

export default function Home (props) {
	const { projects, layoutProps, about } = props
	return (
		<>
			<Head>
				<title>ApayRus.CC - creative coding</title>
				<meta
					name='description'
					content='Creative coding projects by Rustam Apay'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout layoutProps={layoutProps}>
				<main className={styles.main}>
					<About {...about} />
					{projects.map(project => (
						<ProjectCard key={project.filePath} {...project} />
					))}
					{/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
				</main>
			</Layout>
		</>
	)
}

export async function getStaticProps (context) {
	const { locale } = context

	const [heading] = parseMarkdownFiles([`content/${locale}/info/title.md`])
	const projects = parseMarkdownFiles(readDir(`content/${locale}/projects`))
	const [about] = parseMarkdownFiles([`content/${locale}/info/about.md`])
	const [socialMedia] = parseMarkdownFiles([
		`content/${locale}/info/social-media.md`
	])

	return {
		props: {
			layoutProps: { heading, socialMedia },
			projects,
			about
		}
	}
}
