import React from "react";
// Import Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

export default function GameDetail() {
  // Data
  const { game, screen, isLoading } = useSelector((state) => state.details);

  return (
    <>
      {!isLoading && (
        <CardShadow className="card-shadow">
          <Wrapper className="wrapper">
            <Detail className="detail">
              <Stats className="stats">
                <div className="rating">
                  <h3>{game.name}</h3>
                  <p>Rating: {game.rating}</p>
                </div>
                <Info className="info">
                  <h3>Platforms</h3>
                  <StyledPlatforms className="platforms">
                    {game.platforms.map((item) => (
                      <h3 key={item.platform.id}>{item.platform.name}</h3>
                    ))}
                  </StyledPlatforms>
                </Info>
              </Stats>
              <Media className="media">
                <img src={game.background_image} alt="image" />
              </Media>
              <Description
                className="description"
                dangerouslySetInnerHTML={{ __html: game.description }}
              ></Description>
              <div className="gallery">
                {screen.map((image) => (
                  <img key={image.id} src={image.image} alt="game" />
                ))}
              </div>
            </Detail>
          </Wrapper>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Wrapper = styled(motion.div)`
  width: 80%;
  position: relative;
  top: -50%;
`;

const Detail = styled(motion.div)`
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  color: black;

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
