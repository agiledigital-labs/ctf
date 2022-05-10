# Modern Web Stack XSS CTF

Find and exploit a somewhat realistic XSS bug in a Typescript/React app with an
AWS Lambda for the backend.

The app is an email signature generator. It's actually mildly useful if you work
at Agile Digital.

You send it your job title and phone number through the frontend client, and it
sends you back a signature that you can paste into your email client. When you
open the frontend client, it also shows you the last signature you generated.

There are some hints in [HINTS.md](./HINTS.md) if you get stuck.

## Known Bugs

There's currently a bug in the backend where it won't always return the latest
data when you load the client app (i.e. GET requests). Just refresh a few times
for now.

## Set up

1. Deploy the backend to AWS by following [api/README.md](./api/README.md).
2. Run the client web app by following [client/README.md](./client/README.md).

## Goal

There's no flag so far. Try to get the client app to execute `alert(1)` on page
load.

You might need to read the source code to figure it out. There shouldn't be too
many serious spoilers in it.

