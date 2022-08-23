import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.primary};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: absolute;
  right: 0;
  top: 0;
  width: 486px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Header = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: start end;

  span {
    font-size: 1.6875rem;
    line-height: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
  }

  button {
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    font-size: 28px;

    ::before {
      content: "x";
    }

    :hover {
      filter: brightness(0.8);
      transition: filter 0.2s;
      cursor: pointer;
    }
  }
`;

export const ProductsContent = styled.div`
  padding: 0 60px;
  flex: 1;
`;

export const TotalContent = styled.div`
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 700;
    font-size: 1.75rem;
    color: ${(props) => props.theme.white};
  }
`;

export const Footer = styled.button`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  padding: 20px 0;
  font-weight: 700;
  font-size: 1.75rem;

  :hover {
    filter: brightness(0.8);
    transition: filter 0.2s;
    cursor: pointer;
  }
`;
