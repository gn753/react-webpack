import styled from "@emotion/styled";

const MyKeyword = () => {
  return (
    <KeyWordItem>
      <span>test1</span>
      <i role="button">닫기</i>
    </KeyWordItem>
  );
};

const MykeyWordArea = () => {
  return (
    <Wrap>
      <div className="mykeyword_inner">
        <MyKeyword />
        <MyKeyword />
        <MyKeyword />
      </div>
      <button>편집</button>
    </Wrap>
  );
};

export default MykeyWordArea;

const Wrap = styled.section`
  display: flex;
  margin-top: 20px;
  .mykeyword_inner {
    display: flex;
    gap: 0 10px;
    width: calc(100% - 95px);
    height: 120px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #d4d6d1;
    border-radius: 5px;
    margin-right: 10px;
  }
  button {
    width: 95px;
    height: 120px;
    outline: none;
    border-color: transparent;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const KeyWordItem = styled.div`
  height: 30px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
`;
