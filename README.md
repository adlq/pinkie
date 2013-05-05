Pinkie
======

### Idea ###
Piggybacking on [DOM CustomEvents](https://developer.mozilla.org/en/docs/DOM/Event/CustomEvent) to create a general event bus, for MVC-ish purposes in JavaScript.
Caveat: here, events are identified not by the elements that listen to them, but by their type and associated callbacks

### Install ###
Just include the pinkie.js script in your code:
```html
<script src='path/to/pinkie.js'></script>
```

### Use cases ###
* Bind a callback to a specific event type:

```js
Pinkie.watch(eventType, callback)
```

* Unbind the previous callback from the event type:

```js
Pinkie.forget(eventType, callback)
```

* Fire a custom event to the event bus (additional info about the event may be included as an object in the optional second parameter):

```js
Pinkie.fire(eventType [, details])
```

### Documentation ###
Check the code out!

### Demo ###
Soon, Pinkie, soon...

### Misc. ###
As for now, no bubbling is needed, only capturing because the event bus resides in the document element. Try bubbling that.
