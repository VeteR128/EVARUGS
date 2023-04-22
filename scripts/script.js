const openButton = document.querySelector(".product__button");
const popup = document.querySelector(".popup");
const submit = popup.querySelector(".form__submit");
const links = document.querySelectorAll(".product__info-question");

class openAndClose {
  constructor(thatOpenAndClose, closeButton, openButton) {
    this._closeButton = closeButton;
    this._openButton = openButton;
    this._thatOpenAndClose = thatOpenAndClose;
  }
  setEventListeners() {
    this._openButton.addEventListener("click", () => {
      this._open();
    });

    this._closeButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        this._close();
      }
    });
  }
  _open() {
    this._thatOpenAndClose.classList.toggle("active");
  }
  _close() {
    this._thatOpenAndClose.classList.remove("active");
  }
}
class scrollLink {
  constructor(links) {
    this._links = links;
  }
  setEventListeners() {
    for (let link of this._links) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        this._scroll(id);
      });
    }
  }
  _scroll(id) {
    document
      .querySelector("" + id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
const openAndClosePopup = new openAndClose(popup, popup, openButton);
openAndClosePopup.setEventListeners();
const scrollLinks = new scrollLink(links);
scrollLinks.setEventListeners();

submit.addEventListener("click", (e) => {
  e.preventDefault();
});
