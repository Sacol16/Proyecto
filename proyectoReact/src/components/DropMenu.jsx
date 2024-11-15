import React from 'react';

// Datos de cada sección de menú
const menuData = {
  LIVING: [
    {
      title: 'SEATING',
      items: [
        'The Art of Upholstery',
        'In Stock Living',
        'Sectionals',
        'Sofas',
        'Chairs',
        'Recliners',
        'Swivel Chairs',
        'Sunroom',
        'Ottomans & Benches',
        'Leather Seating',
        'Seating Cleaning Kits',
        'Seating Collections',
      ],
    },
    {
      title: 'TABLES & STORAGE',
      items: [
        'Coffee Tables',
        'Console Tables',
        'End Tables',
        'Martini Side Tables',
        'Media Consoles',
        'Cabinets',
        'Bookcases & Shelving',
        'Wall Units',
        'Modular Storage',
        'Entryway',
        'Touch Up Kits',
      ],
    },
    {
      image: {
        src: 'https://maisoncorbeil.com/media/cache/dakzilla_intervention/62059bcf85d52cea16eb85102c6fbeb8/3000x2000-blog-img-117784.jpg',
        alt: 'Accent Chair',
        linkText: 'SHOP ACCENT CHAIRS',
      },
    },
    {
      image: {
        src: 'https://www.ikea.com/co/es/images/products/linanaes-sofa-3-puestos-vissle-beige__1013895_pe829449_s5.jpg',
        alt: 'Sofas',
        linkText: 'SHOP SOFAS',
      },
    },
  ],
  DINING: [
    {
      title: 'SEATING',
      items: [
        'In Stock Dining',
        'Dining Chairs',
        'Bar & Counter Stools',
        'Dining Benches',
      ],
    },
    {
      title: 'TABLES & STORAGE',
      items: [
        'Dining Tables',
        'Buffets & Sideboards',
        'Bar & Counter Tables',
        'Bar Storage',
        'Touch Up Kits',
      ],
    },
    {
      title: 'TABLETOP',
      items: [
        'Dinnerware',
        'Flatware',
        'Glassware',
        'Barware',
        'Serveware',
        'Kitchen Accessories',
        'Table Linens',
      ],
    },
    {
      image: {
        src: 'https://img.koalaliving.com.au/products/127285/60839cd1-5db2-49b0-bc96-ded802d85274.png',
        alt: 'Dining Chair',
        linkText: 'SHOP DINING CHAIRS',
      },
    },
  ],
  BEDROOM: [
    {
      title: 'BEDROOM FURNITURE',
      items: [
        'In Stock Bedroom',
        'Beds',
        'Dressers & Chests',
        'Nightstands',
        'Mattresses & Box Springs',
        'Touch Up Kits',
      ],
    },
    {
      title: 'BEDDING',
      items: [
        'Duvet Covers',
        'Quilts and Bed Blankets',
        'Pillow Shams',
        'Bed Sheets and Pillowcases',
        'Pillow and Duvet Inserts',
        'Bedding Sets',
      ],
    },
    {
      image: {
        src: 'https://bedsbydesignuk.com/wp-content/uploads/2021/04/COGB46STE.1-Medium.jpg',
        alt: 'Beds',
        linkText: 'SHOP BEDS',
      },
    },
    {
      image: {
        src: 'https://www.westinstore.com/images/products/lrg/westin-hotel-timeless-bedding-set-HB-1260-02-BE_lrg.webp',
        alt: 'Bedding',
        linkText: 'SHOP BEDDING',
      },
    },
  ],
  OUTDOOR: [
    {
      title: 'OUTDOOR LIVING',
      items: [
        'In Stock Outdoor',
        'Chairs',
        'Sofas',
        'Sectionals',
        'Chaises & Daybeds',
        'Coffee & Accent Tables',
        'Sunroom',
        'Ottomans',
        'Outdoor Storage',
      ],
    },
    {
      title: 'OUTDOOR DINING',
      items: [
        'Dining Tables & Bars',
        'Dining Chairs',
        'Bar & Counter Stools',
        'Outdoor Kitchen',
        'Dining Benches',
      ],
    },
    {
      title: 'OUTDOOR DECOR & CARE',
      items: [
        'Fire Pits and Heat Lamps',
        'Outdoor Planters',
        'Outdoor Lighting',
        'Outdoor Lanterns',
        'Garden Décor & Fountains',
        'Outdoor Pillows',
        'Outdoor Poufs',
        'Indoor/Outdoor Rugs',
        'Umbrellas',
        'Outdoor Furniture Covers',
        'Outdoor Replacement Cushions',
        'Outdoor Furniture Care',
      ],
    },
    {
      image: {
        src: 'https://hips.hearstapps.com/hmg-prod/images/outer-furniture-sale-1659547573.png',
        alt: 'Outdoor Furniture',
        linkText: 'SHOP THE OUTDOOR SALE',
      },
    },
  ],
};

const DropdownMenu = ({ menu }) => {
  const sections = menuData[menu] || [];

  return (
    <div className="dropdown_content">
      {sections.map((section, index) => (
        <div className="dropdown_section" key={index}>
          {section.title && <h4>{section.title}</h4>}
          {section.items && (
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          )}
          {section.image && (
            <>
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="dropdown_image"
              />
              <a href="#">{section.image.linkText}</a>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
