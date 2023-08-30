const menuItems = document.querySelectorAll('.menu_item')
const contentItems = document.querySelectorAll('.content-item')

menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const contentId = item.getAttribute('data-content');
      const contentElement = document.getElementById(contentId);

      menuItems.forEach(menuItem => menuItem.classList.remove('active'));
      contentItems.forEach(contentItem => contentItem.classList.remove('active'));

      item.classList.add('active');
      contentElement.classList.add('active');
    });
  });

  document.getElementById('emailButton').addEventListener('click', function() {
    window.location.href = 'mailto:jvdichev@gmail.com';
  });
  
  document.getElementById('myWork_btn').addEventListener('click', function() {
    const targetSection = document.getElementById('projects_section');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
  
const toggleBtn = document.querySelector(".toggle_menu_btn")
const toggleBtnIcont = document.querySelector(".toggle_menu_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcont.classList = isOpen
  ? 'ri-close-line'
  : 'ri-menu-line'
}