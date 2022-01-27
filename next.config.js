module.exports = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'en'
	},
	webpack5: true,
	webpack: config => {
		config.resolve.fallback = { fs: false, path: false }
		return config
	}
}
