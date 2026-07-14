export const usePriceSwitcher = () => {
  const swither = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');


  if (!starterPrice || !popularPrice || !enterprisePrice) {
    console.warn('Не все элементы найдены для price switcher');
    return;
  }

  const priceList = {
    starter: { default: 120, withSale: 100 },
    popular: { default: 1680, withSale: 1400 },
    enterprise: { default: 2520, withSale: 2100 },
  };

  const setPricesWithSale = () => {
    if (starterPrice && popularPrice && enterprisePrice) {
      starterPrice.textContent = priceList.starter.withSale;
      popularPrice.textContent = priceList.popular.withSale;
      enterprisePrice.textContent = priceList.enterprise.withSale;
    }
  };

  const setPricesDefault = () => {
    if (starterPrice && popularPrice && enterprisePrice) {
      starterPrice.textContent = priceList.starter.default;
      popularPrice.textContent = priceList.popular.default;
      enterprisePrice.textContent = priceList.enterprise.default;
    }
  };

  if (swither) {
    swither.checked = true;
    setPricesWithSale();

    swither.addEventListener('change', () => {
      if (swither.checked) {
        setPricesWithSale();
      } else {
        setPricesDefault();
      }
    });
  } else {
    setPricesDefault();
  }
};
