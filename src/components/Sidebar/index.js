import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='reglas' onClick={toggle}>Reglas</SidebarLink>
                <SidebarLink to='promos' onClick={toggle}>Promos</SidebarLink>
                <SidebarLink to='about' onClick={toggle}>Nosotros</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>

  )
}

export default Sidebar
