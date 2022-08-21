import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.25rem;
  background-color: ${(props) => props.theme.primary};
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
