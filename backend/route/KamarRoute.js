import { getKamar, getKamarById, addKamar, deleteKamar, updateKamar } from "../controller/KamarController.js";
import express from "express"

const Kamar = express.Router()

Kamar.get("/kamar", getKamar);
Kamar.get("/kamar/:id_kamar", getKamarById);
Kamar.post("/kamar", addKamar);
Kamar.patch("/kamar/:id_kamar", updateKamar);
Kamar.delete("/kamar/:id_kamar", deleteKamar);

export default Kamar
