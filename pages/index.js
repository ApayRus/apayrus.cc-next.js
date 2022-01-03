import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ApayRus.CC - creative coding</title>
				<meta name='description' content='Creative coding projects by Rustam Apay' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>ApayRus.CC</h1>

				<div className={styles.description}>
					<p>Creative coding</p>
					<p>Content creating</p>
				</div>

				<div>
					<h2>About me</h2>
					<p>
						Hi! My name is Rustam Apay, I am:
						<ul>
							<li>Full Stack Software Engineer. </li>
							<li>Open Source Minded.</li>
							<li>Graduate Mathematician.</li>
							<li>Aspired Startuper.</li>
							<li>Dedicated Freelancer.</li>
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
