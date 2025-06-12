import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";
import { userRows } from "../../data";

function Users() {
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "img",
      headerName: "Avatar",
      width: 70,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 120,
      editable: true,
    },
    {
      field: "lastName",
      type: "string",
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
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];

  const { isLoading } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then((res) => res.json()),
  });

  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={userRows} />
      )}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Users;
