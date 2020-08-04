import React, { FC, memo } from 'react';
import { NavItemsDiv, NavLink } from './styled';

const links = [
  { name: 'О нас', href: '#aboutUs' },
  { name: 'Как работаем', href: '#howWeWork' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Q & A', href: '#questionsAndAnswers' },
  { name: 'Контакты', href: '#contacts' },
]

const NavItems: FC = () =>
  <NavItemsDiv data-cy="navbar">
    {links.map(({ name }) => <NavLink key={name}>{name}</NavLink>)}
  </NavItemsDiv>;

export default memo(NavItems);
