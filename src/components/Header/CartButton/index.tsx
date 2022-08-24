import Image from "next/image";
import { CartButtonContainer } from "./styles";

import { useAppDispatch } from "../../../store/hooks";
import { showSideBar } from "../../../store/cartSideBar/cartSideBarSlice";

export function CartButton() {
  const dispatch = useAppDispatch();

  function handleOpenSideBar() {
    dispatch(showSideBar());
  }

  return (
    <CartButtonContainer onClick={handleOpenSideBar}>
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
