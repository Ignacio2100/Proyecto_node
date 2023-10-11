const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const TaskSchemaCategoria = new Schema({
  codigocategoria:{type:String, unique:true},
  nombre:String

});

module.exports = mongoose.model('categoria',TaskSchemaCategoria);


