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
      <PostBox>
        <PostTitle>2023.08.08</PostTitle>
        <PostImage src="/img/AI.png" onClick={onModal}></PostImage>
      </PostBox>
      <PostDetail modalIsOpen={modalIsOpen} offModal={offModal}></PostDetail>
    </>
  );
};
const PostBox = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
const PostTitle = styled.div`
  text-align: right;
`;
const PostImage = styled.img`
  width: 45rem;
  height: 35rem;
  cursor: pointer;
  object-fit: cover;
`;
export default Post;
