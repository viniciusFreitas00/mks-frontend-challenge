import { useFetchProductsQuery } from "../../store/products/productsApiSlice";

import { Header } from "../Header";
import { Product } from "./Product";
import { SideBar } from "../SideBar";
import { Container, ProductsContainer } from "./styles";

export function Main() {
  const products = useFetchProductsQuery().data?.products;

  return (
    <Container>
      <Header />

      <SideBar />

      <ProductsContainer>
        {products?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            photo={product.photo}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </ProductsContainer>
    </Container>
  );
}
