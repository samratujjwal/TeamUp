import React, { useEffect, useState } from "react";
import { HiFolder } from "react-icons/hi2";
import { FaFileCode } from "react-icons/fa";

const TreeNode = ({ node, onFileClick }) => {
  const [expanded, setExpanded] = useState(false);
  const isFolder = node.type === "folder" || node.type === "project";
  console.log("TeeNode.jsx node:", node);
  return (
    <div className="ml-4">
      {isFolder ? (
        <details>
          <summary className="text-blue-700">
            <HiFolder className="inline-block text-xl" />{" "}
            {node.name || node.folder_name}
          </summary>
          {node.children?.map((child) => (
            <TreeNode key={child.id} node={child} onFileClick={onFileClick} />
          ))}
        </details>
      ) : (
        <div
          className="cursor-pointer hover:text-blue-600 hover:bg-blue-50"
          onClick={() => {
            console.log("File Clicked");
            onFileClick(node);
          }}
        >
          <FaFileCode className="inline-block text-sm text-orange-700" />
          {node.name || "Untitled File"}
        </div>
      )}
    </div>
  );

  //   return (
  //     <div
  //       className="ml-6 cursor-pointer hover:underline"
  //       onClick={() => onFileClick(node)}
  //     >
  //       📄 {node.name}
  //     </div>
  //   );
};

export default TreeNode;
