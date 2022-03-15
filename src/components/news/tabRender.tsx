import styled from "@emotion/styled";
import MainContainer from "@/components/news/main/MainContainer";
import TabListContainer from "@/components/news/tabs/TabListContainer";
const tabRender = () => {
  return (
    <TabView>
      <TabListContainer />
      <MainContainer />
    </TabView>
  );
};

export default tabRender;

const TabView = styled.div`
`;
