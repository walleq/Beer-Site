const searchInput = document.getElementById('searchInput');

const debounce = (func, delay) => {
  let inDebounce
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
searchInput.addEventListener('input', debounce(function (event) {
  if (event.target.value) {
    getBeer({ beer_name: event.target.value });
  };
}, 500));

