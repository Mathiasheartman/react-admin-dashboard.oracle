import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { products } from "../../data";

function Products() {
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "img",
      headerName: "Image",
      width: 60,
      renderCell: (params) => {
        return <img src={params.row.img} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 220,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 90,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 90,
    },
    {
      field: "producer",
      type: "string",
      headerName: "Producer",
      width: 110,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 110,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 70,
      type: "boolean",
    },
  ];

  return (
    <div className="products">
      <div className="info">
        <h2>Products</h2>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Products;
