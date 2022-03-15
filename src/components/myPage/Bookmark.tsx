import styled from "@emotion/styled";
import BookmarkNav from "./BookmarkNav";

const Wrap = styled.div`
  background-color: #f9faff;
  width: 1920px;
  margin: 0 auto;
`;
const SideContainer = styled.div`
  margin: 78px 62px 0 340px;
`

const ContContainer = styled.div`
  margin-left: 50px;
  margin-top: 83px;
`
const SideBar = styled.div`
  width: 605px;
  height: 1050px;
  background-color: #144056;
  float: left;
`
const Content = styled.div`
  background-color: #f9faff;
  height: 1050px;
  width: 1315px;
  float: left;
`
const FilterList = styled.div`
  margin-left: 765px;
  select {
    padding-left: 10px;
    width: 160px;
    height: 40px;
    border: 1px solid #DADADA; 
    border-radius : 3px;
  }

  
`
const BookmarkList = styled.ul`
  margin-top: 52px;
  li {
    position: relative;
    padding: 14px 0 6px 25px;
    font-weight: 300;
    font-size: 14px;
    width: 925px;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  }
  h2 {
    font-weight: 600;
    font-size: 22px;
    color: #1D1D1D;
    margin-bottom: 11px;
  }
  li + li {
    margin-top: 20px;
  }
  li > div {
    display: inline-block;
  }
  a {
    position: absolute;
    top: 28px;
    right: 49px;
  }
`
const LogoPress = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #B2B2B2;
  margin-bottom: -4px;
`
const PressName = styled.div`
  margin-left: 4px;
  height: 24px;
  line-height: 12px;
`

const Wtime = styled.div`
  margin-left: 30px;
  height: 24px;
  line-height: 12px;
`

const PageNationItems = styled.div`
  margin-top: 81px;
  display: flex;
  span {
    font-weight: 300;
    font-size: 14px;
    color: #90A4AE;
    line-height: 30px;
  }
`

const PageNation = styled.ul`
  margin-left: 325px;
  li {
    display: inline-block;
  }
`
const Pages = styled.li`
  font-size: 14px;
  color: #9BA3A7;
  line-height: 1.5;
  text-align: center;
  a{
    display: block;
    width: 24px;
    height: 24px;
  }
  a.on {
    background-color: #C3EAE7;
    color: #37474F;
  }
`

const MoreIcon = styled.div`
  width: 16px;
  height: 4px;
  background: url("More.svg") no-repeat;
`

const DoubleLeftIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("DoubleLeft.svg") no-repeat;
`
const DoubleRightIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("DoubleRight.svg") no-repeat;
`
const LeftIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("Left.svg") no-repeat;
`
const RightIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("Right.svg") no-repeat;
`

const PageArrow = styled.li`
  width: 40px;
  height: 40px;
`
const Bookmark = () => {
  return (
  <Wrap>
    <SideBar>
      <SideContainer>
        <BookmarkNav/>
      </SideContainer>
    </SideBar>
    <Content>
      <ContContainer>
        <FilterList>
          <select name="filter">
            <option value="none">정렬순</option>
            <option value="최신순">최신순</option>
            <option value="인기순">인기순</option>
          </select>
        </FilterList>
        <BookmarkList>
          <li>
            <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
            <LogoPress/>
            <PressName>NDTV</PressName>
            <Wtime>3 minutes ago</Wtime>
            <a href="/">
              <MoreIcon/>
              </a>
          </li>
          <li>
            <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
            <LogoPress/>
            <PressName>NDTV</PressName>
            <Wtime>3 minutes ago</Wtime>
            <a href="/">
              <MoreIcon/>
            </a>
          </li>
          <li>
            <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
            <LogoPress/>
            <PressName>NDTV</PressName>
            <Wtime>3 minutes ago</Wtime>
            <a href="/">
              <MoreIcon/>
            </a>
          </li>
          <li>
            <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
            <LogoPress/>
            <PressName>NDTV</PressName>
            <Wtime>3 minutes ago</Wtime>
            <a href="/">
              <MoreIcon/>
            </a>
          </li>
          <li>
            <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
            <LogoPress/>
            <PressName>NDTV</PressName>
            <Wtime>3 minutes ago</Wtime>
            <a href="/"><MoreIcon/></a>
          </li>
          <li>
            <h2>Elon Musk donated over $5.7 bn in Tesla shares to charity in November</h2>
            <LogoPress/>
            <PressName>NDTV</PressName>
            <Wtime>3 minutes ago</Wtime>
            <a href="/"><MoreIcon/></a>
          </li>
        </BookmarkList>

        <PageNationItems>
          <span>pages 2 of 10</span>
          <PageNation>
            <PageArrow><a href="/"><DoubleLeftIcon/></a></PageArrow>
            <PageArrow><a href="/"><LeftIcon/></a></PageArrow>
            <Pages><a href="/">1</a></Pages>
            <Pages><a className="on" href="/">2</a></Pages>                       
            <Pages>...</Pages>
            <Pages><a href="/">10</a></Pages>
            <PageArrow><a href="/"><RightIcon/></a></PageArrow>
            <PageArrow><a href="/"><DoubleRightIcon/></a></PageArrow>
          </PageNation>
        </PageNationItems>
      </ContContainer>
    </Content>
  </Wrap>
  );
}

export default Bookmark;