# Callbacks and Promises in JavaScript

Both callbacks and Promises are ways to handle work that finishes later, such as a timer, reading a file, or requesting data from an API.

## Callback

### Key points

- A callback is a function passed to another function as an argument.
- The receiving function decides when to call it.
- Callbacks are common in event handlers and older asynchronous APIs.
- Deeply nested callbacks can be difficult to read and maintain ("callback hell").

### Simple example

```js
function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

getData((message) => {
    console.log(message);
});
```

**Output (after 1 second):**

```text
Data received
```

Here, `getData` receives a function and calls it when the timer finishes.

## Promise

### Key points

- A Promise is an object representing the eventual success or failure of an asynchronous operation.
- It has three states: **pending**, **fulfilled** (succeeded), or **rejected** (failed).
- Use `.then()` to handle a fulfilled result and `.catch()` to handle an error.
- Promises can be chained, which often makes sequences of asynchronous work easier to follow.

### Simple example

```js
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Data received");
            } else {
                reject(new Error("Could not get data"));
            }
        }, 1000);
    });
}

getData()
    .then((message) => console.log(message))
    .catch((error) => console.error(error.message));
```

**Output (after 1 second when successful):**

```text
Data received
```

`resolve` provides the successful result; `reject` reports a failure. `.then()` and `.catch()` handle those outcomes.

## Quick comparison

| Callback | Promise |
|---|---|
| A function supplied to another function | An object representing a future result |
| The receiving function calls it | Handle success with `.then()` and errors with `.catch()` |
| Can become hard to follow when nested | Can be chained; also works with `async` / `await` |

**Memory tip:** A callback means "call this function when you're ready." A Promise means "this operation will provide a result or an error later."
