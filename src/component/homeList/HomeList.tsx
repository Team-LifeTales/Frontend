import { styled } from "styled-components";
import Post from "../post/Post";

const HomeList = () => {
  return (
    <ImageList>
      <Post></Post>
    </ImageList>
  );
};

const ImageList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  background-color: #f8f2e9;
  padding-right: 5rem;
  @media screen and (max-width: 1200px) {
    padding-right: 0;
    margin-left: 20%;
    width: 80%;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    width: 100%;
  }
`;
export default HomeList;
