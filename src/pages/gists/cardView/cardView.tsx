import { Row, Col, Card } from "antd";
import { CustomCard } from "../../../components/card/card";

export const CardView = () => {
  const cardData = Array.from({ length: 12 }, (_, i) => ({
    title: `Card ${i + 1}`,
    description: `This is card number ${i + 1}`,
  }));
  return (
    <Row gutter={[16, 16]}>
      {cardData.map((card, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
          <CustomCard></CustomCard>
        </Col>
      ))}
    </Row>
  );
};
