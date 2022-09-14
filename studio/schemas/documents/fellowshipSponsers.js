export default {
    name: 'fellowshipSponsers',
    type: 'document',
    title: 'Fellowship Sponsers',
    fields: [
        {
            name: 'sponser',
            type: 'string',
            title: 'Sponser Name',
            validation: Rule => [
                Rule.required().min(1).error('A title of min. 1 character is required'),
            ]
        },
        {
            name: 'sponserWebsite',
            type: 'url',
            title: 'Sponser Website'
        },
        {
            name: 'sponserLogo',
            type: 'image',
            title: 'Sponser Logo'
        }
    ]

}