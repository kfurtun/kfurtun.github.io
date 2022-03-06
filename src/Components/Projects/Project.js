import styled from "styled-components";

export const Project = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <Container img={project.img}>
        <InfoContainer>
          <Libraries>{project.library}</Libraries>
          <Name>{project.name}</Name>
        </InfoContainer>
      </Container>
    </a>
  );
};

const InfoContainer = styled.div`
  width: 12vw;
  height: 5vw;
  background: black;
  position: absolute;
  bottom: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 10vh;
    height: 5vh;
  }
`;

const Container = styled.button`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 12vw;
  height: 12vw;
  border: none;
  margin-right: 2vw;
  margin-top: 2vw;
  padding: 0;
  position: relative;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
    transition: 1s;

    cursor: pointer;
  }
  &:hover ${InfoContainer} {
    background-color: rgba(195, 192, 194, 0.41);
    cursor: pointer;
    display: flex;
  }

  @media (max-width: 500px) {
    width: 10vh;
    height: 10vh;
    margin-top: 2vh;
  }
`;

const Libraries = styled.div`
  font-size: 1vw;
  @media (max-width: 500px) {
    font-size: 1vh;
  }
`;
const Name = styled.div`
  font-size: 1.2vw;
  @media (max-width: 500px) {
    font-size: 1.2vh;
  }
`;