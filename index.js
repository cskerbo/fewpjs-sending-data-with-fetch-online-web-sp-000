let userData = {
  userName: "Chris",
  userEmail: "test@test.com"
};

let submitData = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(userData)
};

return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });
