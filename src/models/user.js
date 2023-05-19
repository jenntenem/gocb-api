const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    user: { type: String, required: true },
    password: { type: String, required: true },
    estado_registro: { type: Boolean, required: true },
    id_rol: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("User", userSchema);
