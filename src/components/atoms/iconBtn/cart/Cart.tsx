import Image from 'next/image';
import BtnBg from '../../BtnBg';

interface CartProps {
  onClick: () => void; // Optional onClick prop for handling click events
}

const Cart = ({ onClick }: CartProps) => {
  return (
    <BtnBg>
      <Image src="/icons/cart.svg" alt="cart" width={20} height={19} onClick={onClick} />
    </BtnBg>
  );
};

export default Cart;
