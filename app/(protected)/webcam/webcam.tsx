"use client"
import { Button } from '@/components/ui/button';
import { Settings, Settings2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import axios from 'axios';

interface EmotionData {
  angry: number;
  disgust: number;
  fear: number;
  happy: number;
  neutral: number;
  sad: number;
  surprise: number;
}

interface Face {
  dominant_emotion: string;
  emotion: EmotionData;
  region: {
    h: number;
    w: number;
    x: number;
    y: number;
  };
}

interface ApiResponse {
  status: string;
  faces: Face[];
}

export default function WebcamPage() {
    const [image, setImage] = useState<string | null>(null);

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    const webcamRef = React.useRef<Webcam>(null);
    const [responseData, setResponseData] = useState<ApiResponse | null>(null);

    const sendImage = async () => {
      if (!image) {
        alert('No image captured!');
        return;
      }
  
      const response = await fetch(image);
      const blob = await response.blob();
  
      const formData = new FormData();
      formData.append('photo', blob, 'photo.jpg');
      formData.append('collections', '');
  
      const url = 'https://api.luxand.cloud/photo/emotions';
      const headers = {
        'token': process.env.NEXT_PUBLIC_FACE_TOKEN || '',
      };
  
      try {
        const response = await axios.post(url, formData, {
          headers: {
            ...headers,
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
        setResponseData(response.data);
      } catch (error) {
        console.error('Error uploading photo:', error);
      }
    };
  
    
  
      
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
            {responseData && (
          <div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Face Details</h3>
              {responseData.faces.map((face, index) => (
                <div key={index} className="p-4 mb-4 border border-gray-300 rounded-md bg-white shadow-sm">
                  <p className="text-lg font-medium mb-2"><strong>Dominant Emotion:</strong> {face.dominant_emotion}</p>
                  <p className="text-md font-medium mb-1"><strong>Emotion Breakdown:</strong></p>
                  <ul className="list-disc list-inside pl-4 mb-2">
                    {Object.entries(face.emotion).map(([emotion, value]) => (
                      <li key={emotion} className="text-sm"><strong>{emotion}:</strong> {value.toFixed(2)}</li>
                    ))}
                  </ul>
                  <p className="text-md font-medium"><strong>Region:</strong> X: {face.region.x}, Y: {face.region.y}, Width: {face.region.w}, Height: {face.region.h}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
          <Button
            className='bg-[#2338a2] text-primary ml-2'
            onClick={() => {
              sendImage()
            }}
          >
            Emotion for Todei
          </Button>
        </div>
      </div>
    </div>
  )
}