import { useEffect, useState } from "react"
import { DataTable } from "../../components/dataTable/dataTable"
import { LayoutModeSwitcher } from "../../components/layoutModeSwitcher/layoutModeSwitcher"
import './gists.scss'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { Space, Button } from "antd"
import { ListView } from "./listView/listView"


export const Gists = () => {
    const dummyData = [
  {
    "name": "Vanessa Smith",
    "avatar": "https://dummyimage.com/100x100",
    "notebook": "sound",
    "keyword": "book",
    "updated": "2025-09-12T17:38:29"
  },
  {
    "name": "Shannon Pratt",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "low",
    "keyword": "head",
    "updated": "2025-04-30T17:46:30"
  },
  {
    "name": "Edward Hill",
    "avatar": "https://www.lorempixel.com/100/100",
    "notebook": "on",
    "keyword": "religious",
    "updated": "2025-05-14T04:14:51"
  },
  {
    "name": "Penny House",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "analysis",
    "keyword": "buy",
    "updated": "2025-07-12T06:21:41"
  },
  {
    "name": "Matthew Weber",
    "avatar": "https://www.lorempixel.com/100/100",
    "notebook": "generation",
    "keyword": "table",
    "updated": "2025-01-13T03:08:41"
  },
  {
    "name": "Jennifer Jones",
    "avatar": "https://placeimg.com/100/100/any",
    "notebook": "meeting",
    "keyword": "as",
    "updated": "2025-08-11T19:01:50"
  },
  {
    "name": "Brian Barnes",
    "avatar": "https://dummyimage.com/100x100",
    "notebook": "occur",
    "keyword": "only",
    "updated": "2025-03-04T13:44:22"
  },
  {
    "name": "Pamela West",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "might",
    "keyword": "too",
    "updated": "2025-07-15T19:27:30"
  },
  {
    "name": "Tina Ramos",
    "avatar": "https://www.lorempixel.com/100/100",
    "notebook": "there",
    "keyword": "relationship",
    "updated": "2025-06-23T18:03:43"
  },
  {
    "name": "John Martinez",
    "avatar": "https://www.lorempixel.com/100/100",
    "notebook": "marriage",
    "keyword": "though",
    "updated": "2025-08-08T09:42:40"
  },
  {
    "name": "Keith Harvey",
    "avatar": "https://placeimg.com/100/100/any",
    "notebook": "start",
    "keyword": "claim",
    "updated": "2025-03-26T08:25:55"
  },
  {
    "name": "Sarah Ross",
    "avatar": "https://dummyimage.com/100x100",
    "notebook": "every",
    "keyword": "audience",
    "updated": "2025-03-31T22:39:40"
  },
  {
    "name": "Ernest Macias",
    "avatar": "https://placeimg.com/100/100/any",
    "notebook": "buy",
    "keyword": "measure",
    "updated": "2025-07-24T19:36:11"
  },
  {
    "name": "Maria Salazar",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "head",
    "keyword": "party",
    "updated": "2025-02-27T16:20:17"
  },
  {
    "name": "Erica Barnett",
    "avatar": "https://placeimg.com/100/100/any",
    "notebook": "unit",
    "keyword": "cultural",
    "updated": "2025-09-17T04:58:53"
  },
  {
    "name": "Allen Adkins",
    "avatar": "https://dummyimage.com/100x100",
    "notebook": "senior",
    "keyword": "notice",
    "updated": "2025-05-21T16:14:02"
  },
  {
    "name": "Maurice Cook",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "recent",
    "keyword": "send",
    "updated": "2025-09-09T23:21:21"
  },
  {
    "name": "Michael Kim",
    "avatar": "https://www.lorempixel.com/100/100",
    "notebook": "eye",
    "keyword": "perhaps",
    "updated": "2025-06-14T16:42:45"
  },
  {
    "name": "John Brown",
    "avatar": "https://placeimg.com/100/100/any",
    "notebook": "kind",
    "keyword": "with",
    "updated": "2025-03-23T16:51:51"
  },
  {
    "name": "Sheila Williams",
    "avatar": "https://dummyimage.com/100x100",
    "notebook": "away",
    "keyword": "collection",
    "updated": "2025-05-25T14:57:10"
  },
  {
    "name": "Michael Myers",
    "avatar": "https://www.lorempixel.com/100/100",
    "notebook": "western",
    "keyword": "record",
    "updated": "2025-04-05T18:37:02"
  },
  {
    "name": "Mark Rosario",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "young",
    "keyword": "seem",
    "updated": "2025-02-16T18:07:52"
  },
  {
    "name": "Arthur Brandt",
    "avatar": "https://dummyimage.com/100x100",
    "notebook": "watch",
    "keyword": "teach",
    "updated": "2025-09-02T14:38:09"
  },
  {
    "name": "Dr. Debra Shelton MD",
    "avatar": "https://placeimg.com/100/100/any",
    "notebook": "add",
    "keyword": "begin",
    "updated": "2025-05-11T02:32:34"
  },
  {
    "name": "Emily Kane",
    "avatar": "https://www.lorempixel.com/100/100",
    "notebook": "eye",
    "keyword": "in",
    "updated": "2025-02-10T20:53:25"
  },
  {
    "name": "Sarah Vazquez",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "part",
    "keyword": "month",
    "updated": "2025-03-23T14:28:28"
  },
  {
    "name": "Stefanie Young",
    "avatar": "https://placeimg.com/100/100/any",
    "notebook": "a",
    "keyword": "north",
    "updated": "2025-01-25T05:14:14"
  },
  {
    "name": "Paul Dominguez",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "daughter",
    "keyword": "organization",
    "updated": "2025-01-24T22:47:54"
  },
  {
    "name": "Rebekah Jimenez",
    "avatar": "https://www.lorempixel.com/100/100",
    "notebook": "blood",
    "keyword": "probably",
    "updated": "2025-09-25T14:14:34"
  },
  {
    "name": "Marcia Tran",
    "avatar": "https://placekitten.com/100/100",
    "notebook": "southern",
    "keyword": "teacher",
    "updated": "2025-05-24T02:41:30"
  }
]
       const [data, setData] = useState<any[]>(dummyData)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const [loading, setLoading] = useState(false)

 

  const handlePageChange = (page:number, pageSize:number) => {
    console.log("Page changed to:", page, "with page size:", pageSize)
  }

  return <div className="gists-container">
    <div className="gists-header">
        <div className="label">Public Gists</div>
       <LayoutModeSwitcher></LayoutModeSwitcher>
    </div>
      <div>
         <ListView
        data={data}
        loading={loading}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
       </div>
  </div>
}