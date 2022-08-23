import { AmountButtonContainer } from "./styles";

interface AmountButtonProps {
  amount: number;
}

export function AmountButton({ amount }: AmountButtonProps) {
  return (
    <AmountButtonContainer>
      <span>Qtd:</span>
      <div>
        <button>-</button>
        <span>{amount}</span>
        <button>+</button>
      </div>
    </AmountButtonContainer>
  );
}
