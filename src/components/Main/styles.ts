import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.gray100};
`;

export const ProductsContainer = styled.div`
  max-width: 1120px;
  margin: 10px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
