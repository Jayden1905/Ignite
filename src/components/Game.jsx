import React from "react";
// Import Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../../util";
import { popup } from "../../animation";

export default function Game({ name, released, image, id }) {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyleGames
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${id}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyleGames>
  );
}

const StyleGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
