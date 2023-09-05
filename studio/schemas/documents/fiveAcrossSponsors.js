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
            title: 'Title Sponsor',
            type: 'imageLink',
            name: 'titleSponsor'
        },
        {
            title: 'Presenting Sponsor',
            type: 'imageLink',
            name: 'presetingSponsor'
        },
        {
            name: 'suppourtingSponsors',
            type: 'array',
            title: 'Supporting Sponsor(s)',
            of: [{type: 'imageLink'}]
        },
    ]
}