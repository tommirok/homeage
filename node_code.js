const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function Request(args) {
  const { uriEnd, val1 } = args;
  this.apiURIStart = "http:/api/";
  this.apiURIEnd = uriEnd;
  this.val2 = 5;
  const newValue = this.val2;
  return (function api(){
    return new Promise((resolve, reject) => {
      let iszero = "";
      iszero = val1 - newValue;
  
      console.log(iszero);
      if (iszero === 0) {
        resolve("reset succesfully");
      } else if (iszero == 0 && iszero !== 0) {
        reject(new Error("input must be type " instanceof Number));
      } else {
        reject(new Error("resetting failed"));
      }
    });
  }())
}
Request({ uriEnd: "someapi", val1: "5" })
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.warn(err);
  });
