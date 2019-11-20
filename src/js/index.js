import '../styles/styles.scss';
import Events from './components/events';

document.addEventListener('DOMContentLoaded', () => new Events('newShip'));
document.addEventListener('DOMContentLoaded', () => new Events('newTruck'));
document.addEventListener('DOMContentLoaded', () => new Events('cost'));
document.addEventListener('DOMContentLoaded', () => new Events('capacity'));
