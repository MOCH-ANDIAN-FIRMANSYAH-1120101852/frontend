import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UpdateFish = () => {
  const [_kode, setKode] = useState("");
  const [_nama, setNama] = useState("");
  const [_ukuran_id, setUkuranId] = useState("");
  const [_kualitas_id, setKualitasId] = useState("");
  const [_harga, setHarga] = useState("");

  const router = useRouter();
  const { kode, nama, ukuran_id, kualitas_id, harga } = router.query;

  useEffect(() => {
    setKode(kode);
    if (typeof nama == "string") {
      setNama(nama);
    }
    setUkuranId(ukuran_id);
    setKualitasId(kualitas_id);
    setHarga(harga);
  }, [kode, nama, harga, ukuran_id, kualitas_id]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios
        .put(`http://localhost:5000/fish/${_kode}`, {
          kode: _kode,
          nama: _nama,
          harga: _harga,
          kualitas_id: _kualitas_id,
          ukuran_id: _ukuran_id,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push(`/admin/datafish`);
    } catch (e) {
      console.log({ message: e.message });
    }
  };
  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-bold text-center mb-3">Edit data Fish</h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="kode"
                type="text"
                placeholder="Kode"
                value={_kode}
                onChange={(e) => setKode(e.target.value)}
              />
              <label htmlFor="kode">Kode</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nama"
                type="text"
                placeholder="nama"
                value={_nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <label htmlFor="harga">Nama</label>
            </div>{" "}
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="harga"
                type="text"
                placeholder="Harga"
                value={_harga}
                onChange={(e) => setHarga(e.target.value)}
              />
              <label htmlFor="harga">harga</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="kualitas"
                type="number"
                placeholder="Kualitas"
                value={_kualitas_id}
                onChange={(e) => setKualitasId(e.target.value)}
              />
              <label htmlFor="kualitas">Kualitas</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="ukuran"
                type="number"
                placeholder="Ukuran"
                value={_ukuran_id}
                onChange={(e) => setUkuranId(e.target.value)}
              />
              <label htmlFor="ukuran">Ukuran</label>
            </div>
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFish;
