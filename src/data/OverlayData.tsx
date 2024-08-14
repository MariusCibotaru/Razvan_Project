import FonMonumente from '../images/Overlay/pamjatniki.png'
import FonGranit from '../images/Overlay/izdeliya-iz-granita.png'
import FonMese from '../images/Overlay/stoly-i-skameyki.png'

export interface Service {
    title: string;
    link: string;
  }
  
  export interface OverlayItem {
    image: string;
    title: string;
    services: Service[];
  }
  
  const OverlayData: OverlayItem[] = [
    {
      image: FonMonumente, 
      title: 'Monumente',
      services: [
        {
          title: 'Monumente Verticale',
          link: '/monumente-verticale', 
        },
        {
          title: 'Monumente Orizontale',
          link: '/monumente-orizontale', 
        },
      ],
    },
    {
      image: FonGranit,
      title: 'Produse Din Granit',
      services: [
        {
          title: 'Cruci Simple',
          link: '/cruci-simple', 
        },
        {
          title: 'Cruci Duble',
          link: '/cruci-duble', 
        },
      ],
    },
    {
      image: FonMese,
      title: 'Mese si Scaune',
      services: [
        {
          title: 'Plăci Simple',
          link: '/placi-simple', 
        },
        {
          title: 'Plăci Decorative',
          link: '/placi-decorative',
        },
      ],
    },
  ];
  
  export default OverlayData;
  