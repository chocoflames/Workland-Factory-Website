function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}
document.querySelector(".scroll-btn").addEventListener("click", () => {
  scrollToTop();
});
window.scroll;

let search = document.querySelector(".search");
let input = document.querySelector(".search-input");

search.addEventListener("click", () => {
  input.classList.toggle("active");
});
