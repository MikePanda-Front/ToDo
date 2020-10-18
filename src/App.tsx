import React, { FunctionComponent } from "react";

import ToDoList from "./Components/ToDoList";
import Router from "./Router";
import { Wrapper } from "./styles";

const App: FunctionComponent = () => {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  );
};

export default App;
