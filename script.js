"use strict";
const btnAddBook = document.querySelector("#btn-add-book");
const form = document.querySelector(".form");
const formBackground = document.querySelector("#form-background");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const gridLibrary = document.getElementById("grid-library");

let myLibrary = [];

function Book(title, author, pages, read = true) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${
    read ? "read" : "not yet read"
  }`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function renderBook() {
  gridLibrary.innerHTML = "";
  let html = "";
  myLibrary.forEach((book, index, array) => {
    html += `
        <div class = "book-items" data-index ="${index}">
          <div>Title: ${book.title}</div> 
          <div>Author: ${book.author}</div>
          <div>Pages: ${book.pages}</div>
          <div>Read: ${book.read ? "Completed" : "Incomplete"}</div>
          <button class = "close-book-items" type = "button" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
          </button>
          <button class = "change-read" type = "button">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style = "height = 1em; width: 1em;"><title>arrow-left-drop-circle</title><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14,7L9,12L14,17V7Z" /></svg>
Change</button>
        </div>
`;
  });
  gridLibrary.insertAdjacentHTML("beforeend", html);
  addListenerToLibrary();
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

function clickSubmitButton(e) {
  e.preventDefault();
  const book = new Book(title.value, author.value, pages.value, read.checked);
  addBookToLibrary(book);
  renderBook();
  clearForm();
  formBGToggleHidden();
}

function formBGToggleHidden() {
  formBackground.classList.toggle("hidden");
}

function addListenerToLibrary() {
  document.querySelectorAll(".close-book-items").forEach((el) => {
    el.addEventListener("click", deleteBook);
  });
  document
    .querySelectorAll(".change-read")
    .forEach((el) => el.addEventListener("click", changeRead));
}

function deleteBook(e) {
  myLibrary.splice(e.target.closest(".book-items[data-index]"), 1);
  renderBook();
}
function changeRead(e) {
  myLibrary[e.target.closest(".book-items[data-index]").dataset.index].read =
    !myLibrary[e.target.closest(".book-items[data-index]").dataset.index].read;
  renderBook();
}

function run() {
  form.addEventListener("submit", clickSubmitButton);
  btnAddBook.addEventListener("click", formBGToggleHidden);
}
run();
