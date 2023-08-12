import { styled } from "styled-components";
import { useState } from "react";
import PostDetail from "./PostDetail";
const Post = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const offModal = () => {
    setIsOpen(false);
  };
  const onModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <PostImage src="/img/AI.png" onClick={onModal}></PostImage>
      <PostDetail modalIsOpen={modalIsOpen} offModal={offModal}></PostDetail>
    </>
  );
};

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
`;
export default Post;
