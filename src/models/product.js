const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    codigo: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: false },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    src: { type: String, required: false },
    estado: { type: String, required: true },
    estado_registro: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Product", productSchema);
