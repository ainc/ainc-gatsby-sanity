export default {
    name: 'fiveAcrossSponsors',
    type: 'document',
    title: '5 Across Sponsors',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            initialValue: '5 Across Sponsors',
            hidden: true
        },
        {
            title: 'Title Sponsor Name',
            type: 'string',
            name: 'titleSponsorName'
        },
        {
            title: 'Title Sponsor Link',
            type: 'url',
            name: 'titleSponsorLink'
        },
        {
            title: 'Title Sponsor Image',
            type: 'image',
            name: 'titleSponsorImage'
        },
        {
            title: 'Presenting Sponsor Name',
            type: 'string',
            name: 'presetingSponsorName'
        },
        {
            title: 'Presenting Sponsor Link',
            type: 'url',
            name: 'presentingSponsorLink'
        },
        {
            name: 'presentingSponsorImage',
            type: 'image',
            title: 'Presenting Sponsor Image'
        },
        {
            name: 'suppourtingSponsors',
            type: 'array',
            title: 'Supporting Sponsor(s)',
            of: [{type: 'imageLink'}]
        },
    ]
}