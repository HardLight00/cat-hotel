import React, { FC } from 'react';

import { Icon } from '@/components';
import { Feedback } from '@/store/types';

import { Feedback as Wrapper, UserPicture, Container, Header, UserName, Date, CatName, Comment } from './styled';

export type FeedbackViewProps = Feedback;

const FeedbackView:FC<FeedbackViewProps> = ({userName, catName, comment, dateFrom, dateTo}) => (
  <Wrapper>
    <UserPicture>
      <Icon name="user" size={80}/>
    </UserPicture>
    <Container>
      <Header>
        <UserName>{userName}</UserName>
        <CatName>{catName}</CatName>
        <Date>{dateFrom}-{dateTo}</Date>
      </Header>
      <Comment>
        {comment}
      </Comment>
    </Container>
  </Wrapper>
);

export default FeedbackView;
