const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const TaskSchemaProveedor = new Schema({
  codigoproveedor: {type:String, unique:true},
  dpiproveedor: String,
  nitproveedor: String,
  nombreproveedor: String,
  apellidoproveedor: String,
  direccionproveedor: String,
  saldoproveedor:Number,
  limitesaldoproveedor:Number,
  correoproveedor: String,
  telefonoproveedor: String,
  estadoproveedor: Boolean,
  fechacreacionproveedor: Date

});

module.exports = mongoose.model('proveedor',TaskSchemaProveedor);
