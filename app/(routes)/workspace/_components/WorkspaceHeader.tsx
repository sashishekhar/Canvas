import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function WorkspaceHeader({ onSave }: any) {
  return (
    <div className="p-4 border-b bg-white shadow-sm flex justify-between items-center">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo-black.png"
          alt="logo"
          height={25}
          width={25}
          className="rounded-md"
        />
        <h2 className="text-lg font-semibold text-gray-800">Edit your file!!</h2>
      </div>

      {/* Save Button */}
      <Button
        className="h-9 px-4 text-sm font-medium gap-2 bg-yellow-500 hover:bg-yellow-600"
        onClick={() => onSave()}
      >
        <Save className="h-4 w-4" />
        Save
      </Button>
    </div>
  );
}

export default WorkspaceHeader;
