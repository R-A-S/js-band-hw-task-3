// Render
export default class Render {
  static addElements(store) {
    const addedShips = document.getElementById('addedShips');
    const addedTrucks = document.getElementById('addedTrucks');
    const addedCosts = document.getElementById('addedCosts');

    while (addedShips.hasChildNodes()) {
      addedShips.removeChild(addedShips.lastChild);
    }
    while (addedTrucks.hasChildNodes()) {
      addedTrucks.removeChild(addedTrucks.lastChild);
    }
    while (addedCosts.hasChildNodes()) {
      addedCosts.removeChild(addedCosts.lastChild);
    }
    store[0][0].map(ship => Render.domRender(ship, addedShips));
    store[0][1].map(truck => Render.domRender(truck, addedTrucks));
    store[1].map(cost => Render.domRender(cost, addedCosts));
  }

  static domRender(element, place) {
    const newElement = document.createElement('div');

    newElement.classList.add('element');
    if (place.id === 'addedCosts') {
      newElement.innerHTML = `
        <ul class="element__list">
            <li class="element__list-item">
              <span>Model: </span>
              <span>${element.transportModel}</span>
            </li>
            <li class="element__list-item">
              <span>Cost (by 1 kg): </span>
              <span>${element.costKg}</span>
            </li>
            <li class="element__list-item">
              <span>Cost (by 1 km): </span>
              <span>${element.costKm}</span>
            </li>
        </ul>
      `;
    } else {
      newElement.innerHTML = `
        <ul class="element__list">
            <li class="element__list-item">
              <span>ID: </span>
              <span>${element.id}</span>
            </li>
            <li class="element__list-item">
              <span>Model: </span>
              <span>${element.model}</span>
            </li>
            <li class="element__list-item">
              <span>${element.name ? 'Name:' : 'License:'} </span>
              <span>${element.name || element.license}</span>
            </li>
            <li class="element__list-item">
              <span>Produced Year: </span>
              <span>${element.producedYear}</span>
            </li>
            <li class="element__list-item">
              <span>Capacity: </span>
              <span>${element.capacity}${element.weightUnit}</span>
            </li>
            <li class="element__list-item">
              <span>Average Speed: </span>
              <span>${element.averageSpeed}${element.speedUnit}</span>
            </li>
            <li class="element__list-item">
              <span>${element.countOfTeam ? 'Count Of Team: ' : 'Type of gas: '}</span>
              <span>${element.countOfTeam || element.gasType}</>
            </li>
        </ul>
      `;
    }

    place.appendChild(newElement);
  }
}
