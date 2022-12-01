import { renderBlogs } from "../script.js";

const blogItems = document.getElementsByClassName("blog-items")[0];
const viewMoreBtn = document.getElementsByClassName("view-more-btn")[0];
const blogItemsStyle = window.getComputedStyle(blogItems);

let indx = 0;

viewMoreBtn.addEventListener("click", function () {
  indx++;
  renderBlogs(blogItems, indx);
});

renderBlogs(blogItems, 0);
