// Components
import transportFactory from './classes/transports/tansportFactory';
import CostOfDelivery from './classes/costOfDelivery';
import Render from './render';
import localStorage from './loocalStorageService';

// Store
export default class Store {
  static costOfDelivery = [];

  static ships = [];

  static trucks = [];

  static transport = { ships: Store.ships, trucks: Store.trucks };

  static store = { transport: Store.transport, costOfDelivery: Store.costOfDelivery };

  static localStore = !localStorage.getItem('Store')
    ? { transport: { ships: [], trucks: [] }, costOfDelivery: [] }
    : localStorage.getItem('Store');

  static create(e) {
    e.preventDefault();
    const form = e.target;
    const type = e.target.id;
    const id = `${(+new Date()).toString(16)}`;

    if (type === 'newTruck' || type === 'newShip') {
      Store.createTransport(form, type, id);
    }
    if (type === 'cost') {
      Store.createCost(form);
    }
    Render.addElements(this.store);
  }

  static updateCapacity(e) {
    e.preventDefault();
    this.store.transport.ships.forEach(elem => elem.showCapacityInPounds());
    this.store.transport.trucks.forEach(elem => elem.showCapacityInPounds());
    Render.addElements(this.store);
  }

  static createTransport(form, type, id) {
    const model = form.model.value;
    const producedYear = form.year.value;
    const capacity = form.capacity.value;
    const averageSpeed = form.speed.value;
    if (type === 'newShip') {
      const name = form.name.value;
      const countOfTeam = form.team.value;
      const newShip = transportFactory.createTransport(
        type,
        { name, countOfTeam },
        id,
        model,
        producedYear,
        capacity,
        averageSpeed
      );

      this.store.transport.ships.push(newShip);
      this.localStore.transport.ships.push(newShip);
      localStorage.setItem('Store', this.localStore);
    }
    if (type === 'newTruck') {
      const license = form.license.value;
      const gasType = form.gas.value;
      const newTruck = transportFactory.createTransport(
        type,
        { license, gasType },
        id,
        model,
        producedYear,
        capacity,
        averageSpeed
      );

      this.store.transport.trucks.push(newTruck);
      this.localStore.transport.trucks.push(newTruck);
      localStorage.setItem('Store', this.localStore);
    }
  }

  static createCost(form) {
    const transportModel = form.transportModel.value;
    const costKg = form.costKg.value;
    const costKm = form.costKm.value;
    const newCostOfDelivery = new CostOfDelivery(transportModel, costKg, costKm);

    this.store.costOfDelivery.push(newCostOfDelivery);
    this.localStore.costOfDelivery.push(newCostOfDelivery);
    localStorage.setItem('Store', this.localStore);
  }
}
