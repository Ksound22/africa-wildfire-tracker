import spinner from "./sample.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Preloader" />
      <h2 style={{ color: "#d84343" }}>Fetching Data</h2>
    </div>
  );
};

export default Loader;
