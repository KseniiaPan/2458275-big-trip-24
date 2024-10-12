import {capitalize} from '../utils/utils.js';
import {humanizeEventDate} from '../utils/point.js';
import {TIME_FORMAT} from '../consts.js';

function createTypeTemplate(allTypes, chosenType) {
  const typesList = allTypes.map ((type) =>`<div class="event__type-item">
  <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${type === chosenType ? 'checked' : ''}>
  <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalize(type)}</label>
</div>`).join('');

  return `<div class="event__type-wrapper">
  <label class="event__type  event__type-btn" for="event-type-toggle-1">
    <span class="visually-hidden">Choose event type</span>
    <img class="event__type-icon" width="17" height="17" src="img/icons/${chosenType}.png" alt="Event type icon">
  </label>
  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

  <div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${typesList}
    </fieldset>
  </div>
</div>`;
}

function createDestinationsTemplate (allDestinations, chosenType, name) {
  const destinationsList = allDestinations.map((item) => `<option value=${item.name}></option>`).join('');

  return `<div class="event__field-group  event__field-group--destination">
  <label class="event__label  event__type-output" for="event-destination-1">
    ${chosenType}
  </label>
  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
  <datalist id="destination-list-1">
  ${destinationsList}
  </datalist>
</div>`;
}

function createTimeTemplate(dateFrom, dateTo) {
  return `<div class="event__field-group  event__field-group--time">
  <label class="visually-hidden" for="event-start-time-1">${dateFrom}</label>
  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeEventDate(dateFrom, TIME_FORMAT.fullDateAndTime)}">
  &mdash;
  <label class="visually-hidden" for="event-end-time-1">${dateTo}</label>
  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeEventDate(dateTo, TIME_FORMAT.fullDateAndTime)}">
</div>`;
}

function createPriceTemplate(basePrice) {
  return `<div class="event__field-group  event__field-group--price">
  <label class="event__label" for="event-price-1">
    <span class="visually-hidden">${basePrice}</span>
    &euro;
  </label>
  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
</div>`;
}

function createOffersTemplate(offers, chosenOffers, type) {
  const offersList = offers.map((offer) => `<div class="event__offer-selector">
                      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" type="checkbox" name="event-offer-${type}"  ${chosenOffers.includes(offer) ? 'checked' : ''}>
                      <label class="event__offer-label" for="event-offer-${type}-1">
                        <span class="event__offer-title">${offer.title}</span>
                        &plus;&euro;&nbsp;
                        <span class="event__offer-price">${offer.price}</span>
                      </label>
                    </div>`).join('');

  return `${offers.length > 0 ? `<section class="event__section  event__section--offers">
                      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                      <div class="event__available-offers">
                        ${offersList}
                      </div>
                    </section>` : ''}`;
}

function createDescriptionTemplate(description, pictures) {
  return `${description || pictures.length > 0 ? `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        ${description
    ? (`<p class="event__destination-description">${description}</p>`)
    : ''}
        ${pictures.length > 0
    ? `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${pictures.map((picture) => `
            <img class="event__photo" src = ${picture.src} alt=${picture.description}>
          `).join('')}
        </div>
      </div>`
    : ''
}
    </section>` : ''}`;
}

export {createTypeTemplate, createDestinationsTemplate, createTimeTemplate, createPriceTemplate, createOffersTemplate, createDescriptionTemplate};
