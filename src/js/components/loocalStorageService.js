/* eslint-disable class-methods-use-this */
class LocalStorage {
  constructor() {
    if (typeof LocalStorage.instance === 'object') {
      return LocalStorage.instance;
    }
    LocalStorage.instance = this;
    return this;
  }

  static prefix = 'JS-Band-';

  getItem(key) {
    return JSON.parse(window.localStorage.getItem(`${LocalStorage.prefix}${key}`));
  }

  setItem(key, value) {
    window.localStorage.setItem(`${LocalStorage.prefix}${key}`, JSON.stringify(value));
  }
}

const localStorage = new LocalStorage();

export default localStorage;
