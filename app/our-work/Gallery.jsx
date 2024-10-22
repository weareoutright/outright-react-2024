import React, { useState, useEffect } from "react";
import { GALLERY_ITEMS } from "./galleryItems.js";
import Image from "next/image.js";

const LazyGalleryItem = ({ item, waypoint, href }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Immediately load the SVG without additional delay
    setIsLoaded(true);
  }, []);

  const key = item.title.split(" ").join("-");

  return (
    <div
      className="work-page-gallery-item img-fluid"
      key={key}
      data-waypoint={waypoint}
    >
      <a href={`/${href}`}>
        <Image src={item.src} alt="" />
        <div className="work-page-gallery-item-headings">
          <h5>{item.organization}</h5>
          <h3>{item.title}</h3>
        </div>
      </a>
    </div>
  );
};

const Gallery = ({ waypoint }) => {
  return (
    <div
      className="work-page-gallery-grid"
      data-waypoint={waypoint}
      id="gallery"
    >
      {GALLERY_ITEMS.map((item) => (
        <LazyGalleryItem
          item={item}
          key={item.title.split(" ").join("-")}
          data-waypoint={waypoint}
          waypoint={waypoint}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default Gallery;
