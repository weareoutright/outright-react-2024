import React from "react";
import VIDEOS from "./videos";

const VideoGallery = () => {
  return (
    <section className="pane-video">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pane-header">
              <h1>Outright + Video</h1>
              <p>Bringing our clients&apos; vision to life</p>
            </div>

            <div className="pane-content">
              <div className="row">
                {VIDEOS.map((video, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="card-video">
                      <div className="video video-responsive">
                        <iframe
                          width="100%"
                          height="100%"
                          src={video.embedURL}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${video.title} by ${video.client}`} // Added for accessibility
                        ></iframe>
                      </div>
                      <h2>
                        <strong>{video.title}</strong> {video.client}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <p>
                <strong>
                  Client videos are for review only. Please do not distribute
                  publicly.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Spinner Element */}
        <div className="spinner spinner-video">
          <div className="spinner-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
