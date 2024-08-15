"use client"
import { Button } from '@/components/ui/button';
import { Settings, Settings2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import Webcam from 'react-webcam'

export default function WebcamPage() {
    const [image, setImage] = useState<string | null>(null);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    const webcamRef = React.useRef<Webcam>(null);
      
  return (
    <div className='flex flex-col w-full h-screen text-[#B7C0EE]'>
      <div className="h-16 bg-black flex flex-row justify-between p-4 items-center">
<img src={"/timekeeperLogo.png"} className=''/>
<Link href={"/setting"} className='text-[#B7C0EE]'><Settings/></Link>
      </div>
      <div className="flex-grow relative">
        <Webcam
          audio={false}
          className='absolute inset-0 w-full h-full object-cover'
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          ref={webcamRef}
        />
        {image && (
          <div className="absolute top-0 right-0 w-1/3 h-full overflow-auto p-4 bg-white bg-opacity-75">
            <img src={image} alt="Captured" className="w-full h-auto" />
          </div>
        )}
      </div>
      <div className="h-16 bg-black flex items-center justify-between px-4">
        <div className='flex-1'></div>  
        <div className='flex flex-row items-center justify-center gap-8'>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold'>3</p>
            <p className='text-sm'>People</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold'>5</p>
            <p className='text-sm'>Meetings Today</p>
          </div>
        </div>
        <div className='flex-1 flex justify-end'>
          <Button
            className='bg-[#B7C0EE] text-primary'
            onClick={() => {
              const imageSrc = webcamRef.current?.getScreenshot();
              setImage(imageSrc || null)
            }}
          >
            Capture photo
          </Button>
        </div>
      </div>
    </div>
  )
}