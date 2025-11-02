import React, { useEffect, useRef, useState } from "react";
import { URL } from "./constants";
import Answers from "./components/Answers";
import RecentSearch from "./components/RecentSearch";
import QuestionAnswer from "./components/QuestionAnswer";

const App = () => {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);
  const [recentHistory, setRecentHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  const [selectedHistory, setSelectedHistory] = useState("");
  const scrollToAns = useRef();
  const [loader, setLoader] = useState(false);
  // sidebar open/collapsed state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const askQuestion = async () => {
    if (!question && !selectedHistory) {
      return false;
    }

    // Check if API key is available
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      console.error("API key not found. Please set VITE_GEMINI_API_KEY in your environment variables.");
      return;
    }

    if (question) {
      if (localStorage.getItem("history")) {
        let history = JSON.parse(localStorage.getItem("history"));
        history = history.slice(0,19);
        history = [question, ...history];
        history = history.map((item) => item.charAt(0).toUpperCase() + item.slice(1).trim());
        history = [...new Set(history)];

        localStorage.setItem("history", JSON.stringify(history));
        setRecentHistory(history);
      } else {
        localStorage.setItem("history", JSON.stringify([question]));
        setRecentHistory([question]);
      }
    }

    const payloadData = question ? question : selectedHistory;

    const payload = {
      contents: [
        {
          parts: [
            {
              text: payloadData,
            },
          ],
        },
      ],
    };

    setLoader(true);

    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      response = await response.json();
      
      let dataString = response.candidates[0].content.parts[0].text;
      dataString = dataString.split("* ");
      dataString = dataString.map((item) => item.trim());
      
      setResult([
        ...result,
        { type: "q", text: question ? question : selectedHistory },
        { type: "a", text: dataString },
      ]);
      setQuestion("");

      setTimeout(() => {
        scrollToAns.current.scrollTop = scrollToAns.current.scrollHeight;
      }, 500);
    } catch (error) {
      console.error("Error calling API:", error);
      // Handle error - maybe show a message to user
    } finally {
      setLoader(false);
    }
  };

  const clearHistory = () => {
    localStorage.removeItem("history");
    setRecentHistory([]);
  };

  const isEnter = (e) => {
    if (e.key === "Enter") {
      askQuestion();
    }
  };

  useEffect(() => {
    askQuestion();
  }, [selectedHistory]);

  // Dark mode code
  const [darkMode, setDarkMode] = useState('dark');
  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode == 'dark' ? 'dark bg-zinc-900 min-h-screen' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-800 min-h-screen'}>
      <div className="grid grid-cols-5 h-screen text-center">
        {/* Theme selector - moved to top-right to avoid bottom overlap on mobile */}
        <select
          value={darkMode}
          onChange={(e) => setDarkMode(e.target.value)}
          className="fixed right-3 top-3 z-50 dark:text-white text-slate-700 dark:bg-zinc-800 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-md border border-slate-200 dark:border-zinc-700"
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>

        {/* Sidebar toggle button (hamburger) - visible when sidebar is closed */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed left-3 top-3 z-50 bg-zinc-800 text-white p-2 rounded shadow-lg"
            aria-label="Open sidebar"
          >
            ☰
          </button>
        )}

        {/* Backdrop for small-screen sidebar (click to close) */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

        {/* Sidebar: fixed overlay on small screens, normal column on md+ */}
        <div
          className={`${sidebarOpen ? 'fixed left-0 top-0 bottom-0 w-64 z-40 transform translate-x-0 md:relative md:col-span-1' : 'fixed left-0 top-0 bottom-0 w-64 z-40 transform -translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
          <RecentSearch
            clearHistory={clearHistory}
            recentHistory={recentHistory}
            setSelectedHistory={setSelectedHistory}
            setRecentHistory={setRecentHistory}
            setSidebarOpen={setSidebarOpen}
          />
        </div>

        {/* Right side */}
  <div className={`${sidebarOpen ? 'col-span-5 md:col-span-4' : 'col-span-5'} p-10 flex flex-col h-full min-h-0`}>
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-violet-700 mb-4 font-semibold">
          AI Chat Bot
        </h1>

        {loader && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {/* Answers scroll area */}
        <div ref={scrollToAns} className="flex-1 overflow-y-auto mb-4 min-h-0">
          <div className="dark:text-zinc-300 text-slate-700">
            <ul>
              {result.map((item, index) => (
                <QuestionAnswer key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Input at bottom */}
        <div className="dark:text-white dark:bg-zinc-800 bg-white/90 backdrop-blur-sm text-slate-800 w-full md:w-1/2 m-auto p-2 rounded-4xl border border-slate-200 dark:border-zinc-700 flex items-center h-14 relative shadow-lg">
          <input
            onKeyDown={isEnter}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full min-w-0 h-full p-2 pr-20 outline-none bg-transparent placeholder:text-slate-400 dark:placeholder:text-zinc-500"
          />
          <button
            onClick={askQuestion}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-green-600 to-violet-600 hover:from-green-500 hover:to-violet-500"
            aria-label="Ask"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
