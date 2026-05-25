"use client";

import React, { useState } from "react";
import Link from "next/link";

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
      
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Purchase Ticket</h4>
          </div>
          

          <div className="tab-pane fade active mt--20 show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <form action="#" className="rbt-profile-row rbt-default-form row row--15">

              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--10">
                <div className="rbt-form-group">
                  <label htmlFor="First_Name">First Name*</label>
                  <input id="First_Name" type="text" placeholder="John" 
                    style={focusedInput === "First_Name" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                    onFocus={() => setFocusedInput("First_Name")} onBlur={() => setFocusedInput(null)}  />
                </div>
              </div>
              
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                <div className="rbt-form-group">
                  <label htmlFor="Last_Name">Last Name*</label>
                  <input id="Last_Name" type="text" placeholder="Doe" 
                    style={focusedInput === "Last_Name" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                    onFocus={() => setFocusedInput("Last_Name")} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                <div className="rbt-form-group">
                  <label htmlFor="Email">Email*</label>
                  <input id="Email" type="text" placeholder="john.doe@gmail.com" 
                    style={focusedInput === "Email" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                    onFocus={() => setFocusedInput("Email")} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                <div className="rbt-form-group">
                  <label htmlFor="Phone">Phone</label>
                  <input id="Phone" type="tel" placeholder="+1-202-555-0174" 
                    style={focusedInput === "Phone" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                    onFocus={() => setFocusedInput("Phone")} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="cart-table table-responsive mb--40 mt--40">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="pro-thumbnail">Banner</th>
                      <th className="pro-title">Ticket</th>
                      <th className="pro-price">Price</th>
                      <th className="pro-quantity">Quantity</th>
                      <th className="pro-subtotal">Total</th>
                    </tr>
                  </thead>
                  <tbody>

                    <CartItems number="0" amount="1000" currency="USD" event_name="Early Birds" event_image_link={image_url("/app_images/event/eventos.webp")} img_alt_text="Event Banner" />
                    <CartItems number="0" amount="2500" currency="USD" event_name="VIP" event_image_link={image_url("/app_images/event/eventos.webp")} img_alt_text="Event Banner" />
                    <CartItems number="0" amount="10000" currency="USD" event_name="9 SQM Exhibition Booth" event_image_link={image_url("/app_images/event/eventos.webp")} img_alt_text="Event Banner" />
                    <CartItems number="0" amount="20000" currency="USD" event_name="12 SQM Exhibition Booth" event_image_link={image_url("/app_images/event/eventos.webp")} img_alt_text="Event Banner" />

                  </tbody>
                </table>
              </div>

              <div className="cart-summary">
                <div className="cart-summary-wrap">
                  <div className="section-title text-start">
                    <h4 className="title mb--30">Order Summary</h4>
                  </div>
                  <p> Event <span>Holy Ghost Conference</span> </p>
                  <p> 2 x Early Birds <span>$32,800.00</span> </p>
                  <p> 3 x VIP <span>$55,000.00</span> </p>
                  <p> Sub Total <span>$55.00</span> </p>
                  <p> Fees <span>$0.00</span> </p>
                  <p> Shipping Cost<br /><i>5 x eTicket</i> <span>$0.00</span> </p>
                  <h2> Grand Total <span>$98,765.00</span> </h2>
                </div>
              </div>

              <div className="col-12 mt--20">
                <div className="rbt-form-group">
                  <Link className="rbt-btn btn-gradient" href="#"> Pay <span>$98,765.00</span></Link>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

    </>

  );

};


export default EventTicketPurchase;
