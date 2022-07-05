const Card = (props) => {
  return (
    <div style={{ border: "solid", padding: "20px", marginTop: "20px" }}>
      <h3>Kartu Anggota</h3>
      <div>
        <label htmlFor="nama">Nama: </label>
        <p>{props.nama}</p>
      </div>
      <div>
        <label htmlFor="alamat">Alamat: </label>
        <p>{props.alamat}</p>
      </div>
    </div>
  );
};
export default Card;
