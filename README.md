### Description:

- 模仿網站：[小人物串聯](https://smallsomebody.tw/) 搜尋/新增 NGO。
- 使用 [create-react-app](https://create-react-app.dev/) 與 [Material-UI](https://material-ui.com/) 製作。
- fully responsive web application.

### 檔案結構:

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

### `src` folder

- 1. control file \
     `index.js` is the main entry point of this app, and `app.js` is the main route controls via [React Router](https://reactrouter.com/).

- 2. pages folder \
     There are the main four pages of this app: `Home.js` is the home page; `NewOrg.js` is the form summit page; `Org.js` is the organization detailed page; `OrgList` is the search results page.

- 3. components folder \
     It contain all reusable components which could import to the page: `Navbar.js` is menu , `Footer.js` is footer, `SearchBar.js` is the search bar of home page, and `OrgCard.js` is in the search results page to produce NGO card. `Controls` folder contain the `Input.js` to reuse the input text style, `MultiSelect.js` is the dropdown select.

- 4. hooks folder \
     It extract the stateful logic from the to reuse for the form.

- 5. orgs.json \
     It is the default data of this app.

### Available Scripts:

In the project directory,
first run `yarn install` to install the node_modules,

- then run `yarn start` to run the app in the development mode.\
  Open [http://localhost:3000/small-some-body](http://localhost:3000/small-some-body) to view it in the browser.
  The page will reload if you make edits, you will also see any lint errors in the console.

- or run `yarn build` to builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.
