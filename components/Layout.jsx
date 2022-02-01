import Heading from '../components/Heading'
import Footer from '../components/Footer'

const Layout = props => {
	const { children, layoutProps = {} } = props

	const { heading = {}, footer = {} } = layoutProps

	return (
		<>
			<Heading {...heading} />
			<div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
				{children}
				<Footer {...footer} />
			</div>
		</>
	)
}

export default Layout
