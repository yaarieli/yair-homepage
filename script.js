function switchTab(tabId) {
  // Hide all content sections
  document.querySelectorAll(".content").forEach((section) => {
    section.classList.remove("active");
  });
  // Show the selected content
  document.getElementById(tabId).classList.add("active");
}
