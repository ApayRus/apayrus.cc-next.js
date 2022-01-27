import Logo from '../components/Logo'
import LangSwitcher from '../components/LangSwitcher'
import Title from '../components/Title'

const Layout = props => {
	const {
		children,
		layoutProps: { heading, socialMedia }
	} = props

	const { title, tags } = heading
	return (
		<>
			<header>
				<Logo />
				<LangSwitcher />
				<Title title={title} tags={tags} />
			</header>
			<pre>{JSON.stringify(socialMedia, null, 2)}</pre>
			<div>header</div>
			<div>{children}</div>
			<footer>
				<p>© ApayRus, 2022</p>
			</footer>
		</>
	)
}

export default Layout
