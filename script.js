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
  myLibrary.forEach((book) => {
    html += `
        <div class = "book-items">
          <div>Title: ${book.title}</div> 
          <div>Author: ${book.author}</div>
          <div>Pages: ${book.pages}</div>
          <div>Read: ${book.read ? "Completed" : "Incomplete"}</div>

        </div>
`;
  });
  gridLibrary.insertAdjacentHTML("beforeend", html);
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

function run() {
  form.addEventListener("submit", clickSubmitButton);
  btnAddBook.addEventListener("click", formBGToggleHidden);
}
run();
