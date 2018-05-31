(() => {
  const yearStartedCoding = 2000;
  const thisYear = new Date().getFullYear();
  const codingYears = thisYear - yearStartedCoding;
  const codingYearsNode = document.querySelector('#codingYears');

  codingYearsNode.textContent = `${codingYears} years`;

  WebFont.load({
    google: {
      families: ['Schoolbell', 'Roboto:400,700', 'Montserrat:800', 'Source Code Pro:400,700']
    }
  });
})();
