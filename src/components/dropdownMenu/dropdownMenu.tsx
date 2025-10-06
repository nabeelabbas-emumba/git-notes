import React from "react";
import { Dropdown, Menu, Space } from "antd";
import {
  DownOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./dropdownMenu.scss";

export const DropdownMenu = ({ user, clearUser }: any) => {
  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "signout") {
      clearUser();
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <div className="email">
        <div className="label">Sign in as</div>
        <div className="name">{user?.email}</div>
      </div>
      <hr></hr>
      <Menu.Item key="github-profile">Your github Profile</Menu.Item>
      <Menu.Item key="starred">Starred</Menu.Item>
      <Menu.Item key="gists">Gists</Menu.Item>
      <hr></hr>
      <Menu.Item key="help">Help</Menu.Item>
      <Menu.Item key="signout">Sign out</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <img className="avatar" src={user?.photoURL}></img>
    </Dropdown>
  );
};
