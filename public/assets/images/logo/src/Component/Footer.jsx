import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer class="footer_dark">
        <div class="footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="widget">
                  <div class="footer_logo">
                    <a href="#"><img src="assets/images/logo/logo2.1.jpg" alt="logo" /></a>
                  </div>
                  <p>Coming to us you will always be satisfied.</p>
                </div>

              </div>
              <div class="col-lg-4 col-md-4 col-sm-3">
                <div class="widget">
                  <h6 class="widget_title">Useful Links</h6>
                  <ul class="widget_links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                    <li><a href="/terms">Term of sevice</a></li>
                    <li><a href="/policy">Privacy policy</a></li>
                  </ul>
                </div>
              </div>
              {/* <div class="col-lg-2 col-md-3 col-sm-6">
                	<div class="widget">
                        <h6 class="widget_title">Category</h6>
                        <ul class="widget_links">
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Woman</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Best Saller</a></li>
                            <li><a href="#">New Arrivals</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
                	<div class="widget">
                        <h6 class="widget_title">My Account</h6>
                        <ul class="widget_links">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Discount</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Orders History</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ul>
                    </div>
</div>  */}
              <div class="col-lg-4 col-md-4 col-sm-3">
                <div class="widget">
                  <h6 class="widget_title">Contact Info</h6>
                  <ul class="contact_info contact_info_light">
                    <li>
                      <i class="ti-location-pin"></i>
                      <p>62 Van Phuc Street,Ho Chi Minh City, Viet Nam</p>
                    </li>
                    <li>
                      <i class="ti-email"></i>
                      <a href="mailto:info@sitename.com">mariabichlien23@gmail.com</a>
                    </li>
                    <li>
                      <i class="ti-mobile"></i>
                      <p>+ 84-0938-540-335</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_footer border-top-tran">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p class="mb-md-0 text-center text-md-start">© 2023 All Rights Reserved by Apteach _GROUP1 Harvel Electric</p>
              </div>
              <div class="col-md-6">
                <ul class="footer_payment text-center text-lg-end">
                  <li><a href=""><img src="assets/images/item/icon-pay.png" alt="visa" /></a></li>
                  {/* <li><a href="#"><img src="assets/images/discover.png" alt="discover"></a></li>
                        <li><a href="#"><img src="assets/images/master_card.png" alt="master_card"></a></li>
                        <li><a href="#"><img src="assets/images/paypal.png" alt="paypal"></a></li>
                        <li><a href="#"><img src="assets/images/amarican_express.png" alt="amarican_express"></a></li>  */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
