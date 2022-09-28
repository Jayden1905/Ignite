import React, { useEffect } from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
// Import Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Import Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Get that data back
  const { popular, newGames, upcomming } = useSelector((state) => state.games);

  return (
    <GameList>
      <GameDetail />
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
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
