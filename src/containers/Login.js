import React, { useReducer } from "react";

const isSuccess = true;

const fields = {
  username: "",
  password: "",
};

const loginInitialState = {
  ...fields,
};

const login = (state = {}, action) => {
  switch (action.type) {
    case "SET_FIELD":
      let newField = { ...fields };

      if (action.field) {
        newField = { [action.field]: action.value };
      }

      return {
        ...state,
        ...newField,
      };
    case "REQUEST":
      return {
        ...state,
        err: "",
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        err: "",
        loading: false,
      };
    case "FAILED":
      return {
        ...state,
        err: action.err,
        loading: false,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [state, disptach] = useReducer(login, loginInitialState);
  const { err, loading, username, password } = state;

  const onInputChange = (evt) => {
    disptach({
      type: "SET_FIELD",
      value: evt.target.value,
      field: evt.target.name,
    });
  };

  const onSubmit = () => {
    disptach({ type: "REQUEST" });

    setTimeout(() => {
      if (isSuccess) {
        disptach({ type: "SUCCESS" });
      } else {
        disptach({ type: "FAILED", err: "Something went wrong" });
      }
    }, 2000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {err && <p>{err}</p>}

      <input
        value={username}
        name="username"
        onChange={onInputChange}
        placeholder="username"
      />
      <input
        value={password}
        name="password"
        onChange={onInputChange}
        placeholder="password"
      />

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Login;
