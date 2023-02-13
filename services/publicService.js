const axios = require(`axios`);
require("dotenv").config();

const publicSerivce = async () => {
    console.log("Real CatAPI");
    return await axios.get(`${process.env.publicURL}`)
};

const publicSerivceById = async (id) => {
    console.log("Real CatAPI by Id");
    return await axios.get(`${process.env.publicURL}${id}`)
}

module.exports = {publicSerivce, publicSerivceById};