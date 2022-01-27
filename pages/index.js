import Head from 'next/head'
import Logo from '../components/Logo'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import path from 'path'
import { parseProjectInfoMarkdown } from '../utils/project-info-markdown-parser'

export default function Home (props) {
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
				<h1 className={styles.title}>ApayRus.CC</h1>
				<div className={styles.description}>
					<p>Creative Coding</p>
					<p>Content Creating</p>

					<pre>{JSON.stringify(props.projects, null, 2)}</pre>
				</div>

				<div className={styles.about}>
					<h2>About me</h2>
					<p>
						Hi! My name is Rustam Apay, I am:
						<ul>
							<li>Full Stack Software Engineer </li>
							<li>Graduate Mathematician</li>
							<li>Dedicated Freelancer</li>
							<li>Open Source Minded</li>
							<li>Aspired Startuper</li>
						</ul>
					</p>
				</div>
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

export async function getStaticProps () {
	const projectDirectory = path.join(process.cwd(), 'content/ru/projects')
	const projectFileNames = fs.readdirSync(projectDirectory)

	const projects = projectFileNames.map(fileName => {
		const filePath = path.join(projectDirectory, fileName)
		const fileContent = fs.readFileSync(filePath, 'utf8')
		return parseProjectInfoMarkdown(fileContent)
	})

	return {
		props: {
			projects
		}
	}
}
