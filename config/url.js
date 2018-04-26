let isBuild = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)
let api = isBuild ? `https://api.authentication.dmcho.com` : `http://dev.api.authentication.dmcho.com`;
let www = isBuild ? `https://authentication.dmcho.com` : `http://dev.authentication.dmcho.com`;

module.exports = {
    api,
    www
};