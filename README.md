<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/vue-splendid-food/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/vue-splendid-food/actions/workflows/codeql-analysis.yml)
[![Deploy to Firebase](https://github.com/webceyhan/vue-splendid-food/actions/workflows/firebase.yml/badge.svg)](https://github.com/webceyhan/vue-splendid-food/actions/workflows/firebase.yml)

<!-- LOGO (OPTIONAL) -->

<!-- <img src="./src/assets/logo.png" width="100px"> -->

 <!-- HEADER ///////////////////////////////////////////////////////////// -->

# Vue Splendid Food Application

This is a very simple online grocery shop application built on Vue + Bootstrap.

It demonstrates some key concepts of building Single-Page Application (SPA), such as routing via Vue Router, State Management with Vuex, Data Persistence via localStorage.

It can be build and deployed to Firebase through Github Actions.

[View Demo](https://vue-splendid-food.web.app/) |
[Report Issue](https://github.com/webceyhan/vue-splendid-food/issues) |
[Request Feature](https://github.com/webceyhan/vue-splendid-food/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- REQUIREMENTS /////////////////////////////////////////////////////// -->

## Requirements

You need to install the [Node.js](https://nodejs.dev/)
and `npm` package manager first.

You can also install vue-cli globally to edit your project.

```sh
npm install -g @vue/cli
```

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/vue-splendid-food.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd vue-splendid-food
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
npm run serve           # start development server
npm run build           # build for production
```

> Take a look at the other scripts in [`package.json`](./package.json)

<br>
<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

Start development server which compiles and hot-reloads to project.

```sh
npm run serve
```

<br>
<!-- BUILDING //////////////////////////////////////////////////////////// -->

## Building

Compile and minify application for production.

```sh
npm run build
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment (Firebase)

A GitHub Action will automatically deploy the project to Firebase on every push.

> See the details in [.github/workflows/firebase.yml](./.github/workflows/firebase.yml)

1. Create a [Firebase](https://firebase.google.com/) account.

2. Install the `firebase-cli` globally.

    ```sh
    npm install -g firebase-tools
    ```

3. Initialize new Firebase project inside your project folder.

    ```sh
    firebase init
    # choose Hosting: Configure files for Firebase Hosting and (optionally) st up GitHub Action deploys

    # ? What do you want to use as your public directory? dist

    # ? Configure as a single-page app (rewrite all urls to /index.html)? Yes

    # ? Set up automatic builds and deploys with GitHub? Yes

    # ? File dist/index.html already exists. Overwrite? No

    # ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) webceyhan/vue-splendid-food

    # ? Set up the workflow to run a build script before every deploy? Yes
    ```

    > This will create a new application on Firebase cloud, a firebase.json configuration for hosting and a GitHub Action for deployment, inside your project folder.

    > It also generates the required secrets in your GitHub repository as follows;

    ```yaml
    FIREBASE_SERVICE_ACCOUNT_VUE_SPLENDID_FOOD
    ```

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [Vue.js](https://vuejs.org/)
-   [Vue CLI](https://cli.vuejs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [Firebase](https://firebase.google.com/)
    -   [action-hosting-deploy](https://github.com/FirebaseExtended/action-hosting-deploy)
