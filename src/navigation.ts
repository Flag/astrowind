import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'What We Do',
      links: [
        {
          text: 'Product Management',
          href: getPermalink('/what-we-do/product-management'),
        },
        {
          text: 'Project Management',
          href: getPermalink('/what-we-do/project-management'),
        },
        {
          text: 'Process Improvement',
          href: getPermalink('/what-we-do/process-improvement'),
        },
        {
          text: 'Digital Presence',
          href: getPermalink('/what-we-do/digital-presence'),
        },
      ],
    },
    {
      text: 'Get in Touch',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'What We Do',
      links: [
        { text: 'Product Management', href: getPermalink('/what-we-do/product-management') },
        { text: 'Project Management', href: getPermalink('/what-we-do/project-management') },
        { text: 'Process Improvement', href: getPermalink('/what-we-do/process-improvement') },
        { text: 'Digital Presence', href: getPermalink('/what-we-do/digital-presence') },
      ],
    },
    {
  title: 'Company',
  links: [
    { text: 'Get in Touch', href: getPermalink('/contact') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
},
  ],
  secondaryLinks: [
  { text: `Av. Paulista, nº 777, Andar 15, Sala 1447. <br>
Bairro Bela Vista, São Paulo – SP.<br>
Brazil. CEP: 01.311-914`, href: '' },
],
  socialLinks: [],
  footNote: ``,
};