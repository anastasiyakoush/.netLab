//a
async function Loading() {
  Promise.all([loadVideosAsync(), loadMetaAsync()]).then(([videos, meta]) =>
    console.log(`${videos}, ${meta}`)
  );
}
//b
async function anAsyncCall() {
  let promise = await doSomethingAsync();
  doSomethingComplicated(promise);
}
function doSomethingComplicated(promise) {
  promise.then(() => somethingComplicated());
}
//в
db.getAllDocsAsync()
  .then(result =>
    Promise.all(result.rows.forEach(row => {
         new Promise(resolve => {
          db.remove(row.doc);
          resolve();
        });
      })
    )
  )
  .then(function() {
    // All docs must be removed!
  });
//д
doAsync()
  .then(function() {
    return new Promise.reject(new Error("nope"));
  })
  .catch(error => handleError(error));
