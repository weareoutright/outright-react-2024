import React from "react";
import VOTE_VIDEO_IDS from "./voteVideoIDs";

const VoteGallery = () => {
  return (
    <section className="pane pane-vote">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pane-header">
              <h1>Voter Education</h1>
              <p>
                In partnership with{" "}
                <a
                  href="https://ascendantathlete.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ascendant Athlete
                </a>{" "}
                and voting rights organizations in Pennsylvania, Michigan, North
                Carolina, and Florida, the team at Outright developed PSAs from
                local athletes to educate voters about how to vote safely in the
                upcoming election.
                <br />
                <br />
                View and share the examples below in those communities.
              </p>
            </div>
            <div className="pane-content">
              <div className="row">
                {VOTE_VIDEO_IDS.map((videoId, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="card-vote video video-responsive">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Video ${index + 1}`}
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="spinner spinner-zoom">
          <div className="spinner-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default VoteGallery;
