import React, { useState } from "react";

export default function ChatInput() {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    alert("Message sent: " + text);
    setText("");
  };

  const isReady = text.trim().length > 0;

  return (
    <div>
      <div className="bg-white border border-[#EBEDEF] rounded-lg shadow p-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask questions..."
          className="w-full p-3 rounded focus:outline-none"
        />

        <div className="flex flex-wrap items-center justify-between mt-3 gap-3 max-[450px]:flex-col max-[450px]:items-start">
          <div className="flex items-center gap-3 text-gray-500 max-[450px]:w-full">
            <img
              src="/upload.svg"
              alt="Attach"
              className="w-5 h-5 cursor-pointer"
            />
            <button className="text-md px-2.5 py-2.5 rounded-md border border-indigo-600 text-[#768EFF] cursor-pointer bg-[#E9ECFF] flex items-center gap-2">
              <img src="/copy.svg" alt="Copy" className="w-4.5 h-4.5" />
            </button>
          </div>

          <div className="flex items-center gap-3 max-[450px]:flex-col max-[450px]:w-full max-[450px]:items-stretch">
            <select className="border border-[#EBEDEF] rounded p-2 text-sm cursor-pointer w-full max-[450px]:w-full">
              <option>GPT-4o (Latest)</option>
            </select>

            <div className="w-px h-9 bg-[#EBEDEF] max-[450px]:hidden" />

            <button
              onClick={send}
              disabled={!isReady}
              className={`py-2 px-3 rounded font-semibold transition-colors duration-200 flex items-center justify-center ${
                isReady
                  ? "bg-[#375ffdff] text-white cursor-pointer"
                  : "bg-[#768EFF] text-gray-200 cursor-not-allowed"
              } max-[450px]:w-full`}
            >
              <img src="/send.svg" alt="Send" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-2">
        This is not investment advice; please do your own research or consult a
        financial advisor.
      </p>
    </div>
  );
}
