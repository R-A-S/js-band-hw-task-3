export default class BaseTransport {
  constructor(id, model, producedYear, capacity, averageSpeed, type) {
    this.id = id;
    this.model = model;
    this.producedYear = producedYear;
    this.capacity = capacity;
    this.averageSpeed = averageSpeed;
    this.speedUnit = BaseTransport.showAverageSpeed(type);
    this.weightUnit = 'kg';
  }

  showCapacityInPounds() {
    switch (this.weightUnit) {
      case 'kg':
        this.weightUnit = 'lb';
        this.capacity = this.capacity * 2.205;
        break;
      case 'lb':
        this.weightUnit = 'kg';
        this.capacity = this.capacity / 2.205;
        break;

      default:
        break;
    }
  }

  static showAverageSpeed = type => {
    let unit;
    switch (type) {
      case 'newShip':
        unit = 'nm';
        break;
      case 'newTruck':
        unit = 'km';
        break;

      default:
        break;
    }
    return unit;
  };
}
