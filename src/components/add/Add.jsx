import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./add.scss";

function Add({ slug, columns, setOpen }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${slug}s`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id: 111,
          img: "",
          lastName: "Hello",
          firstName: "Test",
          email: "testme@gmail.com",
          phone: "123 456 789",
          createdAt: "01.02.2023",
          verified: true,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${slug}s`]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //add new item
    mutation.mutate();
    setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h2>Add new {slug}</h2>
        <form onSubmit={handleSubmit}>
          {columns
            ?.filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
