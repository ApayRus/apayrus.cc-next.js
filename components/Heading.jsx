import Link from 'next/link'
import LangSwitcher from './LangSwitcher'
import styles from './Heading.module.css'

const Heading = props => {
	const { title = '', tags = [] } = props
	return (
		<header className={styles.heading}>
			<div className={styles.titleLogoContainer}>
				<Link href='/' passHref>
					<img className={styles.logo} src='/logo.png' alt='apayrus.cc logo' />
				</Link>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.tags}>
						{tags.map(tag => (
							<div className={styles.tag} key={tag}>
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.langSwitcher}>
				<LangSwitcher />
			</div>
		</header>
	)
}

export default Heading
