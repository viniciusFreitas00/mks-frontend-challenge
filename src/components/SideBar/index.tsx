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

export function SideBar() {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.sideBar.isVisible);
  const products = useAppSelector((state) => state.cart.products);

  function handleCloseSideBar() {
    dispatch(hideSideBar());
  }

  const total = formatPrice(
    products.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)
  );

  function formatPrice(price: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
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
          {products?.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              photo={product.photo}
              price={product.price}
              amount={product.amount}
            />
          ))}
        </ProductsContent>
        <TotalContent>
          <span>TOTAL</span>
          <span>R${total}</span>
        </TotalContent>
        <Footer>Finalizar Comprar</Footer>
      </Container>
    </>
  );
}
