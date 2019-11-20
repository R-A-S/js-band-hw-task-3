// Components
import BaseTransport from './baseTransport';

// Ship
export default class Ship extends BaseTransport {
  constructor(name, countOfTeam, ...args) {
    super(...args);
    this.name = name;
    this.countOfTeam = countOfTeam;
  }
}
