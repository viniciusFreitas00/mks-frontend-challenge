import styled from "styled-components";

export const AmountButtonContainer = styled.div`
  span {
    font-size: 0.75rem;
    font-weight: 400;
  }

  div {
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    display: flex;

    span {
      font-size: 0.625rem;
      margin: 5px 0;
      padding: 0 7px;
      border-left: 0.3px solid #bfbfbf;
      border-right: 0.3px solid #bfbfbf;
    }

    button {
      background-color: ${(props) => props.theme.white};
      border: 0;
      padding: 0 10px;
      font-size: 0.75rem;

      :hover {
        filter: brightness(0.9);
        transition: filter 0.2s;
        cursor: pointer;
      }
    }
  }
`;
