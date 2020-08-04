import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & :nth-child(1) {
    animation-delay: -0.45s;
  }
  & :nth-child(2) {
    animation-delay: -0.3s;
  }
  & :nth-child(3) {
    animation-delay: -0.15s;
  }
}
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const InnerLoaderDiv = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid var(--yellow);
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--yellow) transparent transparent transparent;
`;
