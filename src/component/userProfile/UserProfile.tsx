import React from "react";
import { styled } from "styled-components";
const UserProfile = () => {
  return (
    <>
      <UserProfileBox>
        <ImageWithTitleBox>
          <UserImage></UserImage>
          <UserTitle>김해김씨</UserTitle>
        </ImageWithTitleBox>
        <UserInfoBox>
          <UserName>홍길동</UserName>
          <UserInfo>게시글 0</UserInfo>
          <UserIntro>에습하의 윈터입니다 반가워요 ^^</UserIntro>
        </UserInfoBox>
        <CreateButton>글쓰기</CreateButton>
      </UserProfileBox>
    </>
  );
};
const UserProfileBox = styled.div`
  display: flex;
  margin: 4rem;
`;
const ImageWithTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  item-align: center;
  text-align: center;
  margin-right: 2rem;
`;
const UserImage = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: green;
  border-radius: 70%;
  overflow: hidden;
`;
const UserTitle = styled.div``;
const UserInfoBox = styled.div``;
const UserName = styled.div`
  line-height: 3rem;
`;
const UserInfo = styled.div`
  line-height: 3rem;
`;
const UserIntro = styled.div`
  margin-top: 2rem;
`;
const CreateButton = styled.button`
  width: 5rem;
  height: 2rem;
  margin-left: 30rem;
`;
export default UserProfile;
