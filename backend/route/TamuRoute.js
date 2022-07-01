import { addTamu, getTamu, getTamuByIdTamu, updateTamu, deleteTamu } from "../controller/TamuController.js";
import express from "express";

const Tamu = express.Router();

Tamu.get("/tamu", getTamu);
Tamu.get("/tamu/:id_tamu", getTamuByIdTamu);
Tamu.post("/tamu", addTamu);
Tamu.patch("/tamu/:id_tamu", updateTamu);
Tamu.delete("/tamu/:id_tamu", deleteTamu)

export default Tamu