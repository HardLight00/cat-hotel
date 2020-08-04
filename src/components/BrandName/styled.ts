import styled from 'styled-components';

export const BrandName = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 16px
`;

export const BrandNamePartOne = styled.span`
  font-family: AmaticSC, Montserrat;
  font-weight: bold;
  font-size: 1.5em;
  color: var(--black);
`;

export const BrandNamePartTwo = styled.span`
  font-family: AmaticSC, Montserrat;
  font-weight: bold;
  font-size: 1.2em;
  color: var(--yellow);
`;

export const BrandNamePartDescription = styled.span`
  font-family: AmaticSC, Montserrat;
  font-size: .8em;
  color: var(--dark-grey);
`;
