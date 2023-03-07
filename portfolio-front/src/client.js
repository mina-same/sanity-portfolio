import sanityClient from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "r4cct0yx",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token:
    "skaTwRMbjb0XpOMKaZjL7By13C77Wx0v8h3sTjRQGnCUO7Ob2YWist5Tujy4Ow9ommUxJCu01t3rRSPmMW1c2mlW1iHyZlN0BjnUGeM6tIl2bqA4D1DlwUhL18qOfgIvFYqRJJl9SldvVbsV9U1W0miHlaLhKan0tCc5pWjvyjubndt6mPG9",
});

const builder = imgUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);

export function urlFor(source) {
  return builder.image(source);
}

