// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import SibApiV3Sdk from 'sib-api-v3-sdk'

const saveEmail = (req, res) => {
	const { email, listIds } = req.body

	let defaultClient = SibApiV3Sdk.ApiClient.instance
	const sibApiKey = process.env.SIB_API_KEY
	console.log('sibApiKey', sibApiKey)
	let apiKey = defaultClient.authentications['api-key']
	apiKey.apiKey = sibApiKey

	let apiInstance = new SibApiV3Sdk.ContactsApi()

	let createContact = new SibApiV3Sdk.CreateContact()

	createContact.email = email
	createContact.listIds = listIds

	apiInstance.createContact(createContact).then(
		data => {
			res.status(200).json(data)
		},
		error => {
			const { status, text } = error.response
			res.status(status).json(JSON.parse(text))
		}
	)

	// res.status(200).json({ email, lists })
}

export default saveEmail
