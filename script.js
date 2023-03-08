"use strict";

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

function renderBook() {}
