import React, { useEffect, useState } from "react";
import TreeNode from "./TreeNode";
import { FaFolder } from "react-icons/fa";

const ProjectExplorer = ({ projectId, onFileOpen }) => {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    const fetchTree = async () => {
      const res = await fetch(
        `http://localhost:9090/workspace/Projects/${projectId}/tree`
      );
      const data = await res.json();
      setTree(data.project);
    };
    fetchTree();
  }, [projectId]);

  console.log("ProjectExplorer tree:", tree);
  console.log("ProjectExplorer projectId:", projectId);
  return (
    <div className="h-full text-black font-bold overflow-y-auto hover:bg-gray-50">
      <span className="text-gray-600">Files</span>
      <div className="mt-2">
        {tree?.children?.map((child) => (
          <TreeNode key={child.id} node={child} onFileClick={onFileOpen} />
        ))}
      </div>
    </div>
  );
};

export default ProjectExplorer;
