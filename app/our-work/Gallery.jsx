import React, { useState, useEffect } from "react";
import { GALLERY_ITEMS } from "./galleryItems.js";
import Skeleton from "react-loading-skeleton";
import Image from "next/image.js";

const LazyGalleryItem = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Immediately load the SVG without additional delay
    setIsLoaded(true);
  }, []);

  const key = item.title.split(" ").join("-");

  return (
    <>
      {isLoaded ? (
        <div className="work-page-gallery-item img-fluid" key={key}>
          <Image src={item.src} />
          <div className="work-page-gallery-item-headings">
            <h5>{item.organization}</h5>
            <h3>{item.title}</h3>
          </div>
        </div>
      ) : (
        <div className="card-container">
          <Skeleton height={50} width={300} />
          <Skeleton height={40} width={200} />
          <Skeleton height={40} width={150} />
        </div>
      )}
    </>
  );
};

const Gallery = () => {
  return (
    <div className="work-page-gallery-grid">
      {GALLERY_ITEMS.map((item) => (
        <LazyGalleryItem item={item} key={item.title.split(" ").join("-")} />
      ))}
    </div>
  );
};

export default Gallery;
