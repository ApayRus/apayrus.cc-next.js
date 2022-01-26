/**
 * please look at test for understand structure of project md file.
 */

import { parseMarkdownProjectInfo } from './project-markdown-parser.js'

const input = `# Визуальный генератор и мутатор пароля
 
 ## categories
 
 educational 
 
 ## tags
 
 HTML, CSS, JavaScript, Vue, Visualization, Random values 
 
 ## description 
 
 Генератор создаёт пароль заданной длины. Вы можете регулировать соотношение разных типов символов в пароле посредством микшеров. Выпавшие символы отображаются на новогодней ёлке в виде гирлянд.
 
 Мутатор меняет пароль предсказуемым образом. Сдвиг, отражение, инверсия регистра.
 
 Порядок создания приложения пошагово объясняется в видео уроках.
 
 ## images
 
 ![generator](https://apayrus.github.io/crypto-funny/images/crypto-funny.gif)
 
 ![mutator](https://i.imgur.com/zoyU8DN.gif)
 
 ![youtube intro cover](https://i.imgur.com/CxT9dGj.png)
 
 ## videos
 
 [Описание функционала приложения и содержимого курса](https://youtu.be/IaQo74siH40)
 
 [12 видео уроков. Пошаговое руководство по созданию этого приложения](https://www.youtube.com/watch?v=nANXiZLW3BY&list=PL09Q_Tr1uUw43jvZxDAXYpLakOT1nJgoB&index=2)
 
 [Возникновение идеи: борьба с зависимостью от соцсетей](https://youtu.be/xpq6Hvcv7jI)
 
 ## audios
 
 ## articles
 
 [Habr.com: Как визуальный генератор пароля спас меня от выгорания и соцсетевой аддикции (HTML/CSS/JS vue без сборки)](https://habr.com/ru/post/647295/)
 
 ## slides
 
 [cover images for each video](https://docs.google.com/presentation/d/1yuBHdzz-4LlQo0WLylyjANgRBb_ORz4P87cWzjr8NPg/edit?usp=sharing)
 
 ## mindmaps
 
 [xmind online](https://xmind.net/m/h4Qzjb/)
 
 ## code 
 
 [Source code on github.com](https://github.com/apayrus/crypto-funny)`

const output = {
	title: 'Визуальный генератор и мутатор пароля',
	categories: ['educational'],
	tags: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Visualization', 'Random values'],
	description:
		'<p>Генератор создаёт пароль заданной длины. Вы можете регулировать соотношение разных типов символов в пароле посредством микшеров. Выпавшие символы отображаются на новогодней ёлке в виде гирлянд.</p>\n' +
		'<p> Мутатор меняет пароль предсказуемым образом. Сдвиг, отражение, инверсия регистра.</p>\n' +
		'<p> Порядок создания приложения пошагово объясняется в видео уроках.</p>\n',
	images: [
		{
			type: 'image',
			text: 'generator',
			href: 'https://apayrus.github.io/crypto-funny/images/crypto-funny.gif'
		},
		{
			type: 'image',
			text: 'mutator',
			href: 'https://i.imgur.com/zoyU8DN.gif'
		},
		{
			type: 'image',
			text: 'youtube intro cover',
			href: 'https://i.imgur.com/CxT9dGj.png'
		}
	],
	videos: [
		{
			type: 'link',
			text: 'Описание функционала приложения и содержимого курса',
			href: 'https://youtu.be/IaQo74siH40'
		},
		{
			type: 'link',
			text: '12 видео уроков. Пошаговое руководство по созданию этого приложения',
			href: 'https://www.youtube.com/watch?v=nANXiZLW3BY&list=PL09Q_Tr1uUw43jvZxDAXYpLakOT1nJgoB&index=2'
		},
		{
			type: 'link',
			text: 'Возникновение идеи: борьба с зависимостью от соцсетей',
			href: 'https://youtu.be/xpq6Hvcv7jI'
		}
	],
	audios: [],
	articles: [
		{
			type: 'link',
			text: 'Habr.com: Как визуальный генератор пароля спас меня от выгорания и соцсетевой аддикции (HTML/CSS/JS vue без сборки)',
			href: 'https://habr.com/ru/post/647295/'
		}
	],
	slides: [
		{
			type: 'link',
			text: 'cover images for each video',
			href: 'https://docs.google.com/presentation/d/1yuBHdzz-4LlQo0WLylyjANgRBb_ORz4P87cWzjr8NPg/edit?usp=sharing'
		}
	],
	mindmaps: [
		{
			type: 'link',
			text: 'xmind online',
			href: 'https://xmind.net/m/h4Qzjb/'
		}
	],
	code: [
		{
			type: 'link',
			text: 'Source code on github.com',
			href: 'https://github.com/apayrus/crypto-funny'
		}
	]
}

/* 
//description 
parseToHTML('xxxxx *yyyy*')

//categories and tags -- 1 paragraph, and array of comma separated strings
parseCommaSeparatedText('HTML, CSS; JavaScript, Vue, Visualization, Random values')

// images, videos, audios, mindmaps, articles, slides, code

parseLinksOrImages(`![generator](https://apayrus.github.io/crypto-funny/images/crypto-funny.gif)
 
 ![mutator](https://i.imgur.com/zoyU8DN.gif)
 
 ![youtube intro cover](https://i.imgur.com/CxT9dGj.png)`)

 parseLinksOrImages(`[Описание функционала приложения и содержимого курса](https://youtu.be/IaQo74siH40)
 
 [12 видео уроков. Пошаговое руководство по созданию этого приложения](https://www.youtube.com/watch?v=nANXiZLW3BY&list=PL09Q_Tr1uUw43jvZxDAXYpLakOT1nJgoB&index=2)
 
 [Возникновение идеи: борьба с зависимостью от соцсетей](https://youtu.be/xpq6Hvcv7jI)`)

 */

// console.log(parseMarkdownProjectInfo(input))

test('parseMarkdownProjectInfo', () => {
	expect(parseMarkdownProjectInfo(input)).toEqual(output)
})
