import { Button, Col, Row } from "antd";
import "./userProfile.scss";
import { useUserStore } from "../../store/useUserStore";
import { CustomCard } from "../../components/card/card";

export const UserProfile = () => {
  const { user } = useUserStore();
  const data = [
    {
      cardJson: [
        ["filename", "hello-world.py"],
        ["language", "Python"],
        ["type", "script"],
      ],
      owner: {
        login: "octocat",
        avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
      },
      notebook: ["2025-10-06T12:00:00Z"],
      keyword: "This is a dummy gist about Hello World in Python",
    },
    {
      cardJson: [
        ["filename", "index.html"],
        ["language", "HTML"],
        ["type", "web"],
      ],
      owner: {
        login: "coder123",
        avatar_url: "https://avatars.githubusercontent.com/u/9919?v=4",
      },
      notebook: ["2025-09-28T09:30:00Z"],
      keyword: "Sample gist showcasing basic HTML structure",
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <div className="left-bar">
          <img className="avatar" src={user?.photoURL} alt="User Avatar" />
          <div className="name">{user?.email}</div>
          <Button type="primary" htmlType="submit" className="btn">
            View Github Profile
          </Button>
        </div>
      </Col>

      <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
        <div className="right-section">
          <div className="header">
            <div className="title">All Gist </div>
            <div className="circle">{data?.length}</div>
          </div>
          {data.map((item) => {
            return (
              <div className="card">
                <CustomCard
                  {...item}
                  loading={false}
                  totalPages={20}
                ></CustomCard>
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};
