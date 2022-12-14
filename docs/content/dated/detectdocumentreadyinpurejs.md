tip-writer-support: https://www.coinbase.com/loverajoel

- /en/detect-document-ready-in-pure-js/

The cross-browser way to check if the document has loaded in pure JavaScript is using [`readyState`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState).

```js
if (document.readyState === 'complete') {
    // The page is fully loaded
}
```

You can detect when the document is ready...

```js
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        // document ready
    }
}, 100);
```

or with [onreadystatechange](https://developer.mozilla.org/en-US/docs/Web/Events/readystatechange)...

```js
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document ready
    }
};
```

Use `document.readyState === 'interactive'` to detect when the DOM is ready.
