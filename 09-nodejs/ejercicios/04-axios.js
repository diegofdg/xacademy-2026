const axios = require("axios");
const url = require("url");

axios.interceptors.request.use(
  (config) => {
    console.log("Antes de enviar un request", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log("Llamada exitosa");
    return response;
  },
  (error) => {
    console.error("Error al hacer la llamada", error);
  },
);

async function makeRequest() {
  let payload = { name: "John", email: "john@email.com" };

  let config = {
    method: "delete",
    url: `http://localhost:8080/user/12345`,
    data: payload,
  };
  let response = await axios(config);
  console.log("Datos del server ", response.data);
}

makeRequest();

// async function makeRequest() {
//   let payload = { name: 'John', email: 'john@email.com'}

//   let config = {
//     method: "put",
//     url: `http://localhost:8080/user/12345`,
//     data: payload
//   };
//   let response = await axios(config);
//   console.log("Datos del server ", response.data);
// }

// async function makeRequest() {
//   let payload = { name: 'John', email: 'john@email.com'}

//   let config = {
//     method: "post",
//     url: `http://localhost:8080/user`,
//     data: payload
//   };
//   let response = await axios(config);
//   console.log("Datos del server ", response.data);
// }

// async function makeRequest() {
//   let payload = { name: 'John', email: 'john@email.com'}
//   const params = new url.URLSearchParams(payload)

//   let config = {
//     method: "get",
//     url: `http://localhost:8080/user?${params}`,
//   };
//   let response = await axios(config);
//   console.log("Datos del server ", response);
// }

// axios.get("http://localhost:8080/user/12345").then(resp => {
//   console.log("Datos del server ", resp)
// })
