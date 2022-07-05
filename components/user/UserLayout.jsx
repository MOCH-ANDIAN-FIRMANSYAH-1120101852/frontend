import { Children } from "react";
import Nav from "./Nav";
import Script from "next/dist/client/script";

const UserLayout = () => {
  return (
    <>
      <Nav />
      {Children}
      <div>
        <div className="footer fixed-bottom bg-dark">
          <h3 className="text-light">Footer</h3>
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    </>
  );
};

export default UserLayout;
