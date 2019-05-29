async function Loading() {
  Promise.all([loadVideosAsync(), loadMetaAsync()]).then(([videos, meta]) =>
    console.log(`${videos}, ${meta}`)
  );
}

async function anAsyncCall() {
  let promise = await doSomethingAsync();
  doSomethingComplicated(promise);
}
function doSomethingComplicated(promise) {
  promise.then(() => somethingComplicated());
}

db.getAllDocsAsync().then(result => {
  result.rows.forEach(row => db.remove(row));
});

doAsync()
  .then(function() {
    throw new Error("nope");
  })
  .catch(error => handleError(error));
