# PhotographerPortfolio

## Сайт на GitHub Pages

Сборка лежит в артефакте Actions, а не в корне репозитория. Если в настройках Pages выбрано **Deploy from a branch**, GitHub покажет этот `README` вместо приложения.

1. Откройте **Settings → Pages**.
2. В блоке **Build and deployment** поле **Source** переключите на **GitHub Actions** (не ветку `main` и не папку `/ (root)`).
3. Во вкладке **Actions** дождитесь успешного workflow **Deploy to GitHub Pages** (при необходимости запустите его вручную: **Run workflow**).
4. Сайт: `https://tatianazo.github.io/photographer-portfolio/`

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.25.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
