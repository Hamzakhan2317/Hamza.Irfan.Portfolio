import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
  projectId: "0kwf58de",
  dataset: "production",
  apiversion: "2022-02-01",
  useCdn: true,
  token:
    "skS81hI8WUsOEbHFPjr9X3wlltGoalw5F1szloI1rzBKCbIYbnc5tbJFhxfsZC5QLqY04sRx2mck9mpid5OE8nI1PZTovEmnzNGOk0mtJZ0EaSFDKYt5hdpCLJvDMLyYYI59oXzkrd7t8glTNoZff2z6r5i5JSjqfHPwfPJcKtwcS6KZAKtp",
});

const builder = ImageUrlBuilder(client);
const UrlFor = (source) => builder.image(source);
export { UrlFor, client };
