import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  span:first-child {
    font-size: 2.5rem;
    color: ${props => props.theme.gray100};
    font-weight: 600;
    margin-right: 5px;
  }

  span:last-child {
    font-size: 	1.25rem;
    color: ${props => props.theme.gray100};
    font-weight: 300;
  }
`;
