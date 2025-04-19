import Image from 'next/image';
import BtnBg from '../../BtnBg';

const Cart = () => {
  return (
    <BtnBg>
      <Image src="/icons/cart.svg" alt="cart" width={20} height={19} />
    </BtnBg>
  );
};

export default Cart;
