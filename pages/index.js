import Head from 'next/head'
import Logo from '../components/Logo'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ApayRus.CC - creative coding</title>
				<meta name='description' content='Creative coding projects by Rustam Apay' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Logo />
				<h1 className={styles.title}>ApayRus.CC</h1>
				<div className={styles.description}>
					<p>Creative Coding</p>
					<p>Content Creating</p>
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
