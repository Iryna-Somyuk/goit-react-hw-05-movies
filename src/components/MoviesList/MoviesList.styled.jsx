import styled from "@emotion/styled";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 16px;
  
`;

export const CardWrapper = styled.li`
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const CardImg = styled.img`
  border-radius: 4px;
`

export const MovieName = styled.h2`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  font-size: 25px;
  &:hover {
    color: orange;
  }

`;