import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  margin: 0 10px 10px;
  border-radius: 8px;
  width: 217px;
`;

export const ProductsInfoContent = styled.div`
  padding: 0 10px;
  flex: 1;

  div {
    display: flex;
    align-items: flex-end;

    span:first-child {
      flex: 2;
      font-weight: 400;
      font-size: 1rem;
    }

    span:last-child {
      flex: 1;
      background-color: ${(props) => props.theme.black};
      color: ${(props) => props.theme.white};
      font-size: 0.9375rem;
      font-weight: 700;
      padding: 5px 7px;
      border-radius: 8px;
      margin-left: 2px;
    }
  }

  & > span {
    font-size: 0.625rem;
    line-height: 0.75rem;
    font-weight: 300;
  }
`;

export const BuyButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  padding: 10px 0;

  :hover {
    filter: brightness(0.8);
    cursor: pointer;
    transition: filter 0.2s;
  }

  span {
    color: ${(props) => props.theme.white};
    margin-left: 10px;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;
