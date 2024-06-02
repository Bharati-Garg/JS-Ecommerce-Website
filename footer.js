const footerHtml = ` <footer>
      <div class="section-footer">
        <div class="footer-container container">
          <div class="content_1">
            <img src="public/images/logo.png" alt="logo" />
            <p>
              welcome to thapa EcomStore, your  <br /> ultimate destination for
              cutting-edge gudgets!
            </p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div class="content_2">
            <h4>SHOPPING</h4>
            <a href="#">Computer store</a>
            <a href="#">laptop store</a>
            <a href="#">Accessories</a>
            <a href="#">Sales & Discount</a>
          </div>
          <div class="content_3">
            <h4>Experience</h4>
            <a href="contact.html">Contact Us</a>
            <a href="" target="_blank">Patment Method</a>
            <a href="" target="_blank">Delivers</a>
            <a href="" target="_blank">Return and Exchange</a>
          </div>
          <div class="content_4">
            <h4>NEWSLETTER</h4>
            <p>
              be the first to know about new <br />arrivals, sales & promos!
            </p>
            <div class="f-mail">
              <input type="email" placeholder="Your Email" />
              <i class="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div class="f-design">
          <div class="f-design-txt">
            <p>Design and Code by Thapa technical</p>
          </div>
        </div>
      </div>
    </footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHtml);
