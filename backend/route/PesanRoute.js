import { addPesan, getPesanByIdTamu, getPesan, updatePesan, deletePesan } from "../controller/PesanController.js";
import express from "express";

const Pesan = express.Router();

Pesan.get("/pesan", getPesan);
Pesan.get("/pesan/:id_tamu", getPesanByIdTamu);
Pesan.post("/pesan", addPesan);
Pesan.patch("/pesan/:id_tamu", updatePesan);
Pesan.delete("/pesan/:id_tamu", deletePesan)

export default Pesan