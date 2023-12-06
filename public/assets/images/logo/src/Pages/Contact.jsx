import React from "react";

function Contact() {
  return <div><div class="section pb_70">
    <div class="container">
      <div class="row">
        <div class="col-md-6">

          <div class="contact_text">

            <div>
              <h5><i class="fas fa-map-marker-alt">Address</i> 62 Van Phuc Street,Ho Chi Minh City, Viet Nam</h5>
            </div>



          </div>



          <div class="contact_text">


            <div>
              <h5> <i class="fas fa-envelope"><a href="https://mail.google.com/mail/?usp=installed_webapp"><a>Email:</a> mariabichlien23@gmail.com </a></i></h5>
            </div>


          </div>



          <div class="contact_text">

            <div>
              <h5><i class="fas fa-phone">Phone:</i>  + 84-0938-540-33</h5>
            </div>


            <p></p>

          </div>



        </div>

      </div>
    </div>


  </div>

    <div class="section pt-0">
      <div class="container">
        <div class="row">
          <div className="col-md-6">
            <div class="heading_s1">
              <h1>INFORMATION</h1>
            </div>
            <p class="leads">With reputable brand products, we confidently serve customers with durable
              quality products and reasonable prices.</p>


            <h3>About us </h3>
            We are a company specializing in distributing products from famous brands, but we are committed
            totrying to serve and sell quality products, suitable for customers' prices. needs for family
            use,
            the
            company has sold a number of household electrical products, refrigeration... And we believe that
            one
            day soon, our company will be known to more people.
            <br></br>

            <h3>Business areas</h3>
            Haverl Electric includes many products from the brands SamSung, Panasonic, Toshiba, LG operating
            in many different store systems, from electrical equipment to home appliances, cooling
            equipment, air purifiers and other products. other products. other products. other products.
            consumer electronic products and equipment to serve the needs of each customer family. With so
            many useful products, housework doesn't have to be difficult at all. When you trust and use our
            products, with many products from different brands, those products will meet the specific needs
            of consumers around the world.
            <br></br>



          </div>
          <div class="col-md-6">
            <div class="container"><iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.81834291167957!2d106.71053227948329!3d10.845957015698625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f05f2302f9f%3A0x8d252d2bb56b804c!2sFPT%20Arena%20Multimedia!5e0!3m2!1svi!2s!4v1700713957518!5m2!1svi!2s"
              width="100%" height="100%" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe></div><br></br>
            <div class="contact-form">
              <h3>Support</h3>
              <div id="success"></div>

              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div class="control-group">
                  <input type="text" class="form-control" id="name" placeholder="Your Name"
                    required="required" data-validation-required-message="Please enter your name" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="email" class="form-control" id="email" placeholder="Your Email"
                    required="required" data-validation-required-message="Please enter your email" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="text" class="form-control" id="subject" placeholder="Product name needing support"
                    required="required" data-validation-required-message="Please enter a subject" />
                  <p class="help-block text-danger"></p>
                </div>

                <div class="control-group">
                  <textarea class="form-control" rows="2" id="message" placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"></textarea>
                  <p class="help-block text-danger"></p>
                </div>

                <div>
                  <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                    Message</button>
                </div>
              </form>
            </div>
          </div>








        </div>
      </div>
    </div>
  </div >
}

export default Contact;
