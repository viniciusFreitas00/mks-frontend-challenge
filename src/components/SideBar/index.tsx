import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { hideSideBar } from "../../store/cartSideBar/cartSideBarSlice";

import { Product } from "./Product";
import {
  Container,
  Footer,
  Header,
  Overlay,
  ProductsContent,
  TotalContent,
} from "./styles";

const products = [
  {
    id: 8,
    name: "Headset Cloud Stinger",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    price: 600.0,
    amount: 1,
  },
  {
    id: 1,
    name: "Headset Cloud Stinger",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    price: 600.0,
    amount: 2,
  },
];

export function SideBar() {
  const isVisible = useAppSelector((state) => state.sideBar.isVisible);
  const dispatch = useAppDispatch();

  function handleCloseSideBar() {
    dispatch(hideSideBar());
  }

  return (
    <>
      {isVisible && <Overlay onClick={handleCloseSideBar} />}
      <Container isVisible={isVisible}>
        <Header>
          <span>Carrinho de Compras</span>
          <button onClick={handleCloseSideBar} />
        </Header>
        <ProductsContent>
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              photo={product.photo}
              price={product.price}
              amount={product.amount}
            />
          ))}
        </ProductsContent>
        <TotalContent>
          <span>TOTAL</span>
          <span>R$2000,00</span>
        </TotalContent>
        <Footer>Finalizar Comprar</Footer>
      </Container>
    </>
  );
}
