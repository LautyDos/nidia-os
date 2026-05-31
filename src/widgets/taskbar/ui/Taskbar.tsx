import { useState } from "react";
import { useWindowStore } from "../../../entities/window/model/store";

const contenedor = "absolute bottom-0 left-0 w-full h-15 bg-[#c0c0c0] border-t-2 border-t-white flex items-center px-1 gap-1";
const botonMenu =
  "bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-[#404040] border-r-[#404040] px-3 py-0.5 text-xs font-bold flex items-center gap-1 ml-10";
const separador = "w-px h-5 bg-[#808080] mx-1";
const reloj = "ml-auto flex items-center gap-2 px-2 border-t border-l border-[#808080] text-xs mr-10";

const menu =
  "absolute bottom-15 ml-5 w-120 h-150 bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-[#404040] border-r-[#404040] flex flex-col";
const menuBarra = "w-6 bg-[#000080] flex flex-col items-center justify-end pb-2";
const menuBarraTexto = "text-white text-xs font-bold tracking-widest [writing-mode:vertical-rl] rotate-180";
const menuItem = "flex items-center gap-3 px-3 py-1.5 text-xs hover:bg-[#000080] hover:text-white cursor-default";
const menuSeparador = "border-t border-[#808080] mx-2 my-1";

const items = [
  { icon: "📁", label: "Programas" },
  { icon: "📄", label: "Documentos" },
  { icon: "⚙️", label: "Configuración" },
  { icon: "🔍", label: "Buscar" },
  { icon: "❓", label: "Ayuda" },
];

export function TaskBar() {
  const [open, setOpen] = useState(false);
  const openWindow = useWindowStore((state) => state.openWindow);
  const windows = useWindowStore((state) => state.windows);

  return (
    <>
      <div className={contenedor}>
        <button onClick={() => setOpen(!open)} className={botonMenu}>
          * Menu
        </button>
        <div className={separador}></div>
        {windows.map((window) => (
          <button key={window.id}>
            {window.icon} {window.title}
          </button>
        ))}
        <div className={reloj}>🔊 12:00</div>
      </div>
      {open && (
        <div className={menu}>
          <div className="flex flex-row h-full">
            <div className={menuBarra}>
              <span className={menuBarraTexto}>NidiaOS</span>
            </div>
            <div className="flex flex-col flex-1 py-1">
              {items.map((item) => (
                <div
                  key={item.label}
                  className={menuItem}
                  onClick={() =>
                    openWindow({
                      id: "ayuda",
                      title: "Ayuda",
                      icon: "❓",
                      x: 100,
                      y: 100,
                      width: 400,
                      height: 300,
                      isMinimized: false,
                    })
                  }
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
              <div className={menuSeparador}></div>
              <div className={menuItem}>
                <span className="text-base">🔴</span>
                <span>Apagar</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
