import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { useState, useCallback } from "react";
import MonacoEditor from "@monaco-editor/react";
import { useParams } from "react-router-dom";
import ProjectExplorer from "./ProjectExplorer";
import debounce from "lodash.debounce";

const LiveCodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const { project_id } = useParams();
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [openedFile, setOpenedFile] = useState({});
  const [loading, setLoading] = useState(false);

  console.log("Live Editor projectId from params:", project_id);
  const handleFileOpen = async (fileNode) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:9090/workspace/${fileNode.id}/getfile`
      );
      const fileData = await res.json();
      setOpenedFile(fileData.file);
      setCode(fileData.file.content); // sync editor content
    } catch (err) {
      console.error("Failed to load file:", err);
    } finally {
      setLoading(false);
    }
  };

  const saveFileToDB = async (fileId, content) => {
    try {
      await fetch(`http://localhost:9090/workspace/${fileId}/updatefile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      console.log("✅ Auto-saved to DB");
    } catch (err) {
      console.error("❌ Auto-save failed:", err);
    }
  };

  const debouncedSave = useCallback(
    debounce((fileId, content) => {
      saveFileToDB(fileId, content);
    }, 3000),
    []
  );
  console.log("File content:", openedFile.content);
  console.log("File code:", code);
  const handleEditorChange = (value) => {
    setCode(value);
    if (openedFile?._id) {
      debouncedSave(openedFile._id, value);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-900 text-white relative">
      <PanelGroup direction="horizontal">
        {/* Left Panel */}
        {leftOpen && (
          <Panel
            defaultSize={10}
            minSize={5}
            maxSize={15}
            className="bg-white p-2 bg-gradient-to-br from-blue-100  to-blue-20"
          >
            <ProjectExplorer
              projectId={project_id}
              onFileOpen={handleFileOpen}
            />
          </Panel>
        )}
        {!leftOpen && (
          <button
            onClick={() => setLeftOpen(true)}
            className="absolute left-0 top-1/2 z-10 bg-gray-700 px-2 py-1 rounded-r"
          >
            ➕
          </button>
        )}
        {leftOpen && (
          <PanelResizeHandle className="w-1 bg-gray-700 cursor-col-resize" />
        )}

        {/* Center Panel */}
        <Panel minSize={50} maxSize={80} className="bg-gray-900 p-2">
          <div className="h-full">
            {loading ? (
              <div className="text-gray-400">Loading file...</div>
            ) : openedFile ? (
              <MonacoEditor
                height="100vh"
                language={language}
                value={openedFile.content}
                onChange={handleEditorChange}
                theme="vs-dark"
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  suggestOnTriggerCharacters: true,
                  quickSuggestions: true,
                  wordBasedSuggestions: false,
                }}
              />
            ) : (
              <div className="text-gray-400">
                Select a file to begin editing
              </div>
            )}
          </div>
        </Panel>

        {rightOpen && (
          <PanelResizeHandle className="w-1 bg-gray-700 cursor-col-resize" />
        )}
        {/* Right Panel */}
        {rightOpen && (
          <Panel
            defaultSize={20}
            minSize={10}
            maxSize={25}
            className="bg-white p-2 bg-gradient-to-br from-blue-100  to-blue-20"
          >
            <div className="h-full text-black font-bold">
              💬 Messaging Panel
            </div>
          </Panel>
        )}
        {!rightOpen && (
          <button
            onClick={() => setRightOpen(true)}
            className="absolute right-0 top-1/2 z-10 bg-gray-700 px-2 py-1 rounded-l"
          >
            ➕
          </button>
        )}
      </PanelGroup>
    </div>
  );
};

export default LiveCodeEditor;
