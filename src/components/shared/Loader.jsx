import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "1000px",paddingTop:"20px"
      }}
    >
      <TailSpin height="100" width="100" color="blue" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
