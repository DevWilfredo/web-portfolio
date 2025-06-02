import background from './assets/DEGRADADO-VERTICAL.jpg';
import logo from './assets/logo_wdev.png';

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white text-center px-4"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <img src={logo} alt="Logo" className="w-60 mb-8 drop-shadow-lg" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Sitio en Construcción
      </h1>
      <p className="text-lg md:text-xl max-w-md">
        Estamos trabajando en algo increíble. ¡Vuelve pronto para ver lo nuevo!
      </p>
    </div>
  );
}

export default App;
