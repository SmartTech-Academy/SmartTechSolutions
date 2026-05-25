"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// RADUX STORE
import { useAppContext } from "@/context/Context";

import { formatMoney } from "@/helper/Helpers";

// import { useDispatch } from "react-redux";
// import { deleteProduct, toggleAmount } from "@/redux/action/CartAction";

const CartItems = ({ number, amount, currency, event_name, event_image_link, img_alt_text }) => {

  const { isLightTheme } = useAppContext();

  useEffect(() => {}, [isLightTheme]);

  const [numberToggle, setnumberToggle] = useState(number);

  const increasePrice = () => {
    setnumberToggle(Number(numberToggle) + 1);
  };

  const decreasePrice = () => {
    setnumberToggle(Number(numberToggle) - 1);
  };


  return (
    <tr>
      <td className="pro-thumbnail">
        <Link href="#">
          <Image src={event_image_link} width={140} height={111} alt={img_alt_text} />
        </Link>
      </td>
      <td className="pro-title">
        <Link href="#"> {event_name} </Link>
      </td>
      <td className="pro-price">
        <span>{formatMoney(amount, currency, "en-US")}</span>
      </td>
      <td className="pro-quantity">
        <div className="pro-qty">
          <span className="dec qtybtn" onClick={decreasePrice}> - </span>
          <span style={ isLightTheme ? { color : 'black' } : { color: "var(--color-white-off)" } }>{numberToggle}</span>
          <span className="inc qtybtn" onClick={increasePrice}> + </span>
        </div>
      </td>
      <td className="pro-subtotal">
        <span>{formatMoney((Number(numberToggle) * Number(amount)), currency, "en-US")}</span>
      </td>
      {/* <td className="pro-remove">
        <Link href="#" onClick={() => alert("Delete Event Order")}>
          <i className="feather-x"></i>
        </Link>
      </td> */}
    </tr>
  );
};

export default CartItems;
