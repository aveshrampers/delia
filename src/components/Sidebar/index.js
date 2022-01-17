import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {
    return (
<SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon />
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
                Services
            </SidebarLink>
            <SidebarLink to="gallery" onClick={toggle}>
                Gallery
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
                Contact Us
            </SidebarLink>
        </SidebarMenu>
    </SidebarWrapper>
</SidebarContainer>
    );
};

export default Sidebar;