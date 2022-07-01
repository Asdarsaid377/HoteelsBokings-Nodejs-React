import Tamu from "../models/tamumodel.js"


export const getTamu = async (req, res) => {
     try {
          const response = await Tamu.findAll();
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}
export const getTamuByIdTamu = async (req, res) => {
     try {
          const response = await Tamu.findOne({
               where: {
                    id_tamu: req.params.id_tamu
               }
          })
          res.status(200).json(response)
     } catch (error) {

     }
}

export const addTamu = async (req, res) => {
     const { id_tamu = "", nama = "", alamat = "", no_telpon = "", no_ktp = "", email = "", username = "", password = "", status_tamu = "" } = req.body
     if (id_tamu == "" || nama == "" || email == "" || alamat == "" || no_telpon == "" || no_ktp == "" || username == "" || password == "" || status_tamu == "") {
          res.status(400).json({ msg: "Lengkapi Data" })
     }
     try {
          await Tamu.create(req.body)
          res.status(200).json({ msg: "Terima Kasih Telah Memilih Kami" })
     } catch (error) {

     }
}

export const updateTamu = async (req, res) => {
     try {
          await Tamu.update(req.body, {
               where: {
                    id_tamu: req.params.id_tamu
               }
          })
          res.status(200).json({ msg: "Pesan Berhasil Diubah" })
     } catch (error) {

     }
}

export const deleteTamu = async (req, res) => {
     try {
          await Tamu.destroy({
               where: {
                    id_tamu: req.params.id_tamu
               }
          })
          res.status(200).json({ msg: "Pesan Berhasil Dihapus" })
     } catch (error) {

     }
}