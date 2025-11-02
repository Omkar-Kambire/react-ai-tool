import React from "react";

const RecentSearch = ({clearHistory,recentHistory,setSelectedHistory,setRecentHistory,setSidebarOpen}) => {

  const clearSelectedHistory = (selectedItem) => {
    let history = JSON.parse(localStorage.getItem("history"));
    history = history.filter((item) => {
      if (item != selectedItem) {
        return item;
    }
  })
  setRecentHistory(history);
  localStorage.setItem("history", JSON.stringify(history));
  }
  return (
    <>
  <div className="dark:bg-zinc-800 bg-white/80 backdrop-blur-sm pt-3 h-full overflow-auto transition-all duration-300 border-r border-slate-200 dark:border-zinc-700">
        <h1 className="dark:text-white text-slate-800 text-l flex justify-between items-center px-3 mb-3">
          <span>Recent Searches</span>
          <div className="flex gap-2">
            <button onClick={clearHistory} className="cursor-pointer hover:opacity-70 transition-opacity" title="Clear all history">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
                className="dark:text-zinc-300 text-slate-600"
              >
                <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
              </svg>
            </button>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="cursor-pointer dark:hover:bg-zinc-700 hover:bg-slate-100 rounded p-1 transition-colors"
              title="Collapse sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
                className="dark:text-zinc-300 text-slate-600"
              >
                <path d="M120-240v-480h720v480H120Zm72-72h576v-336H192v336Zm0 0v-336 336Zm384-48 51-51-81-81 81-81-51-51-132 132 132 132Z"/>
              </svg>
            </button>
          </div>
        </h1>

        <ul className="text-left text-sm space-y-1 p-2">
          {recentHistory &&
            recentHistory.map((item, index) => (
              <div className="flex justify-between items-center pr-3 py-1" key={index}>
                <li
                  onClick={() => setSelectedHistory(item)}
                  className="w-full p-2 pl-2 truncate dark:text-zinc-400 text-slate-700 dark:hover:bg-zinc-700 hover:bg-slate-100 dark:hover:text-zinc-200 hover:text-slate-900 cursor-pointer rounded transition-colors"
                >
                  {item}
                </li>
                <button onClick={() => clearSelectedHistory(item)} className="ml-2 px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-800 text-slate-700 dark:text-white transition-colors">
                  ✕
                </button>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

export default RecentSearch;
