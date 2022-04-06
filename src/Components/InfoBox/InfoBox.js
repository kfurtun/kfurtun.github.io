import styled from "styled-components";
import { ItemLink } from "../ItemLink";
import image from "../../images/image.jpeg";

export const InfoBox = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={image} alt="kutay" />
      </ImgContainer>
      <InfoContainer>
        <Text isBold={true} size="2.5vw" mobileSize="2.5vh">
          Kutay Furtun
        </Text>
        <Text isBold={true} size="1.5vw" mobileSize="1.5vh">
          Software Developer
        </Text>
        <Text size="1vw" mobileSize="1vh">
          Vancouver, BC, Canada
        </Text>
        <Text size="1.1vw" mobileSize="1.1vh">
          JS|React|React Native|NodeJS|MS SQL|MongoDB
        </Text>
        <Links>
          <ItemLink />
        </Links>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 30vw;
  height: 20vw;
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  position: relative;
  border-radius: 12px;
  background: white;

  @media (max-width: 500px) {
    width: 30vh;
    height: 20vh;
  }
`;
const ImgContainer = styled.div`
  position: absolute;
  top: calc(-1 * (10vw) / 2);
  @media (max-width: 500px) {
    top: calc(-1 * (10vh) / 2);
  }
`;

const Img = styled.img`
  border-radius: 100%;
  width: 10vw;

  @media (max-width: 500px) {
    width: 10vh;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 6vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    top: 6vh;
  }
`;

const Text = styled.div`
  margin-bottom: 0.5vw;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.isBold && "bold"};

  @media (max-width: 500px) {
    top: 6vh;
    font-size: ${(props) => props.mobileSize};
  }
`;

const Links = styled.div`
  margin-top: 0.5vw;
`;
