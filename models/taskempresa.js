const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const TaskSchemaEmpresa = new Schema({
  codigoempresa:{type:String, unique:true},
  empresa:String

});

module.exports = mongoose.model('empresa',TaskSchemaEmpresa);


