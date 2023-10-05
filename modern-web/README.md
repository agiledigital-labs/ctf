# Modern Web Stack XSS CTF

Find and exploit somewhat-realistic security bugs in a TypeScript/React app with
an AWS Lambda backend. You can also run everything locally in Docker without
using AWS.

The app is an email signature generator. You send it your job title and phone
number through the frontend client, and it sends you back a signature that you
can paste into your email client. When you open the frontend client, it also
shows you the last signature you (or anyone) generated.

There are some hints in [HINTS.md](./HINTS.md) if you get stuck.

## Unintentional Bugs

There's currently a bug in the backend where it won't always return the latest
data when you load the client app (i.e. GET requests). Just refresh a few times
for now. This only occurs if you deploy the backend to AWS instead of running it
locally.

## Set up

1. Run/deploy the backend by following [api/README.md](./api/README.md).
2. Run the client web app by following [client/README.md](./client/README.md).

## Goal

We haven't actually put a flag in yet, so just try to get the client app to
execute `alert(1)` on page load.

You will most likely need to read the source code to figure it out. That's
allowed and intended.

