import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "trzbo7uu",
    dataset: "production",
    apiVersion: "2022-08-11",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
