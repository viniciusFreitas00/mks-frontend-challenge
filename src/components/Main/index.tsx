import { Header } from "../Header";
import { Product } from "./Product";
import { SideBar } from "../SideBar";

import { Container, ProductsContainer } from "./styles";

const products = {
  products: [
    {
      id: 8,
      name: "Headset Cloud Stinger",
      brand: "HyperX",
      description:
        "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
      price: 600,
      createdAt: "2022-08-21T19:30:29.567Z",
      updatedAt: "2022-08-21T19:30:29.567Z",
    },
    {
      id: 7,
      name: "Headset Cloud Revolver",
      brand: "HyperX",
      description:
        "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
      price: 1000,
      createdAt: "2022-08-21T19:30:29.567Z",
      updatedAt: "2022-08-21T19:30:29.567Z",
    },
  ],
};

export function Main() {
  return (
    <Container>
      <Header />

      <SideBar />

      <ProductsContainer>
        {products.products.map((product) => (
          <Product
            key={product.id}
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
