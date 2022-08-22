import styled from "styled-components";

export const CartButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.gray100};
  padding: 15px 20px;
  border-radius: 8px;
  border: 0;

  :hover {
    filter: brightness(0.8);
    cursor: pointer;
    transition: filter 0.2s;
  }

  span:last-child {
    margin-left: 15px;
    font-weight: 700;
    font-size: 1.125rem;
  }
`;
