"use client";

import React, { useState } from "react";
import Link from "next/link";

import Pagination from "@/my_components/Common/Pagination";
import CartItems from "./CartItems";
import { image_url } from "@/helper/Utilities";





const EventTicketPurchase = ({coming_from_route}) => {

  const [focusedInput, setFocusedInput] = useState(null);

  return (

    <>

      <div className="call-to-btn text-start text-lg-start position-relative mb--10">
        <Link className="rbt-btn btn-sm rbt-switch-btn hover-icon-reverse btn-border radius-round-6" href={coming_from_route}>
          <div className="icon-reverse-wrapper">
            <span class="btn-icon"><i class="feather-arrow-left"></i></span>
            <span class="btn-icon"><i class="feather-arrow-left"></i></span>
          </div>
        </Link>
      </div>

      <div className="cart-summary">
        <div className="cart-summary-wrap">
          <p> Event <span>International Tech Conference 2025</span> </p>
          <p> 3 x Early Birds <span>$60,000.00</span> </p>
          <p> 2 x VIP <span>$80,000.00</span> </p>
          <p> 3 x SQM Exhibition Booth <span>$50,000.00</span> </p>
          <p> 2 x Gold VIP <span>$110,000.00</span> </p>
          <h2> Grand Total <span>$198,765.00</span> </h2>
        </div>
      </div>
      
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Event Booking</h4>
          </div>
          

            
          <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
            <table className="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>Booking Info</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <th>
                    <p className="b3 mb--5">3 x SQM Exhibition Booth</p>
                    <span className="h6 mb--5"> Jonathan Okudili Thompson </span>
                    <p className="b3">April 1, 2025</p>
                  </th>
                  <td><p className="b3">jonathan.tp88@yahoo.co.uk</p></td>
                  <td><p className="b3">+2348023266696</p></td>
                  <td><p className="b3">$50,000.00</p></td>
                </tr>


                <tr>
                  <th>
                    <p className="b3 mb--5">2 x Gold VIP</p>
                    <span className="h6 mb--5"> Ifeanyi Benedict Okeakwalam </span>
                    <p className="b3">June 15, 2025</p>
                  </th>
                  <td><p className="b3">iokeakwalam@gmail.com</p></td>
                  <td><p className="b3">+2348034436977</p></td>
                  <td><p className="b3">$110,000.00</p></td>
                </tr>


                <tr>
                  <th>
                    <p className="b3 mb--5">2 x Early Birds</p>
                    <span className="h6 mb--5"> Chima John Okeakwalam </span>
                    <p className="b3">August 19, 2025</p>
                  </th>
                  <td><p className="b3">cokeakwalam@gmail.com</p></td>
                  <td><p className="b3">+2348023244453</p></td>
                  <td><p className="b3">$40,000.00</p></td>
                </tr>

                <tr>
                  <th>
                    <p className="b3 mb--5">2 x VIP</p>
                    <span className="h6 mb--5"> Francis Kalaiwo </span>
                    <p className="b3">August 15, 2025</p>
                  </th>
                  <td><p className="b3">k.francis@gmail.com</p></td>
                  <td><p className="b3">+2348078655521</p></td>
                  <td><p className="b3">$80,000.00</p></td>
                </tr>

                <tr>
                  <th>
                    <p className="b3 mb--5">1 x Early Birds</p>
                    <span className="h6 mb--5"> David Jumbo </span>
                    <p className="b3">October 12, 2025</p>
                  </th>
                  <td><p className="b3">k.francis@gmail.com</p></td>
                  <td><p className="b3">+2348123409008</p></td>
                  <td><p className="b3">$20,000.00</p></td>
                </tr>

              </tbody>
            </table>

            <div className="row"> 
              <div className="col-lg-12 mt--60"> 
                <Pagination totalPages={2} pageNumber={1} handleClick={""} /> 
              </div> 
            </div>

          </div>

        </div>
      </div>

    </>

  );

};


export default EventTicketPurchase;
