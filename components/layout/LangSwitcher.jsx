import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './LangSwitcher.module.css'
const LangSwitcher = () => {
	const router = useRouter()
	const {
		pathname,
		query: { slug },
		locales,
		locale: activeLocale
	} = router

	const isActiveLocale = locale => {
		return locale === activeLocale
	}

	const path = slug || pathname // slug only on dynamic routing like: pages/projects/[slug].jsx
	return (
		<div className={styles.langSwitcherContainer}>
			{locales.map(locale => {
				return (
					<Link key={locale} href={path} locale={locale}>
						<div
							className={
								isActiveLocale(locale)
									? `${styles.locale} ${styles.activeLocale}`
									: styles.locale
							}
						>
							{locale}
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default LangSwitcher
