export default async () =>
  Response.redirect("https://awesomeinc.org/events/5across/", 302);

export const config = {
  path: ["/email-signature", "/email-signature/"],
};
