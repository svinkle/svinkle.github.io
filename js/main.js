(() => {
  const yearStartedCoding = 2000;
  const thisYear = new Date().getFullYear();
  const codingYears = thisYear - yearStartedCoding;
  const codingYearsNode = document.querySelector('#codingYears');

  codingYearsNode.textContent = `${codingYears} years`;

  WebFont.load({
    google: {
      families: ['Roboto:400,700', 'Oswald:400,700', 'Schoolbell']
    }
  });
})();
