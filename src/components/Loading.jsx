import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0.01,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};

export default function Loading() {
  return (
    <Container>
      <Loader>
        <BallStyle
          transition={bounceTransition}
          animate={{
            y: ["100%", "-100%"],
            backgroundColor: ["#ff6699", "#6666ff"],
          }}
        ></BallStyle>
      </Loader>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Loader = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`;

const BallStyle = styled(motion.span)`
  display: block;
  border-radius: 50%;
  width: 10rem;
  line-height: 25px;
  background: black;
`;
