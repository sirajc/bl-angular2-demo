# bl-angular2-demo

Angular 2 Demo for training

### Features Covered
1. Components and Module
2. bootstrapping
3. Routing

### Quick start

```bash
# clone our repo or fork and clone your own fork
$ git clone https://github.com/sirajc/bl-angular2-demo.git

# change directory to your app
$ cd bl-angular2-demo

# install the dependencies with npm
$ npm install

```
go to [http://localhost:8080](http://localhost:8080) in your browser.

## Developer

Start the server

* `npm start`

Start the server with Hot Module Replacement (HMR):

* `npm run start:hmr`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

## Documentation

You can generate api docs (using [TypeDoc](http://typedoc.io/)) for your code with the following:

* `npm run docs`



# License

[MIT](/LICENSE)
