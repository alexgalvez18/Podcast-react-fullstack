import React from "react";
import useForm from "../hooks/useForm";
import AuthService from "../services/auth";
import { Button } from "antd";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";

function goBack() {
  window.history.back();
}

const Signup = props => {
  const authService = new AuthService();
  const [form, handleInputs] = useForm();

  const handleSignup = () => {
    authService
      .signup(form)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    authService
      .login(form)
      .then(response => {
        console.log(response);
        props.history.push("/login");
        // <Redirect to="/login" />
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handleLogout = () => {
    authService
      .logout()
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Layout.Content className="signup">
      <main>
        <div className="signup2">
          <h2>Signup</h2>

          <input
            type="email"
            name="email"
            placeholder="mail"
            onChange={e => handleInputs(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={e => handleInputs(e)}
          />
          <Button type="primary" onClick={handleSignup}>
            Signup
          </Button>
        </div>
        <div>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={e => handleInputs(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={e => handleInputs(e)}
          />
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div className="downbuttons">
          <div>
            <Button type="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <div>
            <Button type="danger" onClick={goBack}>
              Back
            </Button>
          </div>
        </div>
      </main>
    </Layout.Content>
  );
};

export default withRouter(Signup);
