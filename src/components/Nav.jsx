import React, { useState } from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
// Redux and Routes
import { fetchSearch } from "../actions/gameAction";
import { useDispatch } from "react-redux";
// Animation
import { fadeIn } from "../../animation";

export default function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState();

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={submitSearch}>
        <input value={textInput} type="text" onChange={inputHandler} />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  h1 {
    font-family: "Abril Fatface", cursive;
  }

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }

  @media (max-width: 1300px) {
    input {
      width: 60%;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
