import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.white};
  margin-bottom: 30px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 0 10px;

  height: 95px;

  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  place-items: center;

  position: relative;

  & > span:nth-child(2) {
    color: ${(props) => props.theme.black};
    font-weight: 400;
    font-size: 0.8125rem;
  }

  & > span:last-child {
    color: ${(props) => props.theme.black};
    font-weight: 700;
    font-size: 0.875rem;
  }
`;

export const CloseButton = styled.button`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  font-size: 12px;
  position: absolute;
  top: -10px;
  right: -10px;

  :hover {
    filter: brightness(0.8);
    transition: filter 0.2s;
    cursor: pointer;
  }
`;
