import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { parseMarkdownFiles, readDir } from '../utils/site-data-parser'

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
