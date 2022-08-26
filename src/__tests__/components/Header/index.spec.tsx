import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../store";

import { Header } from "../../../components/Header";

describe("The Header Component", () => {
  it("Should modal open on button click", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const button = screen.getByRole("button", {
      name: /carrinho de compras 0/i,
    });

    fireEvent.click(button);

    const state = store.getState().sideBar;

    expect(state.isVisible).toEqual(true);
  });
});
