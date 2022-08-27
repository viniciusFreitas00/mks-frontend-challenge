import { store } from "../../../store";
import { addProduct, removeProduct, removeAllProductsItens } from "../../../store/cart/cartSlice";

type Product = {
  id: number;
  name: string;
  photo: string;
  price: number;
};

type ProductSlice = Product & {
  amount: number;
};

const TEST_PRODUCTS: Product = {
  id: 8,
  name: "Headset Cloud Stinger",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
  price: 600.0,
};

describe("Cart Slice state tests", () => {
  it("Should initially cart be an empty object", () => {
    const state = store.getState().cart;
    expect(state).toMatchObject({});
  });

  it("Should add one item to cartSlice", () => {
    store.dispatch(addProduct(TEST_PRODUCTS));

    const state = store.getState().cart;
    
    const productState = state.products.find(
      (e: ProductSlice) => e.id == TEST_PRODUCTS.id
    );

    expect(productState?.amount).toEqual(1);
  });

  it("Should add two item to cartSlice", () => {
    store.dispatch(addProduct(TEST_PRODUCTS));

    const state = store.getState().cart;
    
    const productState = state.products.find(
      (e: ProductSlice) => e.id == TEST_PRODUCTS.id
    );

    expect(productState?.amount).toEqual(2);
  });

  it('Should remove one item', () => {
    store.dispatch(removeProduct(TEST_PRODUCTS.id));

    const state = store.getState().cart;
    const productState = state.products.find(
      (e: ProductSlice) => e.id == TEST_PRODUCTS.id
    );

    expect(productState?.amount).toEqual(1);
  })

  it('Should not remove when is only one item', () => {
    store.dispatch(removeProduct(TEST_PRODUCTS.id));

    const state = store.getState().cart;
    const productState = state.products.find(
      (e: ProductSlice) => e.id == TEST_PRODUCTS.id
    );

    expect(productState?.amount).toEqual(1);
  })

  it('Should remove all itens of a product', () => {
    store.dispatch(removeAllProductsItens(TEST_PRODUCTS.id));

    const state = store.getState().cart;
    const productState = state.products.find(
      (e: ProductSlice) => e.id == TEST_PRODUCTS.id
    );

    expect(!productState).toEqual(true);
  })
});
