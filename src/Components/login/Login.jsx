import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Login extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw"
        }}
      >
        <Button>LOGIN</Button>
      </div>
    );
  }
}

export default Login;
