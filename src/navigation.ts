import { getPermalink } from './utils/permalinks';
import { useTranslations, type Language } from './i18n/translations';

export function getHeaderData(lang: Language = 'en') {
  const t = useTranslations(lang);
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return {
    links: [
      {
        text: t('nav.whatWeDo'),
        links: [
          {
            text: t('nav.productManagement'),
            href: `${prefix}/what-we-do/product-management`,
          },
          {
            text: t('nav.projectManagement'),
            href: `${prefix}/what-we-do/project-management`,
          },
          {
            text: t('nav.processImprovement'),
            href: `${prefix}/what-we-do/process-improvement`,
          },
          {
            text: t('nav.digitalPresence'),
            href: `${prefix}/what-we-do/digital-presence`,
          },
        ],
      },
      {
        text: t('nav.getInTouch'),
        href: `${prefix}/contact`,
      },
    ],
    actions: [],
  };
}

export function getFooterData(lang: Language = 'en') {
  const t = useTranslations(lang);
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return {
    links: [
      {
        title: t('footer.whatWeDo'),
        links: [
          { text: t('nav.productManagement'), href: `${prefix}/what-we-do/product-management` },
          { text: t('nav.projectManagement'), href: `${prefix}/what-we-do/project-management` },
          { text: t('nav.processImprovement'), href: `${prefix}/what-we-do/process-improvement` },
          { text: t('nav.digitalPresence'), href: `${prefix}/what-we-do/digital-presence` },
        ],
      },
      {
        title: t('footer.company'),
        links: [
          { text: t('footer.getInTouch'), href: `${prefix}/contact` },
          { text: t('footer.terms'), href: getPermalink('/terms') },
          { text: t('footer.privacy'), href: getPermalink('/privacy') },
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
}