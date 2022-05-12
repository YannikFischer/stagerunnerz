import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="music" onClick={toggle}>
              Music
            </SidebarLink>
            <SidebarLink to="tour" onClick={toggle}>
              Tour Dates
            </SidebarLink>
            <SidebarLink to="merch" onClick={toggle}>
              Merch
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
