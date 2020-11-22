import React from 'react';
import { Menu, } from 'antd';

export default function SidebarMenu(){
    const { SubMenu } = Menu;

    return (
        <Menu
            style={{  }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <span>Booking By</span>
                    </span>
                }
            >
                <Menu.Item key="1">Employee</Menu.Item>
                <Menu.Item key="2">Department</Menu.Item>
                <Menu.Item key="3">Site/Location</Menu.Item>
                <Menu.Item key="4">All</Menu.Item>
            </SubMenu>
        </Menu>

    );
};

