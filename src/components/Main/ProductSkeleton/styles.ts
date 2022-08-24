import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  margin: 10px;
  border-radius: 8px;
  width: 217px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  padding: 20px 0;
`;

export const ProductsInfoContent = styled.div`
  padding: 0 10px;
  flex: 1;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 5px 0;
  }
`;
