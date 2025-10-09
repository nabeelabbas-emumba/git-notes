import { Row, Col, Card, Pagination, Spin } from "antd";
import { CustomCard } from "../../../components/card/card";
import "./cardView.scss";

interface CardViewProps {
  data: any;
  loading: boolean;
  totalPages: number;
  currentPage: number;
  perPage: number;
  onPageChange: (page: number, pageSize: number) => void;
}

export const CardView = ({
  data,
  loading,
  totalPages,
  currentPage,
  perPage,
  onPageChange,
}: CardViewProps) => {
  const cardData = Array.from({ length: 12 }, (_, i) => ({
    title: `Card ${i + 1}`,
    description: `This is card number ${i + 1}`,
  }));
  return (
    <>
      <Spin
        spinning={loading}
        className="custom-spin"
        size="large"
        tip="Loading..."
      >
        <Row gutter={[16, 16]}>
          {data?.map((item: any) => (
            <Col key={item?.id} xs={24} sm={12} md={8} lg={8} xl={8}>
              <CustomCard {...item}></CustomCard>
            </Col>
          ))}
        </Row>
        <div className="pagination-container">
          <Pagination
            current={currentPage}
            pageSize={perPage}
            total={totalPages}
            showSizeChanger
            pageSizeOptions={[10, 20, 50]}
            onChange={(page: number, pageSize: number) => {
              onPageChange(page, pageSize);
            }}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
          />
        </div>
      </Spin>
    </>
  );
};
