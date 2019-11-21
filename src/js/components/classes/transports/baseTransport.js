export default class BaseTransport {
  constructor(id, model, producedYear, capacity, averageSpeed) {
    this.id = id;
    this.model = model;
    this.producedYear = producedYear;
    this.capacity = capacity;
    this.averageSpeed = averageSpeed;
    this.weightUnit = 'kg';
  }

  showCapacityInPounds() {
    switch (this.weightUnit) {
      case 'kg':
        this.weightUnit = 'lb';
        this.capacity = (this.capacity * 2.205).toFixed(2);
        break;
      case 'lb':
        this.weightUnit = 'kg';
        this.capacity = (this.capacity / 2.205).toFixed(2);
        break;

      default:
        break;
    }
  }

  showAverageSpeed(speedUnit) {
    this.averageSpeed = `${this.averageSpeed}${speedUnit}`;
  }
}
