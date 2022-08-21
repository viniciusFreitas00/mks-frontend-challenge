import Image from "next/image";
import { CartButtonContainer } from "./styles";

export function CartButton() {
  return (
    <CartButtonContainer>
      <Image
        src="/images/cartIcon.svg"
        alt="carrinho de compras"
        height={18}
        width={19}
      />
      <span>0</span>
    </CartButtonContainer>
  );
}
