# Security

When fetching data such as artist biographies, last.fm provides markup that can be directly rendered in your application. React reminds us of the dangers of rendering such markup with [`dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

To prevent potentially exposing uses to cross-site scripting (XSS) attacks, I used two libraries to clean up any markup I used that was provided by the API.

-   [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize markup before passing it into `dangerouslySetInnerHTML`
-   [sanitize-url](https://github.com/braintree/sanitize-url) to sanitize any link or image urls
