import { CartButton } from "./CartButton";
import { CompanyLogo } from "./CompanyLogo";

import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <CompanyLogo />

        <CartButton />
      </HeaderContent>
    </HeaderContainer>
  );
}
