import { addReservasi, getReservasi, getReservasiById, updateReservasi, deleteReservasi } from "../controller/ReservasiController.js";
import express from "express"

const Reservasi = express.Router()

Reservasi.get("/reservasi", getReservasi);
Reservasi.get("/reservasi/:id_reservasi", getReservasiById);
Reservasi.post("/reservasi", addReservasi);
Reservasi.patch("/reservasi/:id_reservasi", updateReservasi);
Reservasi.delete("/reservasi/:id_reservasi", deleteReservasi);

export default Reservasi
