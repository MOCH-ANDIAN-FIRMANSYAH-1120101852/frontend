import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const DataFish = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusFish(kode) {
    try {
      const response = await axios.delete(`http://localhost:5000/fish/${kode}`);
      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Fish dengan kode ${kode} telah dihapus`);
    } catch (error) {
      console.log({ message: error.message });
    }
    router.push(`/admin/datafish`);
  }

  return (
    <div className="container">
      <h3>Data Mahasiswa</h3>
      <table className="table table-dark table-stiped table-hover">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Ukuran</th>
            <th>Kualitas</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.nama}</td>
              <td>{item.harga}</td>
              <td>{item.ukuran}</td>
              <td>{item.kualitas}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <Link
                    href={`/admin/updatefish?kode=${item.kode}&nama=${item.nama}&harga=${item.harga}&kualitas_id=${item.kualitas_id}&ukuran_id=${item.ukuran_id}`}
                  >
                    <a>Edit</a>
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    value={item.kode}
                    onClick={(e) => hapusFish(e.target.value)}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataFish;
