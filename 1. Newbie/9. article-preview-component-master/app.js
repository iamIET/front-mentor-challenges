const shareBtn = document.querySelector(".right__share");
const tooltip = document.querySelector(".right__share-tooltip");
const DISABLED_CLASS = "disabled";
shareBtn.addEventListener("mousemove", () => {
  tooltip.classList.remove(DISABLED_CLASS);
});

tooltip.addEventListener("click", () => {
  tooltip.classList.add(DISABLED_CLASS);
});
