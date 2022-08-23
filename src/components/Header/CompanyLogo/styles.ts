import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;

  span:first-child {
    font-size: 2.5rem;
    color: ${props => props.theme.gray100};
    font-weight: 600;
    margin-right: 5px;
    line-height: 2rem;
  }

  span:last-child {
    font-size: 	1.25rem;
    color: ${props => props.theme.gray100};
    font-weight: 300;
  }
`;
