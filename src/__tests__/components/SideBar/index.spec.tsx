import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../store";
import { addProduct } from "../../../store/cart/cartSlice";
import { showSideBar } from "../../../store/cartSideBar/cartSideBarSlice";

import { SideBar } from "../../../components/SideBar";

type Product = {
  id: number;
  name: string;
  photo: string;
  price: number;
};

const TEST_PRODUCTS: Product = {
  id: 8,
  name: "Headset Cloud Stinger",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
  price: 600.0,
};

describe("The SideBar Component", () => {
  it("Should close modal on close button click", () => {
    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    act(() => {
      store.dispatch(showSideBar());
    });

    const closeButton = screen.getByRole("button", {
      name: /x/i,
    });

    fireEvent.click(closeButton);

    const state = store.getState().sideBar;

    expect(state.isVisible).toEqual(false);
  });

  it("Should render product item inside side bar", async () => {
    store.dispatch(addProduct(TEST_PRODUCTS));

    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const productName = screen.getByText(/headset cloud stinger/i);

    expect(productName).toBeInTheDocument();
  });
});
