import Link from 'next/link'
import { useRouter } from 'next/router'

const LangSwitcher = () => {
	const router = useRouter()
	const {
		pathname,
		query: { slug }
	} = router

	const path = slug || pathname // slug only on dynamic routing like: pages/projects/[slug].jsx
	return (
		<>
			<Link href={path} locale='en'>
				<a>en</a>
			</Link>
			<Link href={path} locale='ru'>
				<a>ru</a>
			</Link>
		</>
	)
}

export default LangSwitcher
