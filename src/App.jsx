import { useEffect } from "react";
import "./App.css";

function App() {
  // Función para detectar si está en iOS + Instagram
  const isInstagramBrowseriOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /instagram/i.test(userAgent) && /iphone|ipad/i.test(userAgent);
  };

  // Efecto para manejar la lógica de descarga
  useEffect(() => {
    if (!isInstagramBrowseriOS()) {
      // Redirige a la descarga automática si NO es iOS/Instagram
      window.location.href =
        "https://drive.google.com/uc?export=download&id=1R6Y45wZzDrjl8A_hvgblHt0btZ1JEh1G";
    }
  }, []);

  return (
    <div className="container">
      {/* Mensaje para iOS/Instagram */}
      {isInstagramBrowseriOS() ? (
        <div className="ios-instructions">
          <h2>Abre en Safari para descargar</h2>
          <p>Sigue estos pasos:</p>
            <ol>
              <li>Toca los 3 puntos (...) arriba a la derecha</li>
              <li>Selecciona "Abrir en Safari"</li>
              <li>Vuelve a tocar el botón de descarga</li>
            </ol>
          <a
            href="https://drive.google.com/uc?export=download&id=1R6Y45wZzDrjl8A_hvgblHt0btZ1JEh1G"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar archivo
          </a>
        </div>
      ) : (
        /* Mensaje para otros dispositivos */
        <div className="normal-download">
          <p>Si la descarga no comienza automáticamente,{" "}
            <a
              href="https://drive.google.com/uc?export=download&id=1R6Y45wZzDrjl8A_hvgblHt0btZ1JEh1G"
              target="_blank"
              rel="noopener noreferrer"
            >
              haz clic aquí
            </a>.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;