import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const panelIconToogleHandle = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="mb-5">
        <div
          onClick={panelIconToogleHandle}
          className={`cursor-pointer flex justify-between p-5 border ${
            !expanded ? "bg-amber-300 rounded-t-lg  border-amber-500" : "border-sky-500 bg-sky-300 rounded-t-lg"
          }`}
        >
          <span className="flex gap-5 text-amber-950">
            {header}
          </span>
          <div
            onClick={panelIconToogleHandle}
            className="flex items-center text-amber-950"
          >
            {expanded ? (
              <AiFillCaretDown className="w-5 h-5 cursor-pointer hover:scale-150" />
            ) : (
              <AiFillCaretLeft className="w-5 h-5 cursor-pointer hover:scale-150" />
            )}
          </div>
        </div>
        {expanded && (
          <div className="bg-amber-100 px-5 py-2 rounded-b-lg border-x border-b border-amber-500">{children}</div>
        )}
      </div>
    </>
  );
};
export default ExpandablePanel;
