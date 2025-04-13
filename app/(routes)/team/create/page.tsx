"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

function CreateTeam() {
  const [teamName, setTeamName] = useState('');
  const createTeam = useMutation(api.teams.createTeam);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((resp) => {
      console.log(resp);
      if (resp) {
        router.push('/dashboard');
        toast('Team created successfully!!!');
      }
    });
  };

  return (
    <div className="px-6 bg-gray-100 md:px-16 m:0 h-screen pt-16 flex flex-col items-center">
      <Image
        src="/logo-black.png"
        alt="logo"
        width={40}
        height={40}
        className="mb-6"
      />
      <div className="flex flex-col items-center mt-8 bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="font-bold text-[32px] py-3 text-gray-800 text-center">
          What should we call your team?
        </h2>
        <p className="text-gray-600 text-center">
          You can always change this later from settings.
        </p>
        <div className="mt-7 w-full">
          <label className="text-gray-600 block mb-2">Team Name</label>
          <Input
            placeholder="Enter your team name"
            className="mt-3 text-gray-800 bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3 w-full"
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button
          className="bg-blue-500 mt-9 w-full py-3 rounded-lg text-white font-medium hover:bg-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!(teamName && teamName?.length > 0)}
          onClick={() => createNewTeam()}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;