import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import useWindowDimensions from "../useWindowDimesion";

export const ItemLink = (props) => {
  const { width } = useWindowDimensions();

  return (
    <Wrapper>
      <Link href="https://www.linkedin.com/in/kfurtun/" target="_blank">
        <FaLinkedin size={width > 500 ? "2.2vw" : "2.2vh"} color="#2867B2" />
      </Link>
      <Link href="https://github.com/kfurtun/" target="_blank">
        <FaGithub size={width > 500 ? "2.2vw" : "2.2vh"} color="#333333" />
      </Link>
      <Link href="mailto:kfurtun@gmail.com">
        <MdEmail size={width > 500 ? "2.2vw" : "2.2vh"} color="#B23121" />
      </Link>
    </Wrapper>
  );
};

const Link = styled.a`
  text-decoration: none;
  transition: 500ms;
  &:hover {
    transform: scale(1.2);
    transition: 500ms;
  }
`;

const Wrapper = styled.div`
  width: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    width: 10vh;
  }
`;
