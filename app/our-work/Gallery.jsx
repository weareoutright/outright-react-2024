"use client";

import React from "react";
import { GALLERY_ITEMS } from "./galleryItems.js";

const Gallery = () => {
  return (
    <div className="work-page-gallery-grid">
      {GALLERY_ITEMS.map((item) => {
        const key = item.title.split(" ").join("-");
        return (
          <div className="work-page-gallery-item img-fluid" key={key}>
            {item.svg}
            <div className="work-page-gallery-item-headings">
              <h5>{item.organization}</h5>
              <h3>{item.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
