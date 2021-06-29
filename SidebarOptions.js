import React from 'react';
import './SiderbarOption.css';

function SidebarOptions({active, text, Icon}) {
    return (
        <div className={`sidebarOption ${active && 'siderbarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
