import "@testing-library/jest-dom";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../store";

import { SideBar } from "../../../components/SideBar";

describe("The SideBar Component", () => {
  it("Should close modal on close button click", () => {
    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const closeButton = screen.getByRole("button", {
      name: /x/i,
    });

    fireEvent.click(closeButton);

    const state = store.getState().sideBar;

    expect(state.isVisible).toEqual(false)
  });
});
