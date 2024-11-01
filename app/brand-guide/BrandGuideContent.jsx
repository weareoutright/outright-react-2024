import React from "react";
import BRAND_GUIDE_ASSETS from "./assets/assetIDs";
import Image from "next/image";
import Link from "next/link";

const BrandGuideContent = () => {
  return (
    <>
      <div className="overlay pane-overlay">
        <div className="overlay-content">
          <h1>
            Get Our
            <br />
            Brand
            <br />
            Guide
          </h1>
          <Link
            className="btn"
            download
            href="/Outright_Brandkit.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Link>
        </div>
      </div>

      <section className="pane pane-brand-guide">
        <div className="pane-content">
          {BRAND_GUIDE_ASSETS.map((asset, index) => {
            return (
              <div
                key={index}
                className={`section-bg section-bg-${asset.layout}`}
              >
                <Image
                  src={asset.file}
                  alt={`Brand Guide ${asset.file}`}
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BrandGuideContent;
