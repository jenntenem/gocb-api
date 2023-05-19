const { Schema, model } = require("mongoose");

const rolSchema = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: false },
    estado_registro: { type: Boolean, required: true },
    menu: { type: Schema.Types.Mixed, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Rol", rolSchema);
