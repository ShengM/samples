// new Promise(executor).then();

function Bromise(executor) {
  let _onResolve = null;
  let onReject = null;

  this.then = function (onResolve) {
    _onResolve = onResolve;
  }

  function resolve() {
    setTimeout(() => {
      _onResolve();
    }, 0);
  }
  executor(resolve);
}

new Bromise(resolve => {
  console.log(1);
  resolve();
}).then(() => console.log(2));