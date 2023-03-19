import sanityClient from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "r4cct0yx",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imgUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);

export function urlFor(source) {
  return builder.image(source);
}

