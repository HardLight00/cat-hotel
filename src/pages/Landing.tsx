import React, { FC } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainInfo from '@/components/MainInfo';
import HowWeWork from '@/components/HowWeWork';
import FeedbackBlock from '@/components/FeedbackBlock';

const Landing: FC = () =>
  <>
    <Header/>
    <MainInfo/>
    <HowWeWork/>
    <FeedbackBlock/>
    <Footer/>
  </>;

export default Landing;
