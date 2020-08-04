import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 0;
  padding: 10px 10%;
  background-color: var(--gray);
  width: 80%;
  min-height: 200px;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  justify-content: space-around;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  justify-content: space-around;
`;

export const FooterCallMe = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  justify-content: space-around;
`;

export const PhoneNumber = styled.h3`
  font-family: AmaticSC, Montserrat;
  font-weight: bold;
  font-size: 2.5em;
  color: var(--black);
`
