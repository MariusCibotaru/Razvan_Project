import Gallery1_1 from '../images/Gallery/Gallery1-1.jpg'
import Gallery1_2 from '../images/Gallery/Gallery1-2.jpg'
import Gallery1_3 from '../images/Gallery/Gallery1-3.jpg'
import Gallery2_1 from '../images/Gallery/Gallery2-1.jpg'
import Gallery2_2 from '../images/Gallery/Gallery2-2.jpg'
import Gallery2_3 from '../images/Gallery/Gallery2-3.jpg'


export interface GalleryItem {
    title: string;
    images: string[];
  }
  
  export const galleryData: GalleryItem[] = [
    {
      title: 'Monumente',
      images: [
        Gallery1_1,
        Gallery1_2,
        Gallery1_3,
      ],
    },
    {
      title: 'Mese',
      images: [
        Gallery2_1,
        Gallery2_2,
        Gallery2_3,
      ],
    },
  ];
  
  export default galleryData;
  