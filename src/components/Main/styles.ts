import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  /* height: 100%;
  background-color: ${(props) => props.theme.gray100}; */
`;

export const ProductsContainer = styled.div`
  max-width: 1120px;
  margin: 40px auto;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
