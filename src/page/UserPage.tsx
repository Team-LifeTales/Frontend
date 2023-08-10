import React from "react";
import LeftBar from "../component/leftBar/LeftBar";
import UserProfile from "../component/userProfile/UserProfile";
import { styled } from "styled-components";
const UserPage = () => {
  return (
    <>
      <LeftBar />
      <User>
        <UserProfile></UserProfile>
      </User>
    </>
  );
};
const User = styled.div`
  margin-left: 15rem;
  display: grid;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;
export default UserPage;
