import { useEffect, useState } from "react";
import { DataTable } from "../../components/dataTable/dataTable";
import {
  LayoutModeSwitcher,
  LayoutModeType,
} from "../../components/layoutModeSwitcher/layoutModeSwitcher";
import "./gists.scss";
import { ListView } from "./listView/listView";
import { CardView } from "./cardView/cardView";
import { useGists } from "../../hooks/useGists";
import { useGistStore } from "../../store/useGistStore";
import { useUserStore } from "../../store/useUserStore";

export const Gists = () => {
  const { user, token } = useUserStore();
  const { viewType, setViewType } = useGistStore();

  const [layoutMode, setLayoutMode] = useState<LayoutModeType>("list");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const totalPages = 1000;

  useEffect(() => {
    if (viewType === "starred" && !user) {
      setViewType("public");
    }
  }, [user]);

  const { data, isLoading, isError }: any = useGists(page, perPage, viewType);

  const handlePageChange = (pageNumber: number, pageSize: number) => {
    console.log("Page changed to:", pageNumber, "with page size:", pageSize);
    if (pageSize !== perPage) {
      setPerPage(pageSize);
      setPage(1);
    }
    if (page !== pageNumber) setPage(pageNumber);
  };

  return (
    <div className="gists-container">
      <div className="gists-header">
        <div className="label">{viewType} Gists</div>
        <LayoutModeSwitcher
          mode={layoutMode}
          onToggle={(newMode) => setLayoutMode(newMode)}
        ></LayoutModeSwitcher>
      </div>
      <div>
        {layoutMode === "list" ? (
          <ListView
            data={data?.data}
            loading={isLoading}
            totalPages={totalPages}
            currentPage={page}
            perPage={perPage}
            onPageChange={handlePageChange}
          />
        ) : (
          <CardView
            data={data?.data}
            loading={isLoading}
            totalPages={totalPages}
            currentPage={page}
            perPage={perPage}
            onPageChange={handlePageChange}
          ></CardView>
        )}
      </div>
    </div>
  );
};
