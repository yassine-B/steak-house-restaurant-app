import {
  ArrowIcon,
  MobileHomeIcon,
  MobileMenuIcon,
  MobilePromotionsIcon,
  MobileAboutIcon,
  BeefIcon,
  SaladIcon,
  SauceIcon
} from '@public/icons';

import promotion_1 from '../images/weekend_specials.jpg';
import promotion_2 from '../images/family_feast.jpg';
import promotion_3 from '../images/appetizers.jpg';

import specials_1 from '../images/ribeye_steak.jpg';
import specials_2 from '../images/tbone_steak.jpg';
import specials_3 from '../images/sirloin_steak.jpg';
import specials_4 from '../images/filet_mignon.jpg';

import reservation_1 from '../images/reservation_image.jpg';

export const navigationList = [
  {
    id: 'nav_1',
    icon: <MobileHomeIcon />,
    path_name: 'home',
    path_link: '/'
  },
  {
    id: 'nav_2',
    icon: <MobileMenuIcon />,
    path_name: 'menu',
    path_link: '/menu'
  },
  {
    id: 'nav_3',
    icon: <MobilePromotionsIcon />,
    path_name: 'promos',
    path_link: '/promos'
  },
  {
    id: 'nav_4',
    icon: <MobileAboutIcon />,
    path_name: 'about',
    path_link: '/about'
  }
];

export const content = {
  heroSection: {
    title: 'Savor the Perfect Steak',
    subTitle: 'Handcrafted Steaks, Grilled to Perfection',
    description:
      "Indulge in the finest cuts, expertly grilled to your preference. Whether you're a fan of rare or well-done, we have the perfect steak waiting for you.",
    buttonText: 'Explore Our Menu'
  },
  categoriesSection: {
    title: 'our steak selection',
    description: 'from prime cuts to gourmet sides and signature sauces.',
    linkText: 'view All categories',
    categories: [
      {
        id: 'category_1',
        title: 'Prime Cuts',
        icon: <BeefIcon />,
        description:
          'Experience the richness of our prime cuts, meticulously selected for quality and flavor.',
        buttonText: 'View Prime Cuts'
      },
      {
        id: 'category_2',
        title: 'Gourmet Sides',
        icon: <SaladIcon />,
        description: 'Complement your steak with our gourmet sides, crafted to elevate every bite.',
        buttonText: 'Explore Sides',
        buttonIcon: <ArrowIcon />
      },
      {
        id: 'category_3',
        title: 'Signature Sauces',
        icon: <SauceIcon />,
        description:
          'Discover our unique sauces, each designed to bring out the best in your steak.',
        buttonText: 'See Sauces',
        buttonIcon: <ArrowIcon />
      }
    ]
  },
  specialTodaySection: {
    title: 'Today’s Specials',
    description: 'Delight in our chef’s specials, available for a limited time only.',
    linkText: 'See All Specials',
    specials: [
      {
        id: 'specials_1',
        imageSource: specials_1,
        imageDescription: 'Ribeye Steak',
        title: 'Ribeye Steak',
        description: 'Juicy and flavorful, served with a side of roasted vegetables.',
        price: '$32.99',
        oldPrice: '$37.99',
        discount: '15% off'
      },
      {
        id: 'specials_2',
        imageSource: specials_2,
        imageDescription: 'T-Bone Steak',
        title: 'T-Bone Steak',
        description: 'A hearty cut with both filet and strip, perfect for the true steak lover.',
        price: '$44.99',
        oldPrice: '$49.99',
        discount: '10% off'
      },
      {
        id: 'specials_3',
        imageSource: specials_3,
        imageDescription: 'Sirloin Steak image',
        title: 'Sirloin Steak',
        description: 'Lean and tender, grilled to perfection and served with a side salad.',
        price: '$28.99',
        oldPrice: '$34.99',
        discount: '20% off'
      },
      {
        id: 'specials_4',
        imageSource: specials_4,
        imageDescription: 'Filet Mignon image',
        title: 'Filet Mignon',
        description: 'Melt-in-your-mouth filet, paired with garlic mashed potatoes.',
        price: '$39.99',
        oldPrice: '$44.99',
        discount: '10% off'
      }
    ]
  },
  promotionSection: {
    title: 'Exclusive Offers',
    description: 'Don’t miss out on our latest promotions. Available for a limited time only.',
    linkText: 'Explore Promotions',
    promotions: [
      {
        id: 'promotion_1',
        linkText: 'view details',
        imageSource: promotion_1,
        imageDescription: 'Weekend Special image',
        title: 'Weekend Special',
        description:
          'enjoy a special treat with every steak order, available exclusively this weekend.'
      },
      {
        id: 'promotion_2',
        linkText: 'view details',
        imageSource: promotion_2,
        imageDescription: 'Family Feast image',
        title: 'Family Feast',
        description: 'Enjoy a 20% discount on family orders this weekend.'
      },
      {
        id: 'promotion_3',
        linkText: 'view details',
        imageSource: promotion_3,
        imageDescription: 'Happy Hour image',
        title: 'Happy Hour',
        description: 'Half-priced appetizers every weekday from 4-6 PM.'
      }
    ]
  },
  reservationSection: {
    title: 'Book Your Table',
    description: 'Reserve your spot at the table and enjoy a steak experience like no other.',
    linkText: 'book a table',
    note: 'Please note: Reservations are held for 15 minutes past the reserved time.',
    imageSource: reservation_1,
    imageDescription: 'exclusive gourmet steaks image',
    imageTitle: 'experience fine dining with our exclusive gourmet steaks'
  },
  subscribeSection: {
    title: 'Join Our Steak Lovers Club',
    description: 'Sign up to receive exclusive offers, recipes, and more straight to your inbox.'
  },
  footerSection: {
    address: '1234 Steak Lane, New York, NY 10001',
    tel: '(555) 123-4567',
    email: 'info@steakwebapp.com'
  }
};
