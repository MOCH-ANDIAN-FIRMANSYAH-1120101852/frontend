import UserLayout from "../../components/user/UserLayout";
import Nav from "../../components/user/Nav";
import { useRouter } from "next/router";
import Form from "../../components/Form";

export default function Mahasiswa() {
  const router = useRouter();
  const { id, nama } = router.query;

  return (
    <UserLayout>
      <div className="container">
        <h3>Halaman Mahasiswa</h3>
        <p>Selamat datang</p>
        <p>id :{id} </p>
        <p>nama : {nama}</p>
        <Nav />
        <Form />
      </div>
    </UserLayout>
  );
}
