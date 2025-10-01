import { ConfigProvider, Input, Table } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import "./dataTable.scss"

export interface DataTableProps {
  columns: any[]
  data: any[]
  loading?: boolean,
  pagination?: any
}

export function DataTable({
  columns,
  data,
  loading = false,
  pagination = {}
}: DataTableProps) {

  return (
     <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0b3a3b",
        },
      }}
    >
      <Table
        className="custom-table"
        dataSource={data}
        columns={columns}
        loading={loading}
        rowKey={(record) => record.id}
        pagination={pagination}
      />
    </ConfigProvider>
  )
}