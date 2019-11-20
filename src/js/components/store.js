// Components
import Truck from './classes/transports/truck';
import Ship from './classes/transports/ship';
import CostOfDelivery from './classes/costOfDelivery';
import Render from './render';

// Store
export default class Store {
  static costOfDelivery = [];

  static ships = [];

  static trucks = [];

  static transport = [Store.ships, Store.trucks];

  static store = [Store.transport, Store.costOfDelivery];

  static updateCapacity(e) {
    e.preventDefault();
    this.store[0][0].forEach(elem => elem.showCapacityInPounds());
    this.store[0][1].forEach(elem => elem.showCapacityInPounds());
    Render.addElements(this.store);
  }

  static create(e) {
    e.preventDefault();
    const form = e.target;
    const type = e.target.id;
    const id = `${(+new Date()).toString(16)}`;

    if (type === 'newShip') {
      const name = form.querySelector('#name').value;
      const countOfTeam = form.querySelector('#team').value;
      const model = form.querySelector('#shipModel').value;
      const producedYear = form.querySelector('#shipYear').value;
      const capacity = form.querySelector('#shipCapacity').value;
      const averageSpeed = form.querySelector('#speedNm').value;

      const newShip = new Ship(name, countOfTeam, id, model, producedYear, capacity, averageSpeed, type);

      this.store[0][0].push(newShip);
      localStorage['.store'] = JSON.stringify(this.store);
    }
    if (type === 'newTruck') {
      const license = form.querySelector('#license').value;
      const gasType = form.querySelector('#gas').value;
      const model = form.querySelector('#truckModel').value;
      const producedYear = form.querySelector('#truckYear').value;
      const capacity = form.querySelector('#truckCapacity').value;
      const averageSpeed = form.querySelector('#speedKm').value;

      const newTruck = new Truck(license, gasType, id, model, producedYear, capacity, averageSpeed, type);

      this.store[0][1].push(newTruck);
      localStorage['.store'] = JSON.stringify(this.store);
    }
    if (type === 'cost') {
      const transportModel = form.querySelector('#transportModel').value;
      const costKg = form.querySelector('#costKg').value;
      const costKm = form.querySelector('#costKm').value;

      const newCostOfDelivery = new CostOfDelivery(transportModel, costKg, costKm);

      this.store[1].push(newCostOfDelivery);
      localStorage['.store'] = JSON.stringify(this.store);
    }

    Render.addElements(this.store);
  }
}
