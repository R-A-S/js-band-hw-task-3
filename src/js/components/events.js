// Components
import Store from './store';

// Actions
export default class Events {
  constructor(Id) {
    document.getElementById(Id).addEventListener('submit', this.runStore);
  }

  runStore = e => {
    if (e.target.id === 'capacity') {
      Store.updateCapacity(e);
    } else {
      Store.create(e);
    }
  };
}
