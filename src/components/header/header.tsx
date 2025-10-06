import "./header.scss";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { GithubLogin } from "../../providers/githubLogin";
import { useUserStore } from "../../store/useUserStore";
import { DropdownMenu } from "../dropdownMenu/dropdownMenu";

function Header() {
  const { user, token, clearUser } = useUserStore();
  console.log('user...', user)

  return (
    <header className="topbar" role="banner">
      <div className="topbar__inner">
        {/* Left side - Brand */}
        <div className="topbar__brand" aria-label="Brand">
          <span aria-hidden="true">
            <img src="/logo.svg" alt="EMUMBA Logo" />
          </span>
          <span className="topbar__name">EMUMBA</span>
        </div>

        {/* Right side - Search and User actions */}
        <div className="topbar__right">
          <form
            className="topbar__search"
            role="search"
            aria-label="Search gists by ID"
          >
            <Input
              allowClear
              placeholder={user ? 'Search Gist...' :'Login to search by name/content, or paste Gist URL/ID... (Try pasting a gist URL)'}
              prefix={<SearchOutlined />}
              suffix={
                <Button
                  type="text"
                  size="small"
                  icon={<SearchOutlined />}
                  aria-label="Search"
                ></Button>
              }
              className="topbar__search-input"
              type="search"
              aria-label="Search gists by ID"
            />
          </form>
          <div className="topbar__actions">
          
            {
              user ?    <DropdownMenu user={user} clearUser={clearUser}></DropdownMenu>:
              ( <GithubLogin>
              <Button type="primary" className="topbar__login">
                Login
              </Button>
            </GithubLogin>)
            }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
