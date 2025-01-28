import "./App.css";

function App() {
  window.onload = function () {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1R6Y45wZzDrjl8A_hvgblHt0btZ1JEh1G"; // Reemplaza con tu enlace de descarga directa
  };
  return (
    <>
      <p>Si la descarga no comienza automáticamente,{" "}
        <a href="https://drive.google.com/uc?export=download&id=1R6Y45wZzDrjl8A_hvgblHt0btZ1JEh1G">haz clic aquí</a>.</p>
    </>
  );
}

export default App;
