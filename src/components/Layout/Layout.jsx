import { NavLink } from "react-router-dom"
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import css from './Layout.module.css'

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Layout = () => {
    return (
        <div className={css.section}>
            <div className={css.navLink}>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/movies'>Movies</StyledLink>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>




        </div>

    )
}