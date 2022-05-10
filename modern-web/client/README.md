# Modern Web Stack CTF - Client App

## Running

```sh
docker build -t modern-web-ctf-client .
docker run --env REACT_APP_API_URL=... \
  -it --rm -p 3000:3000 modern-web-ctf-client
```

If you deployed the backend locally, `REACT_APP_API_URL` will be
`'http://localhost:3009/dev/ctf'`.

If you deployed the backend to AWS, it will be
`'https://[API Gateway ID].execute-api.ap-southeast-2.amazonaws.com/dev/ctf'`,
where `[API Gateway ID]` is the ID of the AWS API Gateway created when you
deployed the API.

Or use `REACT_APP_API_URL=... yarn start`.

Then open [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Checks type coverage and runs the test suite once.

### `yarn test-continuous`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.