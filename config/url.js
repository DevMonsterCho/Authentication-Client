let isBuild = process.env.NODE_ENV === "production";
console.log(process.env.NODE_ENV);

let file = isBuild
  ? `https://api.authentication.dmcho.com`
  : `http://dev.api.authentication.dmcho.com:3000`;
let api = isBuild
  ? `https://api.authentication.dmcho.com`
  : `http://dev.api.authentication.dmcho.com:4000`;
let www = isBuild
  ? `https://authentication.dmcho.com`
  : `http://dev.authentication.dmcho.com`;

module.exports = {
  file,
  api,
  www
};
