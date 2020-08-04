import styled from 'styled-components';

export const FeedbackBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  width: 60%;
`;

export const Feedback = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100px;
  margin: 10px 0;
  background: var(--gray);
  border-radius: 15px;
`;

export const UserPicture = styled.span`
  padding: 20px;
`;


export const Container = styled.div`
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.h3`
  font-weight: bold;
  color: var(--black);
`;

export const CatName = styled.h6`
  position: relative;
  right: 20px;
  font-weight: bold;
  color: var(--dark-gray);
`;

export const Date = styled.div`
  position: absolute;
  bottom: 0;
  color: var(--dark-gray);
`;

export const Comment = styled.div`
  display: block;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background: var(--white);
  border-radius: 15px;
`;

