import { getKonfirmasi, getKonfirmasiById, addKonfirmasi, deleteKonfirmasi, updateKonfirmasi } from "../controller/KonfirmasiController.js";
import express from "express"

const Konfirmasi = express.Router()

Konfirmasi.get("/konfirmasi", getKonfirmasi);
Konfirmasi.get("/konfirmasi/:id_konfirmasi", getKonfirmasiById);
Konfirmasi.post("/konfirmasi", addKonfirmasi);
Konfirmasi.patch("/konfirmasi/:id_konfirmasi", updateKonfirmasi);
Konfirmasi.delete("/konfirmasi/:id_konfirmasi", deleteKonfirmasi)

export default Konfirmasi;