import SideBars from "./SideBar";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <SideBars>{children}</SideBars>
    </>
  );
};

export default LayoutAdmin;
