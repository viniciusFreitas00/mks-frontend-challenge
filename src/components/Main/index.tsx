import { useFetchProductsQuery } from "../../store/products/productsApiSlice";

import { Header } from "../Header";
import { Product } from "./Product";
import { SideBar } from "../SideBar";
import { Container, ProductsContainer } from "./styles";
import { ProductSkeleton } from "./ProductSkeleton";

export function Main() {
  const { data, isFetching } = useFetchProductsQuery();

  return (
    <Container>
      <Header />

      <SideBar />

      <ProductsContainer>
        {isFetching && <ProductSkeleton count={8} />}
        {!isFetching &&
          data?.products.map((product) => (
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
