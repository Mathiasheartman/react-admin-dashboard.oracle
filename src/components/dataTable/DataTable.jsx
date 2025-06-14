import { DataGrid } from "@mui/x-data-grid";
import "./dataTable.scss";
import { GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function DataTable({ columns, rows, slug }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return fetch(`http://localhost:8800/api/${slug}/${id}`, {
        method: "delete",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${slug}`]);
    },
  });

  const handleDelete = (id) => {
    //delete the item
    mutation.mutate(id);
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 80,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        showToolbar={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}

export default DataTable;
