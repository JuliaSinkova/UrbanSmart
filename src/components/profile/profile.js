import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function Profile() {
  const login = useSelector((state) => state.login.login);
  const history = useHistory();
  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [history, login]);
  return <h1>Hello {login} </h1>;
}
