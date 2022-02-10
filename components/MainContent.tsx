import { ChevronDownIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistState, playlistIdState }  from '../atoms/playlistAtoms';
import { shuffle } from 'lodash';
import useSpotify from '../hooks/useSpotify';


const colors = [
    "from-violet-500",
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-yellow-500",
    "from-orange-500",
    "from-red-500",
    "from-pink-500",
]

function MainContent() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);


  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [playlistId])

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId)
    .then((data) => {
      setPlaylist(data.body);
    })
    .catch((err) => console.log("Something went wrong!", err));
  }, [spotifyApi, playlistId]);

  console.log(playlist);

  return (
    <div className='flex-grow'>
       <header className='absolute top-5 right-8'>
           <div className='flex items-center bg-purple-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
               <img 
                className='rounded-full w-10 h-10' 
                src={session?.user.image}
                alt='Spotify profile picture'
               />
               <h2>{session?.user.name}</h2>
               <ChevronDownIcon className='h-5 w-5' />
           </div>
       </header>

       <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}>
            {/* <img src=''  /> */}
       </section>
    </div>
  )
}

export default MainContent;