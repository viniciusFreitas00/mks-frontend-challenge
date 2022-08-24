import Image from "next/image";
import { CartButtonContainer } from "./styles";

interface CartButtonProps {
  qtdProducts: number;
  handleClick: () => void;
}

export function CartButton({ qtdProducts, handleClick }: CartButtonProps) {


  return (
    <CartButtonContainer onClick={handleClick}>
      <Image
        src="/images/cartIcon.svg"
        alt="carrinho de compras"
        height={18}
        width={19}
      />
      <span>{qtdProducts}</span>
    </CartButtonContainer>
  );
}
