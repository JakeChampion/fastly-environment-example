//index.js
/// <reference types="@fastly/js-compute" />

// this is where my actual application code lives

addEventListener("fetch", event => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
  return new Response(`This is ${globalThis.environment}`);
}

