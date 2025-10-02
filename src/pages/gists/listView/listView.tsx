import { Space, Button } from 'antd';
import { DataTable } from '../../../components/dataTable/dataTable';
import forkIcon from '../../../assets/fork.svg'
import starIcon from '../../../assets/star.svg'
import './listView.scss';

interface ListViewProps {
    data: any[];
    loading: boolean;
    totalPages: number;
    onPageChange: (page: number, pageSize:number) => void
}

export const ListView = ({ data, loading, totalPages, onPageChange} : ListViewProps) => {

     const columns = [
    { title: "Name", dataIndex: "name", key: "name", render: (_: string, record: any) => (
        <div className="name-cell">
          <img src={record.avatar} alt={record.name} className="avatar" />
          <span className="name-text">{record.name}</span>
        </div>
      ), },
    { title: "Notebook", dataIndex: "notebook", key: "notebook" },
    { title: "Keyword", dataIndex: "keyword", key: "keyword" },
    { title: "Updated", dataIndex: "updated", key: "updated" },
    {
      title: "",
      key: "actions",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="text"
            icon={<img src={forkIcon} alt="share-icon-image"/>}
            onClick={() => console.log("Edit", record)}
          />
          <Button
            type="text"
            danger
            icon={<img src={starIcon} alt="star-icon-img" />}
            onClick={() => console.log("Delete", record)}
          />
        </Space>
      ),
    },
  ]


    return    <div>
            <DataTable
  columns={columns}
  data={data}
  loading={loading}
  pagination={{
    current: 1,
    pageSize: 10,
    total: totalPages, 
    showSizeChanger: true,
    pageSizeOptions: [5, 10, 20],
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => {
      onPageChange(page, pageSize); 
    },
    showTotal: (total:number, range:any) => `${range[0]}-${range[1]} of ${total} items`,
  }}
/>
    </div>
}