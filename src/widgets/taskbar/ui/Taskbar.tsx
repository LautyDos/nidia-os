export function TaskBar() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-8 bg-[#c0c0c0] border-t-2 border-t-white border-r-0 flex items-center px-1 gap-1">
      <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-[#404040] border-r-[#404040] px-3 py-0.5 text-xs font-bold flex items-center gap-1 ml-10">
        ⊞ Start
      </button>
      <div className="w-px h-5 bg-[#808080] mx-1"></div>
      <div className="ml-auto flex items-center gap-2 px-2 border-t border-l border-[#808080] text-xs mr-10">🔊 12:00</div>
    </div>
  );
}
