import { getNamabank, getNamabankById, addNamabank, updateNamabank, deleteNamabank } from "../controller/NamabankController.js";
import express from "express"

const Namabank = express.Router()

Namabank.get("/namabank", getNamabank);
Namabank.get("/namabank/:kode_bank", getNamabankById);
Namabank.post("/namabank", addNamabank);
Namabank.patch("/namabank/:kode_bank", updateNamabank);
Namabank.delete("/namabank/:kode_bank", deleteNamabank)

export default Namabank;