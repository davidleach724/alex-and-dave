import './App.css';
import profilepic from './profilepic.jpeg';

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${profilepic})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain', // Ensures the full image is visible in each tile
    backgroundPosition: 'top left',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  };

  return (
    <main style={backgroundStyle}>
      <a href='https://frnkastro.bandcamp.com'></a>
    </main>
  );
};

export default App;
