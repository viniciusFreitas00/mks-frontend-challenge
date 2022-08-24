import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showSideBar } from "../../store/cartSideBar/cartSideBarSlice";

import { CartButton } from "./CartButton";
import { CompanyLogo } from "./CompanyLogo";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  function handleOpenSideBar() {
    dispatch(showSideBar());
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <CompanyLogo />

        <CartButton
          qtdProducts={products.length}
          handleClick={handleOpenSideBar}
        />
      </HeaderContent>
    </HeaderContainer>
  );
}
