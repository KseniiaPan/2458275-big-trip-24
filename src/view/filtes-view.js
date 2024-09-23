import AbstractView from '../framework/view/abstract-view.js';

function createFiltersItemTemplate(filter, isChecked) {
  const {type} = filter;
  return (`
      <input
        id="filter-${type}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        ${isChecked ? 'checked' : ''}
      />
      <label class="trip-filters__filter-label" for="filter-${type}">
      ${type}
      </label>`);
}

function createFiltersTemplate(filterItems) {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createFiltersItemTemplate(filter, index === 0))
    .join('');
  return (`<form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
    ${filterItemsTemplate}
    <button class="visually-hidden" type="submit">
      Accept filter
    </button>
  </form>`);
}
export default class FiltersView extends AbstractView {
  #filters = null;
  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
