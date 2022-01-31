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
			<div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
				{children}
				<Footer socialMedia={socialMedia} />
			</div>
		</>
	)
}

export default Layout
