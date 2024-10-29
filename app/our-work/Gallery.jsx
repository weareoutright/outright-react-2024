import React, { useState, useEffect } from "react";
import PROJECT_SLUGS from "./client-work-pages";
import Image from "next/image.js";

const convertProjectSlugsToArray = (projectSlugs) => {
  return Object.values(projectSlugs).map((project) => {
    const { slug } = project.module;
    const { client_full_name, project_title } = project.module.hero.header;
    const { galleryThumbnail } = project;

    return {
      slug: slug,
      client_full_name: client_full_name,
      project_title: project_title,
      galleryThumbnail: galleryThumbnail,
    };
  });
};

const LazyGalleryItem = ({ item, key, waypoint, slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Immediately load the SVG without additional delay
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="work-page-gallery-item img-fluid"
      key={key}
      data-waypoint={waypoint}
    >
      <a href={`/our-work${slug}`}>
        <Image src={item.galleryThumbnail} alt="" />
        <div className="work-page-gallery-item-headings">
          <h5>{item.client_full_name}</h5>
          <h3>{item.project_title}</h3>
        </div>
      </a>
    </div>
  );
};

const Gallery = ({ waypoint }) => {
  const galleryObjects = convertProjectSlugsToArray(PROJECT_SLUGS);
  console.log(galleryObjects);

  return (
    <div
      className="work-page-gallery-grid"
      data-waypoint={waypoint}
      id="gallery"
    >
      {galleryObjects.map((item) => (
        <LazyGalleryItem
          item={item}
          key={item.project_title.split(" ").join("-")}
          data-waypoint={waypoint}
          waypoint={waypoint}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

export default Gallery;
