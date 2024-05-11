'use client'
import Link from 'next/link';
import { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #00000;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  box-shadow: 0 4px 6px -1px rgba(198, 198, 198, 0.1), 0 2px 4px -1px rgba(224, 200, 200, 0.06);
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: linear-gradient(to right, #FF69B4 0%, #1E90FF 100%);
      font-weight: bold;
      background: linear-gradient(to right, #FF69B4 0%, #1E90FF 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent; 
      -webkit-text-fill-color: transparent;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      background: linear-gradient(to right, #FF69B4 0%, #1E90FF 100%);
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <Link href="/" className="nav-logo-link">
            SDHprog by C.V
          </Link>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li>
            <Link href="/networkForm" className="nav-menu-list">
              Параметры расчета сети
            </Link>
          </li>
          <li>
            <Link href="/dashboardPage" className="nav-menu-list">
              Виз.представление
            </Link>
          </li>
          <li>
            <Link href="/resultPage" className="nav-menu-list">
              Результаты расчета
            </Link>
          </li>
          <li>
            <Link href="/cableForm" className="nav-menu-list">
              Каб.парметры
            </Link>
          </li>
        </NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
};

export default Header;