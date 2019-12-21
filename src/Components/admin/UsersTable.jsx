import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "firstName", field: "firstName" },
      { title: "lastName", field: "lastName" },
      { title: "userName", field: "userName" },
      { title: "email", field: "email" },

      { title: "image", field: "image" },
      { title: "role", field: "role" },
      { title: "score", field: "score" },

      { title: "education", field: "education" },
      { title: "experience", field: "experience" },
      { title: "employment", field: "employment" },
      { title: "speciality", field: "speciality" },

      { title: "personalURL", field: "personalURL" },
      { title: "githubURL", field: "githubURL" },
      { title: "linkedinURL", field: "linkedinURL" },
      { title: "bio", field: "bio" }
    ],
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  });

  const renderedData = () => {
    return state.data.map(data => {
      return {
        firstName: "Sean",
        lastName: "Tayler",
        userName: "DevSean",
        email: "seanjtayler@gmail.com",
        image: "www.imgurl.com",
        role: "user",
        score: 200,
        education: "bootcamp",
        experience: "1-2 years",
        employment: "junior",
        speciality: "front-end",
        personalURL: "devresources.io",
        githubURL: "https://github.com/seantayler",
        linkedinURL: "https://www.linkedin.com/in/seantayler/",
        bio:
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
              //   minWidth: data.field === "bio" ? "1000px" : null,
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
