import React from 'react';

const MainContent = () => {
  return (
    <div className="main">
      <div className="small">
        <p className="title">3D Design Tool</p>
        <img className="smallImage" src="proyectoReact\src\assets\display.png" alt="Landing image" />
        <p className="msg">
          Introducing our innovative 3D Design Tool – now you can visualize your dream space with our furniture in a
          virtual room that matches your home. Drag, drop, and customize to see how each piece fits perfectly in your
          space. With realistic textures, multiple viewing angles, and even augmented reality integration, designing
          your perfect room has never been easier. Start creating your dream home today with just a few clicks!
        </p>
        <button className="cta">Try now</button>
      </div>

      <div className="left">
        <p className="title">3D Design Tool</p>
        <p className="msg">
          Introducing our innovative 3D Design Tool – now you can visualize your dream space with our furniture in a
          virtual room that matches your home. Drag, drop, and customize to see how each piece fits perfectly in your
          space. With realistic textures, multiple viewing angles, and even augmented reality integration, designing
          your perfect room has never been easier. Start creating your dream home today with just a few clicks!
        </p>
        <button className="cta">Try now</button>
      </div>

      <div className="right">
        <img src="/assets/display.png" alt="Landing image" />
      </div>
    </div>
  );
};

export default MainContent;
