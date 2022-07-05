import { useState } from "react"; // syntax onchange yaitu melakukan perubahan pada event dimana targetnya adalah value atau isi yang di isikan dan dimasukkma ke dalam stategambar

const Form = () => {
  const [gambar, setGambar] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const simpan = () => {
    setGambar("");
    setTitle("");
    setText("");
  };
  return (
    <div className="container border p-4 m-3">
      <h2>Input Data Card</h2>
      <label htmlFor="gambar">
        {gambar}
        <input type="text" className="form-control" placeholder="gambar" id="gambar" value={gambar} onChange={(e) => setGambar(e.target.value)}></input>
      </label>
      <label htmlFor="title">
        {title}
        <input type="text" className="form-control" placeholder="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </label>
      <label htmlFor="text">
        {text}
        <input type="text" className="form-control" placeholder="text" id="text" value={text} onChange={(e) => setText(e.target.value)}></input>
      </label>
      <div className="d-flex flex-row mt-4">
        <button
          className="btn btn-primary"
          onClick={simpan} // mengeksekusi tombol simpan dari function  simpan
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default Form;
