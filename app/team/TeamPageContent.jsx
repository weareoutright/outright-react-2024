"use client";

import React, { useEffect, useRef, useState } from "react";
import TEAM_IMAGES from "./assets";
import TEAM_CARDS from "./team_constants";
import SCRIBBLE_LINE from "../assets/scribble-line.gif";
import OUTRIGHT_O from "../assets/outright-o.svg";
import Image from "next/image";

const TeamPageContent = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [activeCards, setActiveCards] = useState(
    Array(TEAM_CARDS.length).fill(false) // Initialize all cards as inactive
  );
  const cardRefs = useRef([]);

  useEffect(() => {
    // Shuffle the TEAM_CARDS array when the component mounts
    const shuffled = shuffleArray(TEAM_CARDS);
    setShuffledCards(shuffled);
  }, []);

  useEffect(() => {
    // Apply random styles to each card on mount
    cardRefs.current.forEach((card, index) => {
      if (card) setRandomStyles(card); // Ensure card exists
    });
  }, [shuffledCards]);

  const toggleFunCard = (index) => {
    setActiveCards((prevActiveCards) =>
      prevActiveCards.map((isActive, i) => (i === index ? !isActive : isActive))
    );
  };

  const setRandomStyles = (card) => {
    const styles = {
      bg: Math.floor(Math.random() * 10) + 1,
      fg: Math.floor(Math.random() * 10) + 1,
      pos: Math.floor(Math.random() * 6) + 1,
    };

    Object.keys(styles).forEach((key) => {
      card.classList.add(`style-${key}-${styles[key]}`);
    });
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <section className="pane pane-team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className="pane-header">
              <h1 className="pane-title">
                Meet the{" "}
                <span>
                  team
                  <Image
                    src={SCRIBBLE_LINE}
                    className="scribble"
                    alt="Decorative line"
                    width={100}
                    height={100}
                  />
                </span>
              </h1>
            </header>
            <div className="pane-content">
              <div className="row">
                {shuffledCards.map((card, index) => {
                  const cardData = {
                    name: card.name.toLowerCase(),
                    title: card.title,
                    funTitle: card.funTitle,
                  };

                  return (
                    <div
                      key={index}
                      className="col-12 col-md-6 col-lg-4 col-xl-3"
                    >
                      <div
                        className={`team-card ${
                          activeCards[index] ? "fun" : ""
                        }`}
                        onClick={() => toggleFunCard(index)}
                        ref={(el) => (cardRefs.current[index] = el)}
                      >
                        <div className="wipe-wrapper">
                          {/* Front of the Card */}
                          <div className="front">
                            <div className="img-container">
                              <Image
                                className="cardColor img-fluid"
                                src={TEAM_IMAGES[cardData.name]}
                                alt={cardData.name}
                                width={100}
                                height={100}
                              />
                            </div>
                            <h3 className="card-text">
                              <span className="name">{cardData.name}</span>
                              <br />
                              <span className="title active">
                                {cardData.title}
                              </span>
                            </h3>
                          </div>

                          {/* Back of the Card */}
                          <div className="back">
                            <div className="card-bg">
                              <Image
                                src={OUTRIGHT_O}
                                alt="Background decoration"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="img-container">
                              <Image
                                className="cardColor img-fluid"
                                src={TEAM_IMAGES[cardData.name]}
                                alt={cardData.name}
                                width={100}
                                height={100}
                              />
                            </div>
                            <h3 className="card-text">
                              <span className="name">{cardData.name}</span>
                              <br />
                              <span className="fun-title">
                                {cardData.funTitle}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPageContent;
