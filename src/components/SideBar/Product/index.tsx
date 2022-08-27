import Image from "next/image";

import { useAppDispatch } from "../../../store/hooks";
import {
  addProduct,
  removeProduct,
  removeAllProductsItens,
} from "../../../store/cart/cartSlice";

import { AmountButton } from "../AmountButton";
import { Card, CloseButton } from "./styles";

interface ProductProps {
  id: number;
  name: string;
  photo: string;
  price: number;
  amount: number;
}

export function Product({ id, name, photo, price, amount }: ProductProps) {
  const dispatch = useAppDispatch();
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price * amount);

  function hadleAddProduct() {
    dispatch(addProduct({ id, photo, name, price }));
  }

  function hadleRemoveProduct() {
    dispatch(removeProduct(id));
  }

  function handleRemoveAllProductsItens() {
    dispatch(removeAllProductsItens(id));
  }

  return (
    <Card>
      <CloseButton onClick={handleRemoveAllProductsItens}>x</CloseButton>
      <Image
        src={photo}
        alt="imagem do produto"
        layout="fixed"
        width={70}
        height={70}
      />

      <span>{name}</span>
      <AmountButton
        amount={amount}
        addProduct={hadleAddProduct}
        removeProduct={hadleRemoveProduct}
      />
      <span>{formattedPrice}</span>
    </Card>
  );
}
