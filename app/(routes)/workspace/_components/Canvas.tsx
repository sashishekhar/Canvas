"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FILE } from "../../dashboard/_components/FileList";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

// Import Excalidraw CSS — THIS IS CRUCIAL!


// Dynamically import Excalidraw client-side only
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  { ssr: false }
);

function Canvas({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const [whiteBoardData, setWhiteBoardData] = useState<any>();
  const updateWhiteboard = useMutation(api.files.updateWhiteboard);

  useEffect(() => {
    if (onSaveTrigger) saveWhiteboard();
  }, [onSaveTrigger]);

  const saveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData),
    }).then((resp) => console.log(resp));
  };

  return (
    <div className="w-full h-full">
      {fileData && (
        <div className="h-full w-full">
          <Excalidraw
            theme="light"
            initialData={{
              elements:
                fileData?.whiteboard && JSON.parse(fileData?.whiteboard),
            }}
            onChange={(elements, appState, files) =>
              setWhiteBoardData(elements)
            }
            UIOptions={{
              canvasActions: {
                saveToActiveFile: false,
                loadScene: false,
                export: false,
                toggleTheme: false,
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Canvas;
