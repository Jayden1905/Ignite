import React, { useEffect } from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
// Import Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Import Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
// Animation
import { fadeIn } from "../../animation";

export default function Home() {
  // get current locaiton
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Get that data back
  const { popular, newGames, upcomming, isLoading, searched } = useSelector(
    (state) => state.games
  );

  return (
    <>
      {!isLoading && (
        <GameList variants={fadeIn} initial="hidden" animate="show">
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {pathId && <GameDetail pathId={pathId} />}
            </AnimatePresence>

            {searched.length ? (
              <div className="searched">
                <h2>Searched Games</h2>
                <Games>
                  {searched.map((game) => (
                    <Game
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                    />
                  ))}
                </Games>
              </div>
            ) : (
              ""
            )}

            <h2>Upcomming Games</h2>
            <Games>
              {upcomming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </AnimateSharedLayout>
        </GameList>
      )}
    </>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }

  @media (max-width: 780px) {
    padding: 0rem 1rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
`;
