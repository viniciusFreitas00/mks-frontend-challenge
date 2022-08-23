import Image from "next/image";
import { AmountButton } from "../AmountButton";

import { Card, CloseButton } from "./styles";

interface ProductProps {
  name: string;
  photo: string;
  price: number;
  amount: number;
}

export function Product({ name, photo, price, amount }: ProductProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price * amount);

  return (
    <Card>
      <CloseButton />
      <Image
        src={photo}
        alt="imagem do produto"
        layout="fixed"
        width={70}
        height={70}
      />

      <span>{name}</span>
      <AmountButton amount={amount} />
      <span>{formattedPrice}</span>
    </Card>
  );
}
