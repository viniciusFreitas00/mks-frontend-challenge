import Image from "next/image";

import { BuyButton, ProductContainer, ProductsInfoContent } from "./styles";

interface ProductProps {
  photo: string;
  name: string;
  description: string;
  price: string;
}

export function Product({ photo, name, price, description }: ProductProps) {
  return (
    <ProductContainer>
      <Image src={photo} alt="imagem do produto" width={138} height={138} />

      <ProductsInfoContent>
        <div>
          <span>{name}</span>
          <span>R${price}</span>
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
