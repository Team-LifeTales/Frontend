import React from "react";
import { styled } from "styled-components";
const UserProfile = () => {
  return (
    <>
      <UserProfileBox>
        <ImageWithTitleBox>
          <UserImage>
            <Card>
              <Front></Front>
              <Back></Back>
            </Card>
          </UserImage>
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
  padding-bottom: 1rem;
  border-bottom: 1px solid;
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
  width: 15rem;
  height: 15rem;
  overflow: hidden;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.7s;
  border-radius: 50%;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;
const CardOption = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  backface-visibility: hidden;
`;
const Front = styled(CardOption)`
  background: green;
`;
const Back = styled(CardOption)`
  background: royalblue;
  transform: rotateY(180deg);
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
