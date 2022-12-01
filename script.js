import { blogs } from "./data.js";

export function renderBlogs(blogItems, indx) {
  for (let i = 0; i < 3; i++) {
    const blogIndex = indx * 3 + i;
    const blogHTML = getBlogHTML(blogIndex);
    blogItems.innerHTML += blogHTML;
  }
}

function getBlogHTML(blogIndex) {
  const blog = blogs[blogIndex];
  return `
    <div class="blog-item">
      <img
        src="${blog.image}"
        alt=""
      />
      <p class="blog-item-date">${blog.date}</p>
      <h2 class="blog-item-title">${blog.title}</h2>
      <p class="blog-item-description">${blog.text}</p>
    </div>
  `;
}
