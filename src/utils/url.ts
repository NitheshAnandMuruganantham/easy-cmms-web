export const generateSubdomain = (domain: string) => {
  const baseUrl = import.meta.env['VITE_APP_URL'];
  const sub_domain = domain;

  const protocol = baseUrl.match(/^https?:\/\//)[0];

  const baseUrlWithoutProtocol = baseUrl.replace(/^https?:\/\//, '');

  const newUrl = `${protocol}${sub_domain}.${baseUrlWithoutProtocol}`;

  return newUrl;
};
