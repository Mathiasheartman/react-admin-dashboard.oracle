import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";

function Users() {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 70,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   width: 100,
    //   renderCell: () => {
    //     return (
    //       <div className="action">
    //         <div className="view">View</div>
    //         <div className="delete">Delete</div>
    //       </div>
    //     );
    //   },
    // },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 100,
    //   type: "Boolean",
    // },
    {
      field: "firstName",
      headerName: "First name",
      width: 120,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 120,
      editable: true,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 180,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   width: 110,
    //   editable: true,
    // },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) =>
    //     `${row.firstName || ""} ${row.lastName || ""}`,
    // },
  ];

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 14, status: true },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  );
}

export default Users;
