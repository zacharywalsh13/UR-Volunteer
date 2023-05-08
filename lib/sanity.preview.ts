"use client"

import { definePreview } from "next-sanity/preview"
import { projectId, dataset } from "./sanity.client"

function onPublicAccessOnly() {
    throw new Error('Unable to load Preview, not logged in')   
}

if (!projectId || !dataset) {
    throw new Error('Missing Project ID or Dataset. Check your sanity.json or environment variables')
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})