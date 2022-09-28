import React from "react";
// Import Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

export default function Game({ name, released, image, id }) {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyleGames onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyleGames>
  );
}

const StyleGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
