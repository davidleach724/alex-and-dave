import "./App.css";
import profilepic from "./profilepic.jpeg";

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${profilepic})`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundPosition: "top left",
    width: "100vw",
    height: "100vh",
    position: "absolute",
  };

  return <main style={backgroundStyle} />;
};

export default App;
