const title = 'DSC-Study';
const description = 'DSC-Study';
const urlSite = 'https://sites.google.com/view/dsckmou';

const SEO = {
  title,
  description,
  canonical: urlSite,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: urlSite,
    title,
    description,
  },
};

export default SEO;
