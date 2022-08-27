import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../../store";

import { Product } from "../../../../components/Main/Product";

type ProductType = {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
};

const TEST_PRODUCTS: ProductType = {
  id: 8,
  name: "Headset Cloud Stinger",
  description:
    "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
  price: 600.0,
};

describe("The Product component", () => {
  it("Should buy button add product", () => {
    render(
      <Provider store={store}>
        <Product
          id={TEST_PRODUCTS.id}
          name={TEST_PRODUCTS.name}
          description={TEST_PRODUCTS.description}
          photo={TEST_PRODUCTS.photo}
          price={TEST_PRODUCTS.price}
        />
      </Provider>
    );

    const button = screen.getByRole('button', {
      name: /sacola de compra comprar/i
    })

    fireEvent.click(button);

    const state = store.getState().cart;

    expect(state.products[0].id).toEqual(TEST_PRODUCTS.id)
  });
});
