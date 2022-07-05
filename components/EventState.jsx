import { useState } from "react";

const EventState = () => {
  const [nama, setnama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [gender, setGender] = useState("");
  const [progPil, setProgPil] = useState("");
  const [presAk, setPresAk] = useState(false);
  return (
    <>
      <div className="container m-4">
        <div className="row">
          <div className="col-5">
            <h3>Form Pendaftaran</h3>
            <hr />
            <div className="mb-2">
              <label htmlfor="nama">Nama</label>
              <input className="form-control" type="text" name="nama" id="nama" value={nama} onChange={(e) => setnama(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlfor="alamat">Alamat</label>
              <input className="form-control" type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="fs-5">
                Gender
              </label>
              <br />
              <div className="form-check-inline">
                <input type="radio" className="from-check-input" name="gender" id="genderPria" checked={() => setGender("Pria")} value="Pria" onChange={(e) => setGender(e.target.value)} />

                <label className="form-check-label" htmlFor="genderPria">
                  Pria
                </label>
              </div>
              <div className="form-check-inline">
                <input type="radio" className="from-check-input" name="gender" id="genderWanita" checked={() => setGender("Wanita")} value="Wanita" onChange={(e) => setGender(e.target.value)} />

                <label className="form-check-label" htmlFor="genderWanita">
                  Wanita
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="" className="fs-5">
                Program Pilihan
              </label>
              <select name="programPilihan" id="" className="form-select" value={progPil} onChange={(e) => setProgPil(e.target.value)}>
                <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                <option value="S1 Sistem Informatika">S1 Sistem Informatika</option>
                <option value="S1 Bisnis Digital">S1 Bisnis Digital</option>
                <option value="D3 Desain Komunikasi Visual">D3 Desain Komunikasi Visual</option>
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="" className="fs-5">
                Prestasi
              </label>
              <br />
              <div className="form-check-inline">
                <input type="checkbox" className="form-check-input" name="chkAkademi" id="chkAkademi" checked={presAk} onChange={(e) => setPresAk(e.target.checked)} />
                <label htmlFor="chkAkademi" className="form-check-label">
                  Prestasi Akademi
                </label>
              </div>
            </div>
          </div>

          <div className="col-7">
            <h3>Resume</h3>
            <hr />
            <div>
              <h5 className="mb-2">Nama : {nama}</h5>
            </div>
            <div>
              <h5 className="mb-2">Alamat : {alamat}</h5>
            </div>
            <div>
              <h5 className="mb-2">Gender :{gender}</h5>
            </div>
            <div>
              <h5 className="mb-2">Prog.pil :{progPil}</h5>
            </div>
            <div>
              <h5>Prestasi Akademik : {presAk ? "Ada" : "-"}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventState;
