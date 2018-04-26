let isBuild = process.env.NODE_ENV === 'production';

let api = isBuild ? `https://api.authentication.dmcho.com` : `http://dev.api.authentication.dmcho.com`;

module.exports = {
    api
};