/* eslint-disable new-cap */
// Components
import Truck from './truck';
import Ship from './ship';

// TransportFactory
class TransportFactory {
  transportClass = Truck;

  setTransportClass = type => {
    switch (type) {
      case 'newTruck':
        this.transportClass = Truck;
        break;
      case 'newShip':
        this.transportClass = Ship;
        break;
      default:
        break;
    }
  };

  createTransport = (type, props, ...args) => {
    this.setTransportClass(type);
    switch (type) {
      case 'newTruck':
        return new this.transportClass(props.license, props.gasType, ...args, type);
      case 'newShip':
        return new this.transportClass(props.name, props.countOfTeam, ...args, type);
      default:
        return null;
    }
  };
}

const transportFactory = new TransportFactory();
export default transportFactory;
