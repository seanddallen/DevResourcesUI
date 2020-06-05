import React from "react";

import Cards from "./resources/ResourceCards";
import ResourceForm from "./resources/ResourceForm";
import Leaderboard from "./leaderboard/Leaderboard";

export default function Main(props) {
  const [openForm, setOpenForm] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      }}
    >
      <div>
        {!openForm ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                display: "flex"
              }}
            >
              <Leaderboard />
            </div>
            <div container style={{ marginTop: "0px" }}>
              <ResourceForm openForm={openForm} setOpenForm={setOpenForm} />
              <Cards
                toggleDrawer={props.toggleDrawer}
                style={{ marginTop: "0px" }}
                handleRecEditClick={props.handleRecEditClick}
              />
            </div>
          </div>
        ) : (
          <div container style={{ marginTop: "10px" }}>
            <ResourceForm openForm={openForm} setOpenForm={setOpenForm} />
          </div>
        )}
      </div>
    </div>
  );
}
