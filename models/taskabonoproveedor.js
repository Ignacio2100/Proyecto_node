const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const TaskSchemaAbonoProveedor = new Schema({
  codigoproveedor:String,
  montoabono:Number,
  saldoactualproveedor:Number,
  fechaabonoproveedor:Date

});

module.exports = mongoose.model('abono_proveedor',TaskSchemaAbonoProveedor);
