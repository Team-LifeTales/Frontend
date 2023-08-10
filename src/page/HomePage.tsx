import HomeList from "../component/homeList/HomeList";
import LeftBar from "../component/leftBar/LeftBar";
import { styled } from "styled-components";
import RightBar from "../component/rightBar/RightBar";
const HomePage = () => {
  return (
    <Test>
      <LeftBar />
      <HomeList></HomeList>
      <RightBar />
    </Test>
  );
};
const Test = styled.div`
  background-color: #f8f2e9;
`;
export default HomePage;
