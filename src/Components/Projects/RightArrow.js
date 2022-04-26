import React from "react";
import styled from "styled-components";
export const RightArrow = (props) => {
  const {
    setArrow,
    setIndex,
    index,
    projectsData,
    arrow,
    width,
    setShowedProjects,
    showedProjects,
  } = props;
  console.log(index);

  const handleClick = () => {
    setArrow("right");
    if (index === projectsData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  React.useEffect(() => {
    if (arrow === "right") {
      if (width < 500) {
        setShowedProjects([...showedProjects.slice(1, 3), projectsData[index]]);
      } else if (arrow === "right") {
        setShowedProjects([...showedProjects.slice(1, 4), projectsData[index]]);
      }
    }
  }, [index]);
  return <Arrow onClick={handleClick}>{">"}</Arrow>;
};

const Arrow = styled.button`
  cursor: pointer;
  width: 2vw;
  height: 2vw;
  font-size: 1vw;
  @media (max-width: 500px) {
    width: 2vh;
    height: 2vh;
    font-size: 1vh;
  }
`;
