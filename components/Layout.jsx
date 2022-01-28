import Heading from '../components/Heading'
import Footer from '../components/Footer'

const Layout = props => {
	const {
		children,
		layoutProps: { heading, socialMedia }
	} = props

	return (
		<>
			<Heading {...heading} />
			{children}
			<Footer socialMedia={socialMedia} />
		</>
	)
}

export default Layout
