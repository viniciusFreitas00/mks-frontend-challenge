import { AmountButtonContainer } from "./styles";

interface AmountButtonProps {
  amount: number;
  addProduct: () => void;
  removeProduct: () => void;
}

export function AmountButton({
  amount,
  addProduct,
  removeProduct,
}: AmountButtonProps) {
  return (
    <AmountButtonContainer>
      <span>Qtd:</span>
      <div>
        <button onClick={removeProduct}>-</button>
        <span>{amount}</span>
        <button onClick={addProduct}>+</button>
      </div>
    </AmountButtonContainer>
  );
}
