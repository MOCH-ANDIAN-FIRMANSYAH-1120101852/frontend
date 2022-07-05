import { useState } from "react";
import axios from "axios";

const CreateMahasiswa = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [kualitas_id, setKualitasId] = useState("");
  const [ukuran_id, setUkuranId] = useState("");

  async function submitHandler(e) {
    try {
      axios
        .post("http://localhost:5000/fish", {
          nama,
          harga,
          kualitas_id,
          ukuran_id,
        })
        .then((response) => {
          console.log(response);
        });
      alert("penambahan data sukses");
      //clearInput()
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 text-center">Input Fish</h1>
          <div className="w-75">
            {/* <div className="form-floating">
              <input
                className="form-control mb-2"
                id="kode"
                type="text"
                placeholder="Kode"
                value={kode}
                onChange={(e) => setNim(e.target.value)}
              ></input>
              <label htmlFor="kode">NIM</label>
            </div> */}
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nama"
                type="text"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              ></input>
              <label htmlFor="nama">NAMA</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="harga"
                type="text"
                placeholder="Harga"
                value={harga}
                onChange={(e) => setHarga(+e.target.value)}
              ></input>
              <label htmlFor="harga">Harga</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="ukuran_id"
                type="number"
                placeholder="Ukuran"
                value={ukuran_id}
                onChange={(e) => setUkuranId(e.target.value)}
              ></input>
              <label htmlFor="ukuran_id">Ukuran</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="kualitas_id"
                type="number"
                placeholder="Kualitas"
                value={kualitas_id}
                onChange={(e) => setKualitasId(e.target.value)}
              ></input>
              <label htmlFor="kualitas_id">Kualitas</label>
            </div>
          </div>
          <div className="w-75 d-flex flex-row-reverse">
            <button className="btn btn-primary" type="submit">
              SIMPAN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMahasiswa;
