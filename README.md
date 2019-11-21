# js-band-hw-task-3

[This app on GitPages](http://ras.pp.ua/js-band-hw-task-3 "This app on GitPages")

To run this application, check that latest versions of

- [NodeJS](https://nodejs.org/en/) [2.24.0]
- [Git](https://git-scm.com/downloads) [v12.13.0]
- [npm](https://www.npmjs.com/get-npm)[v6.13.0] || [yarn](https://yarnpkg.com/lang/en/docs/install/) [v1.19.1]

is installed on your computer.

## Available commands [npm || yarn]

```bash
# Install dependencies:
npm install
yarn

# Run app (run dev server on localhost: 9000):
npm run dev
yarn run dev

# Build app (create dist folder):
npm run build:
yarn run build:

```

---

## Task

We had the audit of our PoC. And now we have few suggestions about our solution.
First, it's better to create different types of transports by using Factory Method.
Second, we need to prepare service for local storage as a Singleton and set prefix what will be added to the key name.

### Objectives

- Update your existing functionality by using Method factory
- Implement service for the local storage as Singleton

### Arch notes

Example about prefix: we try to save ‘token’ with value ‘1234’ to the storage and we set prefix ‘JS-Band-’,
we will have ‘JS-Band-token’ as a key and ‘1234’ as a value in the local storage.

### Acceptance criteria

- New transport is created by using Factory Method pattern.
- Functionality should work as before
- Push you application into github pages
- Local storage prefix should be set one time on the application initialization

---
