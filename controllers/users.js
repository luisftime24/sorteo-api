const { usersModel } = require("../models")

const getUsers = async (req, res) => {
  const data = await usersModel.find({});
  res.send({data});
}

const getUser = (req, res) => {
  
}

const createUser = (req, res) => {
  
}

const updateUser = (req, res) => {
  
}

const deleteUser = (req, res) => {
  
}


module.exports = { getUsers }; 