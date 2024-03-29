var openMap = document.querySelector(".map-mini");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

var openWriteUs = document.querySelector(".button-write-us");
var popupWriteUs = document.querySelector(".modal-write-us");
var closeWriteUs = popupWriteUs.querySelector(".modal-close");

var form = popupWriteUs.querySelector("form");
var nameField = popupWriteUs.querySelector("#name-field");
var emailField = popupWriteUs.querySelector("#email-field");
var letterField = popupWriteUs.querySelector("#letter-text-field");

openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

openWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  nameField.focus();
});

closeWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!nameField.value || !emailField.value || !letterField.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
    if (popupWriteUs.classList.contains("modal-show")) {
      popupWriteUs.classList.remove("modal-show");
      popupWriteUs.classList.remove("modal-error");
    }
  }
});
