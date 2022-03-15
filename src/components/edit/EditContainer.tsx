import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import MykeyWordArea from "./MykeyWordArea";



const EditContainer = () => {
  return (
    <Wrap>
      <CommonContainer>
        <Title>My Keyword</Title>
        <MykeyWordArea />
      </CommonContainer>
    </Wrap>
  );
};

export default EditContainer;

const Wrap = styled.main``;

const Title = styled.h5``;

