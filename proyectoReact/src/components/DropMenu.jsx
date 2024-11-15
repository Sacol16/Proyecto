import React from 'react';

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
  // Agrega más datos para otros menús como DINING, BEDROOM, etc.
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
