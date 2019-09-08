self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("shell-v1")
    .then(cache => cache.addAll(["/", "/index.js", "/style.css"]))
    .catch(error => console.log(error))
  )
})
self.addEventListener("fetch", event => {
  event.respondWith(
    //if the caches container sees the particular object we want, it returns a promise
    //This promise has a callback which must be 'response'. The return value is either the response or it tries to fetch it from the network
    caches.match("/").then(response => 
       response || fetch(event.target)
    )
  )
})

/**
 * What's the difference between caches and cache
    * Current answer: caches is all the caches in the navigator. cache is a particular cache in the caches container
 * What is 'self'? 
    * self is the current navigator. Refered to as self by the web worker
 * Why does waitUntil go with the install event?
    * Current answer: waitUntil is telling the browser to not do anything until the caches.open(cache) promise is resolved
 * Why does respondWith go with the fetch event?
    * The fetch event's callback is fired whenever a fetch action is to be made. So, respondWith is a method of the event object which tells the browser to respond with the action under that method
 */
