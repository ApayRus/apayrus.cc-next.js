import Link from 'next/link'

const LangSwitcher = () => {
	return (
		<>
			<Link href='/en' locale='en'>
				<a>en</a>
			</Link>
			<Link href='/ru' locale='ru'>
				<a>ru</a>
			</Link>
		</>
	)
}

export default LangSwitcher
