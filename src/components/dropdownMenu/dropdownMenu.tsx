import { Dropdown, Menu } from "antd";
import "./dropdownMenu.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useGistStore, ViewType } from "../../store/useGistStore";

export const DropdownMenu = ({ user, clearUser }: any) => {
  const navigate = useNavigate();
  const { setViewType } = useGistStore();

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "signout") {
      clearUser();
    }
    if (key === "profile") {
      navigate(ROUTES.USER_PROFILE);
    }
    if (["starred", "public"].includes(key)) {
      navigate(ROUTES.GISTS);
      setViewType(key as ViewType);
    }
    if(key === 'create'){
        navigate(ROUTES.CREATE_GIST)
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <div className="email">
        <div className="label">Sign in as</div>
        <div className="name">{user?.login}</div>
      </div>
      <hr></hr>
      <Menu.Item key="profile">Your github Profile</Menu.Item>
      <Menu.Item key="starred">Starred</Menu.Item>
      <Menu.Item key="public">Gists</Menu.Item>
      <Menu.Item key="create">Create Gist</Menu.Item>
      <hr></hr>
      <Menu.Item key="signout">Sign out</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <img className="avatar" src={user?.photoURL}></img>
    </Dropdown>
  );
};
