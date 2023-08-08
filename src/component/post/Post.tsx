import { styled } from "styled-components";
const Post = () => {
  return (
    <>
      <PostTitle>2023.08.08</PostTitle>
      <PostImage></PostImage>
    </>
  );
};
const PostTitle = styled.div`
  text-align: right;
`;
const PostImage = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: green;
`;
export default Post;
