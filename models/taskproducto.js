const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const TaskSchemaProducto = new Schema({
  codigoproducto: {type:String, unique:true},
  descripcionproducto: String,
  categoriaproducto: String,
  costoproducto: Number,
  existencia: Number,
  precioproducto: Number,
  estadoproducto: Boolean,
  fechacreacionproducto:Date

});

module.exports = mongoose.model('producto',TaskSchemaProducto);
