import { getFasilitas, addFasilitas, getFasilitasById, deleteFasilitas, updateFasilitas } from "../controller/FasilitasController.js";
import express from "express";

const FasilitasRoute = express.Router();

FasilitasRoute.get("/fasilitas", getFasilitas);
FasilitasRoute.get("/fasilitas/:id_fasilitas", getFasilitasById);
FasilitasRoute.post("/fasilitas", addFasilitas);
FasilitasRoute.patch("/fasilitas/:id_fasilitas", updateFasilitas);
FasilitasRoute.delete("/fasilitas/:id_fasilitas", deleteFasilitas)

export default FasilitasRoute