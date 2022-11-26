import Link from "next/link";
import React from "react";
import { CartContext } from '../contexts/cart.provider'

type Props = {};
export const MyCart = (props: Props) => {
  const cartContext = React.useContext(CartContext);
  return (
    <nav>
      Cart - Total {cartContext.cart.total} | Items{" "}
      {cartContext.cart.products.length} |{" "}
      <Link href="/checkout" passHref>
        Finalizar compra
      </Link>
    </nav>
  );
};
