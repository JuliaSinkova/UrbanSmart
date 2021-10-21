import { Button, Card, Form, Input, Label, FormGroup } from "reactstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginAction } from "../../actions/loginAction";
import "./login.css";

export default function Login() {
  const login = useSelector((state) => state.login.login);
  const history = useHistory();
  useEffect(() => {
    if (login) {
      history.push("/profile");
    }
  }, [history, login]);

  const dispatch = useDispatch();
  const [btnState, setBtnState] = useState(true);
  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const correctLogin = "developer21";
  const correctPassword = 123456;
  useEffect(() => {
    if (loginState == correctLogin && passwordState == correctPassword) {
      setBtnState(false);
    }
  }, [loginState, passwordState]);

  return (
    <Card className="container">
      <Form onSubmit={() => dispatch(loginAction(loginState, passwordState))}>
        <FormGroup className="container__item">
          <Label for="login">Логин</Label>
          <Input
            id="login"
            onChange={(e) => {
              setLoginState(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="container__item">
          <Label for="password">Пароль</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => {
              setPasswordState(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="container__item">
          <Button
            color="primary"
            disabled={btnState}
            onClick={(e) => {
              e.preventDefault();
              dispatch(loginAction(loginState, passwordState));
            }}
          >
            {" "}
            Войти
          </Button>
        </FormGroup>
      </Form>
    </Card>
  );
}
