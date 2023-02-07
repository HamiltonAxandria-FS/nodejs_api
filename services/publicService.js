const axios = require(`axios`);
require("dotenv").config();

const publicSerivce = async () => {
    console.log("Real PublicAPI");
    return await axios.get(`${process.env.publicURL}`)
};

const publicSerivceById = async (id) => {
    console.log("Real PublicAPI by Id");
    return await axios.get(`${process.env.publicURL}${id}`)
}

module.exports = {publicSerivce, publicSerivceById};