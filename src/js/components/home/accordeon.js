export const initFooterAccordion = () => {
  const init = () => {
    const items = document.querySelectorAll('[data-accordion]');

    if (!items.length) return;

    const isMobile = () => window.innerWidth <= 576;

    const closeAllItems = () => {
      items.forEach((item) => {
        const sublist = item.querySelector('[data-accordion-target]');
        if (sublist) {
          sublist.classList.remove('active');
        }
      });
    };

    const toggleAccordion = (trigger, target) => {
      trigger.addEventListener('click', () => {
        if (!isMobile()) {
          closeAllItems();
          return;
        }

        const isOpen = target.classList.contains('active');
        closeAllItems();

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
      if (!isMobile()) {
        closeAllItems();
      }
    };

    window.addEventListener('resize', setupAccordion);
    setupAccordion();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
};
