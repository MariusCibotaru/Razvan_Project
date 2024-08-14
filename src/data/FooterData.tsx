export interface FooterItem {
    text: string;
    link: string;
  }
  
  export interface FooterCategory {
    title: string;
    items: FooterItem[];
  }
  
  export const footerData: FooterCategory[] = [
    {
      title: 'Monumente',
      items: [
        { text: 'Monumente verticale', link: '/monumente-verticale' },
        { text: 'Monumente Orizontale', link: '/monumente-orizontale' },
        { text: 'Monumente Duble', link: '/monumente-duble' },
        { text: 'Monumente Exclusive', link: '/monumente-exclusive' },
        { text: 'Cavouri', link: '/cavouri' },
        { text: 'Accesorii Monumente', link: '/accesorii-monumente' },
      ],
    },
    {
      title: 'Produse din Granit',
      items: [
        { text: 'Pervaz pentru fereastra', link: '/pervaz-pentru-fereastra' },
        { text: 'Blat-uri', link: '/blat-uri' },
        { text: 'Balustrade', link: '/balustrade' },
        { text: 'Scari', link: '/scari' },
        { text: 'Seminee', link: '/seminee' },
        { text: 'Fantani', link: '/fantani' },
        { text: 'Placi pentru fatade', link: '/placi-pentru-fatade' },
        { text: 'Pavaj', link: '/pavaj' },
      ],
    },
    {
      title: 'Mese si Scaune',
      items: [
        { text: 'Mese si Scaune din Granit', link: '/mese-scaune-din-granit' },
        { text: 'Mese si Scaune din Metal', link: '/mese-scaune-din-metal' },
        { text: 'Mese si Scaune din Lemn', link: '/mese-scaune-din-lemn' },
      ],
    },
    {
      title: 'Servicii',
      items: [
        { text: 'Instalare monumente', link: '/instalare-monumente' },
        { text: 'Livrare monumente', link: '/livrare-monumente' },
        { text: 'Ingrijirea Mormintelor', link: '/ingrijirea-mormintelor' },
      ],
    },
    {
      title: 'Menu',
      items: [
        { text: 'Procesul de lucru', link: '/procesul-de-lucru' },
        { text: 'Lucrarile noastre', link: '/lucrarile-noastre' },
        { text: 'Despre noi', link: '/despre-noi' },
        { text: 'Blog', link: '/blog' },
        { text: 'Contacte', link: '/contacte' },
      ],
    },
  ];
  