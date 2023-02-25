import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerDetails = styled.div`
  display: flex;
  gap: 12px;
`;
export const DetailsImg = styled.img`
  object-fit: contain;
  width: 375px;
  height: 478px;
  margin-bottom: 20px;
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.16;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const MovieList = styled.ul`
  margin-bottom: 20px;
`;

export const MovieListItem = styled.li`
  display: flex;
  padding-bottom: 8px;
`;
export const MovieListItemTitle = styled.p`
  width: 170px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  color: #8c8c8c;
  text-align: left;
`;
export const MovieDetailsVotes = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.17;
`;

export const MovieDetailsVoteValue = styled.span`
  display: inline-block;
  text-align: center;
  padding-bottom: 1px;
  padding-top: 1px;
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background-color: #ff6b01;
`;

export const MovieDetailsVotesValue = styled.span`
  display: inline-block;
  text-align: center;
  padding-bottom: 1px;
  padding-top: 1px;
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background-color: #f7f7f7;
`;

export const MovieDetailsText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.7;
  color: #000000;
  text-align: left;
  padding: 0px 10px 0px 0px;
  margin-bottom: 30px;
`;
export const LinkMovieDetails = styled.ul`
  padding: 20px;
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;
export const LinkBtn = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;

  color: black;
  font-weight: 500;
  font-size: 20px;
  background-color: rgb(220, 211, 200);
  border: 1px solid black;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
