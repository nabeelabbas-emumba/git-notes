import { Row, Col, Card } from "antd";
import { CustomCard } from "../../../components/card/card";

interface CardViewProps {
  data: any[];
  loading: boolean;
  totalPages: number;
  onPageChange: (page: number, pageSize: number) => void;
}

export const CardView = ({
  data,
  loading,
  totalPages,
  onPageChange,
}: CardViewProps) => {
  const cardData = Array.from({ length: 12 }, (_, i) => ({
    title: `Card ${i + 1}`,
    description: `This is card number ${i + 1}`,
  }));
  return (
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
        <Col key={item?.id} xs={24} sm={12} md={8} lg={8} xl={8}>
          <CustomCard {...item}></CustomCard>
        </Col>
      ))}
    </Row>
  );
};
