import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "g9nq8k7a",
  dataset: "production",
  useCDN: true,
  apiVersion: "2021-10-21",
});

const builder = imageURLBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
