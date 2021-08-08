# Small Some Body

#### Video Demo: [SmallSomeBody](https://www.youtube.com/watch?v=S7-59SsDxT4)

#### Description:

This is a mimic project to a website named [小人物串聯](https://smallsomebody.tw/).
I am the designer of the website, and implement some of its search features to this project via create-react-app.
The main feature is finding the NGO that you're looking for in Taiwan, or summit yours.

#### file structure:

```
/node_module
/public
  |-index.js
  |-favi.ico
  /images
/src
  |-App.js
  |-App.text.js
  |-index.js
  |-orgs.json
  /components
    |-Footer.js
    |-Navbar.js
    |-OrgCard.js
    |-SearchBar.js
    /controls
      |-inputs.js
      |-MultiSelect.js
    /hooks
      |-useForm.js
    /pages
      |-Home.js
      |-NewOrg.js
      |-Org.js
      |-OrgList.js
|-package.json
|-README.md
```

All source code are underneath the `src` folder, React.js will compile it to the `public` folder, except put static assets directly in the `images` of `public` folder. Using [Material-UI](https://material-ui.com/) (a popular React UI framework) to build the design system.

##### `src` folder

- First: control file
  `index.js` is the main entry point of this app, and `app.js` is the main route controls via [React Router](https://reactrouter.com/).

- Second: pages folder \
  There are the main four pages of this app: `Home.js` is the home page; `NewOrg.js` is the form summit page; `Org.js` is the organization detailed page; `OrgList` is the search results page.

- Third: components folder \
  It contain all reusable components which could import to the page: `Navbar.js` is menu , `Footer.js` is footer, `SearchBar.js` is the search bar of home page, and `OrgCard.js` is in the search results page to produce NGO card. `Controls` folder contain the `Input.js` to reuse the input text style, `MultiSelect.js` is the dropdown select.

- Forth: hooks folder \
  It extract the stateful logic from the to reuse for the form.

- final: orgs.json \
  It is the default data of this app.

#### Available Scripts:

In the project directory,
first run `npm install` to install the node_modules,

- then run `yarn start` to run the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  The page will reload if you make edits, you will also see any lint errors in the console.

- or run `yarn build` to builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.
