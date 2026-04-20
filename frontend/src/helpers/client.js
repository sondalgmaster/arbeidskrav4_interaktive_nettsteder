import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "q9bil0fn",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-06-01",
})

export default client