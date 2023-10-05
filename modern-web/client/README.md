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
