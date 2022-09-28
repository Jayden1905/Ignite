import React from "react";
// Import Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

export default function GameDetail() {
  // Data
  const { game, screen } = useSelector((state) => state.details);
  const platforms = [];
  if (game.platforms !== undefined) {
    game.platforms.map((item) => platforms.push(item.platform));
  }

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {platforms.map((item) => (
                <h3 key={item.id}>{item.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt="image" />
        </div>
        <div className="gallery">
          {screen.map((image) => (
            <img key={image.id} src={image.image} alt="game" />
          ))}
        </div>
      </div>
    </div>
  );
}
