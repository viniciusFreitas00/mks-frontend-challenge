import type { NextPage } from "next";
import { Provider } from "react-redux";

import { store } from "../store";

import { Main } from "../components/Main";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default Home;
