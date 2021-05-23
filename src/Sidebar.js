import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="Display Name"/>
            <SidebarRow title="COIVD-19 Information Center"/>
            <SidebarRow title="Pages"/>
            <SidebarRow title="Friends"/>
            <SidebarRow title="Messenger"/>
            <SidebarRow title="Marketplace"/>
            <SidebarRow title="Video"/>
        </div>
    )
}

export default Sidebar
