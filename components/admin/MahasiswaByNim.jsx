import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const MahasiswaByNim = () => {
  const [nim, setNim] = useState("");
  const router = useRouter();
  const getMhsByNim = (e) => {
    e.preventDefault();
    router.push({
      pathname: "datamahasiswa",
      query: { nim: nim },
    });
  };
  return (
    <div className="container">
      <form onSubmit={getMhsByNim}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col d-flex flex-reverse">
            <input type="text" className="form-control" 
                    placeholder="Cari By NIM" value={nim} 
                    onChange={(e) => setNim(e.target.value)}/>
            
            <input type="submit" value="Cari" className="btn btn-success ms-2 fs-6"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MahasiswaByNim;
