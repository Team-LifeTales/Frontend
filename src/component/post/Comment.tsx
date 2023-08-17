import React from "react";
import { styled } from "styled-components";
const Comment = () => {
  return (
    <>
      <CommentBox></CommentBox>
      <CommentInput placeholder="댓글을 입력하세요"></CommentInput>
    </>
  );
};
const CommentBox = styled.div`
  width: 100%;
`;
const CommentInput = styled.textarea`
  font-size: 1rem;
  height: 4rem;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  background-color: var(--postDetailbackground-color);
  padding: 0.5rem;
`;
export default Comment;
