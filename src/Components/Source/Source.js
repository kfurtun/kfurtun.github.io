import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import useWindowDimensions from "../useWindowDimesion";

export const Source = () => {
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <Link href="https://github.com/kfurtun/kfurtun.github.io" target="_blank">
        <Container>
          <div>
            <FaGithub size={width > 500 ? "2.2vw" : "2.2vh"} color="#333333" />
          </div>
          <div>Source for this website</div>
        </Container>
      </Link>
    </Wrapper>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  width: 15vw;
  background: white;
  font-size: 0.9vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5vw;
  transition: 1s;
  border-radius: 12px;

  &:hover {
    background-color: rgba(195, 192, 194, 0.8);
    transform: translate(0.3vw, 0.3vw);
    transition: 1s;
  }

  @media (max-width: 500px) {
    font-size: 0.9vh;
    padding: 0.5vh;
    width: 15vh;
    transform: translate(0.3vh, 0.3vh);
  }
`;

const Wrapper = styled.div`
  width: 98vw;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 500px) {
    width: 96vw;
  }
`;
