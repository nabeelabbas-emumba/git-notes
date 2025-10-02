import { Row, Col, Card } from "antd";
import "./card.scss";

export const CustomCard = (props: any) => {
  console.log("props", props);
  return (
    <Card className="custom-card" bordered>
      <div className="card-header">
        <div className="container">
          <div>{"{"}</div>
          {props.cardJson.map((list: any) => {
            return (
              <div key={list[0]}>
                <span className="key">{`"${list[0]}"`}: </span>
                <span className="value">{`"${list[1]}"`}</span>
              </div>
            );
          })}
          <div>{"}"}</div>
        </div>
      </div>
      <div className="card-body">
        <img
          className="avatar"
          alt="user-avatar-image"
          src={props?.owner?.avatar_url}
        ></img>
        <div>
          <div>
            <span className="name">{props?.owner?.login}</span>
            <span className="slash">/</span>
            <span className="gist-name">gist_name</span>
          </div>
          <div className="created-at">{props?.notebook[0]}</div>
          <div className="description">{props?.keyword}</div>
        </div>
      </div>
    </Card>
  );
};
