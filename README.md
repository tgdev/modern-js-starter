# Modern JS Starter

A small set of tools to get a modern javascript project up and running.


### Dependencies

- Node (v8.9.1)
- Yarn (v1.3.2)


### Tools provided

- **Babel:**   ES6 support
- **ESLint:**  File linting
- **Webpack:** Asset bundling
- **Jest:**    Unit testing


### Getting started

1. **Clone the repo**

```bash
git clone https://github.com/tgdev/modern-js-starter.git
```

2. **Setup the project**

```bash
yarn setup
```

- Deletes the cloned origin repo (`.git`)
- Updates `package.json` to match your project's details
- Installs dependencies

3. **Fire up local dev server**

```bash
yarn start
```

- Watches `js` tests
- Watches `js` files for lint errors
- Opens new browser tab at `http://localhost:8080`

4. **Review demo folder**

A dummy function and accompanying test exist in `src/demo/`. You can delete this folder and its contents whenever you like. (Also remember to remove the import from `src/index.js`)


### Where's that cool thing I like?

**Looking for React? Redux? MobX? CSS-modules? CSS-in-JS? Angular? Enzyme? Immutable? Hot reloading?**

Feel free to fork this repo and build upon it.

_This really is just a bare bones starting point to use the latest features of ES6 and provide decent unit testing via Jest._


### Contributing

This has really been created for my own personal use so I'm not really looking to build it out. Plus there's a gajillion boilerplate, starter-kits out there so make sure you check those out.
