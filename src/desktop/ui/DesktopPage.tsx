import { useWindowStore } from "../../entities/window/model/store";
import { TaskBar } from "../../widgets/taskbar/ui/Taskbar";
import { TopBar } from "../../widgets/top-bar/ui/TopBar";

const contenedorGeneral = "flex justify-center items-center h-full w-full";
const capaBorde1 =
  "flex justify-center outline-[#000000] outline-200 items-center h-full w-[98%] rounded-[2%] shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.5)] overflow-hidden";
const capaBorde2 =
  "flex justify-center outline-[#000000] outline-200 items-center h-[98%] w-[96%] rounded-[2%] shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.8)] absolute opacity-20 pointer-events-none";
const capaBorde3 =
  "flex justify-center outline-[#000000] outline-200 items-center h-[97%] w-[95%] rounded-[2%] shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.7)] absolute opacity-10 pointer-events-none";
const brilloAmbar = "bg-amber-50 h-full w-full absolute opacity-20";
const pantalla = "bg-blue-300 w-full h-full relative";

export function DesktopPage() {
  const windows = useWindowStore((state) => state.windows);
  return (
    <div className={contenedorGeneral}>
      <div className={capaBorde1}>
        <div className={brilloAmbar}></div>
        <div className={pantalla}>
          <TopBar></TopBar>
          <TaskBar></TaskBar>
          {windows.map((window) => (
            <div
              key={window.id}
              style={{ position: "absolute", left: window.x, top: window.y, width: window.width, height: window.height }}
              className="bg-amber-200"
            ></div>
          ))}
        </div>
      </div>
      <div className={capaBorde2}></div>
      <div className={capaBorde3}></div>
    </div>
  );
}
