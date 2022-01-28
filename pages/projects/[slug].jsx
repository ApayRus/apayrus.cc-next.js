import Layout from '../../components/Layout'
import { parseMarkdownFiles, readDir } from '../../utils/site-data-parser'

const ProjectPage = props => {
	const { layoutProps, project } = props
	return (
		<Layout layoutProps={layoutProps}>
			<div>this is project page!!!</div>
			<pre>{JSON.stringify(project, null, 2)}</pre>
		</Layout>
	)
}

export const getStaticPaths = context => {
	const { locales } = context
	const paths = []

	locales.forEach(locale => {
		const fileNames = readDir(`content/${locale}/projects`, 'onlyNames')
		const slugs = fileNames.map(
			fileName => fileName.replace(/.md$/, '') //route
		)
		const localePaths = slugs.map(slug => ({ params: { slug }, locale }))
		paths.push(...localePaths)
	})

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps = context => {
	const {
		locale,
		params: { slug }
	} = context

	// for Layout:
	const [heading] = parseMarkdownFiles([`content/${locale}/info/title.md`])
	const [socialMedia] = parseMarkdownFiles([
		`content/${locale}/info/social-media.md`
	])

	// for this page
	const [project] = parseMarkdownFiles([`content/${locale}/projects/${slug}.md`])

	return {
		props: {
			layoutProps: { heading, socialMedia },
			project
		}
	}
}

export default ProjectPage
