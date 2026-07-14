export const initFooterAccordion = () => {
  const items = document.querySelectorAll('[data-accordion]');
  const mobileMediaQuery = window.matchMedia('(max-width: 380px)');
  let isAccordion = false;

  const toggleAccordion = (trigger, target) => {
    trigger.addEventListener('click', () => {

      if (!mobileMediaQuery.matches) return;

      const isOpen = target.classList.contains('active');

      items.forEach((item) => {
        item
          .querySelector('[data-accordion-target]')
          .classList.remove('active');
      });

      if (!isOpen) {
        target.classList.add('active');
      }
    });
  };

  items.forEach((item) => {
    const title = item.querySelector('[data-accordion-trigger]');
    const sublist = item.querySelector('[data-accordion-target]');

    if (title && sublist) {
      toggleAccordion(title, sublist);
    }
  });

  const setupAccordion = () => {
    items.forEach((item) => {
      const sublist = item.querySelector('[data-accordion-target]');
      if (!mobileMediaQuery.matches) {
        sublist.classList.remove('active');
      }
    });
  };

  window.addEventListener('resize', setupAccordion);
  setupAccordion();
};
