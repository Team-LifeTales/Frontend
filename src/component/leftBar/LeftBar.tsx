import { styled } from "styled-components";
const navContentList = [
  { name: "홈", url: "/img/home.png" },
  { name: "검색", url: "/img/search.png" },
  { name: "프로필", url: "/img/profile.png" },
  { name: "가족", url: "/img/family.png" },
  { name: "채팅", url: "/img/chat.png" },
  { name: "A.I가이드", url: "/img/AI.png" },
  { name: "가족일기", url: "/img/diary.png" },
  { name: "설정", url: "/img/setting.png" },
];
const LeftBar = () => {
  return (
    <LeftBarBox>
      <LogoBox>LOGO</LogoBox>
      <Navigation>
        <ul style={{ padding: "0", margin: "0" }}>
          {navContentList.map((value, index) => {
            return (
              <NavContent key={index}>
                <img src={value.url} style={{ marginRight: "0.5rem" }} />
                {value.name}
              </NavContent>
            );
          })}
        </ul>
      </Navigation>
      <UserInfo>
        <UserImg>
          <UserImgContent src="/img/AI.png"></UserImgContent>
        </UserImg>
        <UserName>
          <p style={{ fontSize: "1.5rem" }}>UserName</p>
          <p>#UserNumber</p>
        </UserName>
      </UserInfo>
    </LeftBarBox>
  );
};

const LeftBarBox = styled.div`
  width: 15rem;
  height: 100vh;
  background-color: #f8f2e9;
  position: fixed;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const LogoBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Navigation = styled.div`
  height: 40rem;
`;
const NavContent = styled.li`
  list-style-type: none;
  margin-left: 3rem;
  line-height: 5rem;
  padding: 0;
  color: #2d9037;
  font-size: 1.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  line-height: 1rem;
`;
const UserImg = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: green;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 1rem;
`;
const UserImgContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const UserName = styled.div``;

export default LeftBar;
