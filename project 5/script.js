document.getElementById("load-btn").addEventListener("click", () => {
  document.getElementById("status").innerText = "Loading...";
  
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });

  promise.then((data) => {
    document.getElementById("status").innerText = data;
  });
});

//define promise ui: promise is an object that represents the eventual completion
//or failure of an asynchronous operation and its resulting value.
//promise states: pending, fulfilled, rejected
//promise methods: then, catch, finally
//promise chain: