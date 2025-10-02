import { useEffect, useState } from "react";
import { DataTable } from "../../components/dataTable/dataTable";
import { LayoutModeSwitcher } from "../../components/layoutModeSwitcher/layoutModeSwitcher";
import "./gists.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import { ListView } from "./listView/listView";
import { CardView } from "./cardView/cardView";
import { useGists } from "../../hooks/useGists";

export const Gists = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data, isLoading, isError } = useGists(page, perPage);

  console.log({ data, isLoading, isError });

  const handlePageChange = (page: number, pageSize: number) => {
    console.log("Page changed to:", page, "with page size:", pageSize);
  };

  return (
    <div className="gists-container">
      <div className="gists-header">
        <div className="label">Public Gists</div>
        <LayoutModeSwitcher></LayoutModeSwitcher>
      </div>
      <div>
        <ListView
          data={data?.data}
          loading={isLoading}
          totalPages={data?.totalPages as number}
          onPageChange={handlePageChange}
        />
        {/* <CardView></CardView> */}
      </div>
    </div>
  );
};
