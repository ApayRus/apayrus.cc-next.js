import Link from 'next/link'
import { useRouter } from 'next/router'
import theme from '../styles/theme'

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
		<div style={styles.langSwitcherContainer}>
			{locales.map(locale => {
				return (
					<Link key={locale} href={path} locale={locale}>
						<div
							style={
								isActiveLocale(locale)
									? { ...styles.locale, ...styles.activeLocale }
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

const styles = {
	langSwitcherContainer: {
		// border: '1px solid red'
	},
	locale: {
		padding: '2px',
		cursor: 'pointer',
		borderRadius: '8px',
		fontSize: '0.7rem'
	},
	activeLocale: {
		backgroundColor: theme.color1,
		color: 'white'
	}
}

export default LangSwitcher
