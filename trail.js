const menuIconButton = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBx1 = document.querySelector("[data-sidebar-box-1]");
const sidebarBx2 = document.querySelector("[data-sidebar-box-2]");
const sidebarBx3 = document.querySelector("[data-sidebar-box-3]");
const sidebarBx4 = document.querySelector("[data-sidebar-box-4]");
const sidebarBx5 = document.querySelector("[data-sidebar-box-5]");
const sidebarBx6 = document.querySelector("[data-sidebar-box-6]");
const videoBx = document.querySelector("[video-sidebar]");
const shorts = document.querySelector("[shorts-sidebar]");
const option = document.querySelector("[option-sidebar]");

menuIconButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarBx1.classList.toggle("open");
  sidebarBx2.classList.toggle("open");
  sidebarBx3.classList.toggle("open");
  sidebarBx4.classList.toggle("open");
  sidebarBx5.classList.toggle("open");
  sidebarBx6.classList.toggle("open");
  videoBx.classList.toggle("open");
  shorts.classList.toggle("open");
  option.classList.toggle("open");
});
