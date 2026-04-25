const projects = {
    name: 'projects',
    title: 'Prosjekter',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tittel',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Beskrivelse',
            type: 'text',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 100)
            }
        },

    ],
}
export default projects