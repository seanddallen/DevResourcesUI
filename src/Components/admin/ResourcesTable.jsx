import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "type", field: "type" },
      { title: "subtype", field: "subtype" },
      { title: "title", field: "title" },
      { title: "creator", field: "creator" },
      { title: "year", field: "year" },
      { title: "link", field: "link" },
      { title: "image", field: "image" },
      { title: "skill", field: "skill" },
      { title: "price", field: "price" },
      { title: "tags", field: "tags" },
      { title: "description", field: "description" }
    ],
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  });

  const renderedData = () => {
    return state.data.map(data => {
      return {
        type: "print",
        subtype: "books",
        title: "Best Book Ever",
        creator: "Sean Tayler",
        year: 2019,
        link: "www.amazon.com/bestbookever",
        image: "www.imgurl.com",
        skill: "advanced",
        price: 36.0,
        tags: "javascript, react, redux",
        description:
          "this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... this is my long bio... "
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
              whiteSpace: "noWrap",
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
