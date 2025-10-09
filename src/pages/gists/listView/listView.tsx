import { Space, Button, Tooltip } from "antd";
import { DataTable } from "../../../components/dataTable/dataTable";
import forkIcon from "../../../assets/fork.svg";
import starIcon from "../../../assets/star.svg";
import "./listView.scss";
import { useUserStore } from "../../../store/useUserStore";
import { githubGistService } from "../../../services/gistService";
import { message } from "antd";
import { useGistStore } from "../../../store/useGistStore";
import { StarFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface ListViewProps {
  data: any;
  loading: boolean;
  totalPages: number;
  currentPage: number;
  perPage: number;
  onPageChange: (page: number, pageSize: number) => void;
}

export const ListView = ({
  data,
  loading,
  totalPages,
  currentPage,
  perPage,
  onPageChange,
}: ListViewProps) => {
  const { user, token } = useUserStore();
  const { viewType } = useGistStore();

  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    console.log("data of list View...", data);
    setTableData(data);
  }, [data]);

  const toggleStar = async (row: any) => {
    try {
      const gistId = row?.id;
      const isStarred = await githubGistService.isStarred(gistId);

      if (isStarred) {
        await githubGistService.unstar(gistId);
        message.success("Gist unstarred successfully!");
        setTableData((prev) => prev.filter((item) => item.id !== gistId));
      } else {
        await githubGistService.star(gistId);
        message.success("Gist starred successfully!");
        setTableData((prev) =>
          prev.map((item) =>
            item.id === gistId ? { ...item, isStarred: true } : item,
          ),
        );
      }
    } catch (error) {
      message.error("Action failed. Please try again.");
    }
  };

  const forkGist = async (row: any) => {
    try {
      const gistId = row?.id;
      if (gistId) {
        await githubGistService.forkGist(gistId);
        message.success("Gist forked successfully!");
        setTableData((prev) =>
          prev.map((item) =>
            item.id === gistId ? { ...item, isForked: true } : item,
          ),
        );
      }
    } catch (error) {
      message.error("Action failed. Please try again.");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_: string, record: any) => (
        <div className="name-cell">
          <img
            src={record?.owner?.avatar_url}
            alt={record?.owner?.avatar_url}
            className="avatar"
          />
          <span className="name-text">{record?.owner?.login}</span>
        </div>
      ),
    },
    {
      title: "Notebook",
      dataIndex: "notebook",
      key: "notebook",
      render: (_: string, record: any) => (
        <div className="name-cell">
          <span className="name-text">{record?.notebook[0]}</span>
        </div>
      ),
    },
    {
      title: "Keyword",
      dataIndex: "keyword",
      key: "keyword",
      render: (_: string, record: any) => (
        <div className="name-cell">
          <span className="name-text chip">{record?.keyword}</span>
        </div>
      ),
    },
    {
      title: "Updated",
      dataIndex: "updated",
      key: "updated",
      render: (_: string, record: any) => (
        <div className="name-cell">
          <span className="name-text">Last updated {record?.updated_at}</span>
        </div>
      ),
    },
    {
      title: "",
      key: "actions",
      width: 150,
      render: (_: any, record: any) => (
        <Space>
          {user && !record?.isForked ? (
            <Button
              type="text"
              icon={<img src={forkIcon} alt="share-icon-image" />}
              onClick={() => forkGist(record)}
            />
          ) : (
            <Tooltip title="Login required">
              <span>
                <Button
                  type="text"
                  icon={<img src={forkIcon} alt="share-icon-image" />}
                  disabled
                />
              </span>
            </Tooltip>
          )}

          {user ? (
            record.isStarred || viewType === "starred" ? (
              <StarFilled
                className="starred-icon"
                onClick={() => toggleStar(record)}
              />
            ) : (
              <Button
                type="text"
                danger
                icon={<img src={starIcon} alt="star-icon-img" />}
                onClick={() => toggleStar(record)}
              />
            )
          ) : (
            <Tooltip title="Login required">
              <span>
                <Button
                  type="text"
                  danger
                  icon={<img src={starIcon} alt="star-icon-img" />}
                  disabled
                />
              </span>
            </Tooltip>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={tableData}
        loading={loading}
        pagination={{
          current: currentPage,
          pageSize: perPage,
          total: totalPages,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50],
          showQuickJumper: false,
          onChange: (page: number, pageSize: number) => {
            onPageChange(page, pageSize);
          },
          showTotal: (total: number, range: any) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </div>
  );
};
