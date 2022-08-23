import Image from "next/image";

import { BuyButton, ProductContainer, ProductsInfoContent } from "./styles";

interface ProductProps {
  photo: string;
  name: string;
  description: string;
  price: number;
}

export function Product({ photo, name, price, description }: ProductProps) {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  return (
    <ProductContainer>
      <Image src={photo} alt="imagem do produto" width={138} height={138} />

      <ProductsInfoContent>
        <div>
          <span>{name}</span>
          <span>{formattedPrice}</span>
        </div>

        <span>{description}</span>
      </ProductsInfoContent>

      <BuyButton>
        <Image
          src="/images/shopping-bag.png"
          alt="sacola de compra"
          width={16}
          height={16}
        />
        <span>COMPRAR</span>
      </BuyButton>
    </ProductContainer>
  );
}
