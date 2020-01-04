import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "user_id", field: "user_id" },
      { title: "res_id", field: "res_id" },
      { title: "rating", field: "rating" },
      { title: "content", field: "content" }
    ],
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  });

  const renderedData = () => {
    return state.data.map(data => {
      return {
        user_id: 1,
        res_id: 1,
        rating: 4.5,
        content:
          "this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... this is my long review... "
      };
    });
  };

  const renderedColumns = () => {
    return state.columns.map(data => {
      return {
        field: data.field,
        title: data.title,
        render: rowData => (
          <div
            style={{
              //   minWidth: data.field === "content" ? "1000px" : null,
              whiteSpace: "nowrap",
              paddingLeft: "10px"
            }}
          >
            {" "}
            {rowData[data.field]}{" "}
          </div>
        )
      };
    });
  };

  return (
    <MaterialTable
      title="Submitted Users"
      columns={renderedColumns()}
      data={renderedData()}
      actions={[
        {
          icon: "add",
          tooltip: "Approve",
          onClick: (event, rowData) => alert("User Approved")
        }
        // {
        //   icon: 'delete',
        //   tooltip: 'Delete User',
        //   onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
        // }
      ]}
      style={{ width: "80vw", overflow: "auto" }}
      editable={{
        // onRowAdd: newData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       setState(prevState => {
        //         const data = [...prevState.data];
        //         data.push(newData);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
