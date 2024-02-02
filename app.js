// app.js

const mongoose = require('mongoose');
const connectDB = require('./src/db');
const UserModel = require('./userModel');

// Conectar a la base de datos
connectDB();

// Función para crear una tarea
const createUser = async (tarea) => {
  try {
    const newUser = new UserModel(tarea);
    const result = await newUser.save();
    return result;
  } catch (error) {
    return error;
  }
};

// Función para encontrar todos las tareas
const findUsers = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    return error;
  }
};

// Función para encontrar un tarea por ID
const findUserById = async (id) => {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    return error;
  }
};

// Función para eliminar un tarea por ID
const deleteUserById = async (id) => {
  try {
    const result = await UserModel.deleteOne(id);
    return result;
  } catch (error) {
    return error;
  }
};

// Función para actualizar un tarea por ID
const updateUser = async (id, data) => {
  try {
    const result = await UserModel.updateOne(
      {_id: id},
      { $set: { ...data } },
      { new: true }
    );
    return result;
  } catch (error) {
    return error;
  }
};
 

const CRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
};

module.exports = CRUD;