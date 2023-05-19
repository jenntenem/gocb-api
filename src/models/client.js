const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: false },
    telefono: { type: String, required: true },
    correo: { type: String, required: false },
    estado_registro: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Client", clientSchema);
