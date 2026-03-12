import { useState } from "react";

function TextUpdaterNode() {
  const [text, setText] = useState("");

  return (
    <div className="max-w-[150px] min-h-[80px] border-2 border-gray-800 rounded-md p-3 bg-white flex items-center justify-center">
      
      <div
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => setText(e.currentTarget.textContent)}
        className="w-full text-center outline-none bg-transparent break-words text-sm">
        {text || "Click and type"}
      </div>
    </div>
  );
}

export default TextUpdaterNode;