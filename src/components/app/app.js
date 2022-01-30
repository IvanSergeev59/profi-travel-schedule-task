import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import { SchedulePage } from "../pages";


const App = ()  => {
  return (
    <Provider store={store}>
      <SchedulePage />
    </Provider>
  );
}

export default App;
