import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding: 10px 10%;
  width: 80%;
  background: linear-gradient(180deg, rgba(146, 146, 146, .5), rgba(146, 146, 146, 0));
  zIndex: 30000;
`;

export const NavItemsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px, 0;
  text-decoration: none;
  color: var(--dark-grey);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  
  &:hover {
    background-color: var(--dark-gray);
  }
`;


