import { Button, Col, Row, Spin } from "antd";
import "./userProfile.scss";
import { useUserStore } from "../../store/useUserStore";
import { CustomCard } from "../../components/card/card";
import { useForkedGists } from "../../hooks/useForkedGists";

export const UserProfile = () => {
  const { user } = useUserStore();
  const { data, isLoading, isError }: any = useForkedGists();

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <div className="left-bar">
          <img className="avatar" src={user?.photoURL} alt="User Avatar" />
          <div className="name">{user?.email}</div>
          <Button
            type="primary"
            htmlType="submit"
            className="btn"
            onClick={() => window.open(user.html_url, "_blank")}
          >
            View Github Profile
          </Button>
        </div>
      </Col>

      <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
        <Spin
          spinning={isLoading}
          className="custom-spin"
          size="large"
          tip="Loading..."
        >
          <div className="right-section">
            <div className="header">
              <div className="title">All Gist </div>
              <div className="circle">{data?.data?.length}</div>
            </div>
            {data &&
              data.data?.map((item: any) => {
                return (
                  <div className="card">
                    <CustomCard {...item}></CustomCard>
                  </div>
                );
              })}
          </div>
        </Spin>
      </Col>
    </Row>
  );
};
