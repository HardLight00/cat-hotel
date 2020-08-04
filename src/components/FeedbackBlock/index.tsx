import React, { FC, useEffect } from 'react';

import { Feedback } from '@/store/types';
import { getFeedbacks } from '@/store/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFeedbacks } from '@/api';
import Loader from '@/components/Loader';

import FeedbackView from './FeedbackView';
import { FeedbackBlock as Wrapper } from './styled';

export type FeedbackBlockProps = {
  feedbacks: Feedback[],
  fetchFeedbacks: () => void,
}

const FeedbackBlock:FC<FeedbackBlockProps> = ({feedbacks, fetchFeedbacks}) => {
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (!feedbacks) {
    return (
      <Wrapper>
        <Loader/>
      </Wrapper>);
  }

  return (
    <Wrapper>
      {feedbacks.map(feedback => <FeedbackView key={feedback.userId} {...feedback} />)}
    </Wrapper>
  );
};

export const mapStateToProps = (state: any) => ({
  feedbacks: getFeedbacks(state),
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  fetchFeedbacks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackBlock);
