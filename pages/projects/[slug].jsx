import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import {
	getLayoutProps,
	parseMarkdownFiles,
	readDir
} from '../../utils/site-data-parser'

const ProjectPage = props => {
	const { layoutProps, project } = props
	return (
		<Layout layoutProps={layoutProps}>
			<ProjectCard {...project} pageMode />
			{/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
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
	const layoutProps = getLayoutProps(locale)

	// for this page
	const [project] = parseMarkdownFiles([`content/${locale}/projects/${slug}.md`])

	return {
		props: {
			layoutProps,
			project
		}
	}
}

export default ProjectPage
