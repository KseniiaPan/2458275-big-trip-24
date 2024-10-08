import AbstractView from '../framework/view/abstract-view.js';
import {TIME_FORMAT, EVENT_TYPES} from '../consts.js';
import {createOffersTemplate, createTypeTemplate, humanizeEventDate} from '../utils/event.js';

function createEventAddingTemplate(event, chosenDestination, chosenOffers, allDestinations, allOffers) {
  const { dateFrom, dateTo, type } = event;
  const { name, description, pictures } = chosenDestination;

  const typeTemplate = createTypeTemplate(EVENT_TYPES, type);
  const offersTemplate = createOffersTemplate(allOffers.offers, chosenOffers, type);

  return `<form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${typeTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                    ${allDestinations.map((destination) => `<option value="${destination.name}"></option>`).join('')}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeEventDate(dateFrom, TIME_FORMAT.fullDateAndTime)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeEventDate(dateTo, TIME_FORMAT.fullDateAndTime)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                    ${offersTemplate}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${pictures.map((picture) => `
                          <img class="event__photo" src = ${picture.src} alt=${picture.description}>
                        `).join('')}
                      </div>
                    </div>
                  </section>
                </section>
              </form>`;
}

export default class EventAddView extends AbstractView {
  #event = null;
  #chosenDestination = null;
  #chosenOffers = null;
  #allDestinations = null;
  #allOffers = null;

  constructor({event, chosenDestination, chosenOffers, allDestinations, allOffers}) {
    super();
    this.#event = event;
    this.#chosenDestination = chosenDestination;
    this.#chosenOffers = chosenOffers;
    this.#allDestinations = allDestinations;
    this.#allOffers = allOffers;
  }

  get template() {
    return createEventAddingTemplate(this.#event, this.#chosenDestination, this.#chosenOffers, this.#allDestinations, this.#allOffers);
  }
}
