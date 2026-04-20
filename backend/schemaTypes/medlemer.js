const medlemer = {
    name: 'medlemer',
    title: 'Medlemer',
    type: 'document',
    fields: [
        {
            name: 'fulname',
            title: 'Full navn',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'fulname',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 100)
            }
        },

        {
            name: 'email',
            title: 'E-Post',
            type: 'string',
        },
        {
            name: "profilpicture",
            title: "Profilbilde",
            type: "image"
        },


    ],
    preview: {
        select: {
          title: 'fulname',
          image: 'profilpicture',
        },
        prepare(selection) {
          const { title, image } = selection
          return {
            title: title || 'Ukjent',
            subtitle: title || 'Ukjent',
            media: image,
          }
        },
    },
}

export default medlemer