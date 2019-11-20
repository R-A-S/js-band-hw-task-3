// Components
import BaseTransport from './baseTransport';

// Truck
export default class Truck extends BaseTransport {
  constructor(license, gasType, ...args) {
    super(...args);
    this.license = license;
    this.gasType = gasType;
  }
}
