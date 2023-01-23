const { postsModel } = require("../models")

const getPosts = async (req, res) => {
  const data = await postsModel.find({});
  res.send({data});
}

const getPost = (req, res) => {
  
}

const createPost = (req, res) => {
  
}

const updatePost = (req, res) => {
  
}

const deletePost = (req, res) => {
  
}


module.exports = { getPosts }; 