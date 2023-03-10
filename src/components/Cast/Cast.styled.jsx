import styled from '@emotion/styled';

export const CastTitle = styled.h2`
  padding: 4px;
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: black;
  margin: 20px auto;
  text-align: center;
`;

export const ContainerCast = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
`;

export const CardWrapperCast = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  > a {
    text-decoration: none;
  }
`;

export const Foto = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 5px;
`;

export const ActorName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
