"use client";
import React, { useEffect, useRef, useState, use } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/FileList";
import Canvas from "../_components/Canvas";
import Editor from "../_components/EditorWrapper";
import { Id } from "@/convex/_generated/dataModel";

function Workspace({ params }: { params: Promise<{ fileId: string }> }) {
  const { fileId } = use(params); // ✅ unwrap params
  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE | null>(null);

  const convex = useConvex();

  const [editorWidth, setEditorWidth] = useState(50); // percentage
  const isDragging = useRef(false);

  useEffect(() => {
    fileId && getFileData();
  }, [fileId]);

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: fileId as Id<"files">, // ✅ Type cast here
    });
    setFileData(result);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const newEditorWidth = (e.clientX / window.innerWidth) * 100;
    if (newEditorWidth > 20 && newEditorWidth < 80) {
      setEditorWidth(newEditorWidth);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      <div className="h-[calc(100vh-56px)] bg-gray-100 flex w-full overflow-hidden relative">
        {/* Editor Section */}
        <div
          className="h-full overflow-y-auto border-r scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          style={{ width: `${editorWidth}%` }}
        >
          {fileData && (
            <Editor
              onSaveTrigger={triggerSave}
              fileId={fileId}
              fileData={fileData}
            />
          )}
        </div>

        {/* Resizable Divider */}
        <div
          className="w-1 bg-gray-300 cursor-col-resize hover:bg-gray-400 transition"
          onMouseDown={handleMouseDown}
        ></div>

        {/* Canvas Section */}
        <div className="h-full overflow-hidden flex-1">
          {fileData && (
            <Canvas
              onSaveTrigger={triggerSave}
              fileId={fileId}
              fileData={fileData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Workspace;
