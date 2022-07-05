import DataFish from "../../components/admin/DataFish";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
// import MahasiswaByNim from "../../components/admin/MahasiswaByNim";

const datamahasiswa = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <LayoutAdmin>
      {/* <MahasiswaByNim /> */}
      <DataFish data={data} />
    </LayoutAdmin>
  );
};
export async function getServerSideProps({ query }) {
  const url = `http://localhost:5000/fish`;
  //fetch data
  const res = await fetch(url);
  const data = await res.json();

  return { props: { data } };
}

export default datamahasiswa;
