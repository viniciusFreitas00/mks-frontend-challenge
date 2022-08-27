import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../../store";

import { Product } from "../../../../components/SideBar/Product";
import { addProduct } from "../../../../store/cart/cartSlice";

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

describe("The product sideBar component", () => {
  it("Should add item", () => {
    store.dispatch(addProduct(TEST_PRODUCTS));

    const productsAux = [...store.getState().cart.products];

    render(
      <Provider store={store}>
        <Product
          id={productsAux[0].id}
          name={productsAux[0].name}
          photo={productsAux[0].photo}
          price={productsAux[0].price}
          amount={productsAux[0].amount}
        />
      </Provider>
    );

    const addButton = screen.getByRole("button", {
      name: /\+/i,
    });

    fireEvent.click(addButton);

    const state = store.getState().cart;

    const productState = state.products.find((e) => e.id == TEST_PRODUCTS.id);

    expect(productState?.amount).toEqual(2);
  });

  it("Should remove one item", () => {
    const productsAux = [...store.getState().cart.products];

    render(
      <Provider store={store}>
        <Product
          id={productsAux[0].id}
          name={productsAux[0].name}
          photo={productsAux[0].photo}
          price={productsAux[0].price}
          amount={productsAux[0].amount}
        />
      </Provider>
    );

    const removeButton = screen.getByRole("button", {
      name: /\-/i,
    });

    fireEvent.click(removeButton);

    const state = store.getState().cart;

    const productState = state.products.find((e) => e.id == TEST_PRODUCTS.id);

    expect(productState?.amount).toEqual(1);
  });

  it("Should remove all itens of a product", () => {
    const productsAux = [...store.getState().cart.products];

    render(
      <Provider store={store}>
        <Product
          id={productsAux[0].id}
          name={productsAux[0].name}
          photo={productsAux[0].photo}
          price={productsAux[0].price}
          amount={productsAux[0].amount}
        />
      </Provider>
    );

    const removeAllItens = screen.getByRole("button", {
      name: /x/i,
    });

    fireEvent.click(removeAllItens);

    const state = store.getState().cart;

    const productState = state.products.find((e) => e.id == TEST_PRODUCTS.id);

    expect(!productState).toEqual(true);
  });
});
