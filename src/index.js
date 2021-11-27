import renderHome from './home';
import renderMenu from './menu';
import renderCall from './callus';

renderHome();
renderMenu();
renderCall();

const tabs = document.querySelectorAll('#tabs button');
const tabsContent = document.querySelectorAll('[data-tab]');

tabs.forEach((tab) => {
  const target = tab.getAttribute('id').split('-')[0];
  tab.addEventListener('click', function () {
    tabsContent.forEach((tabContent) => {
      if (tabContent.dataset.tab == target) {
        tabContent.classList.add('active');
      } else {
        tabContent.classList.remove('active');
      }
    });
  });
});
