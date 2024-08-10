"use client"
import { Button } from '@/components/ui/button';
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
    <div>
      {/* <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        ref={webcamRef}
      /> */}
      <Button
        onClick={() => {
          const imageSrc = webcamRef.current?.getScreenshot();
        setImage(imageSrc || null)
        }}
      >
        Capture photo
      </Button>
      
      {image && <img src={image} alt="Captured" />}
    </div>
  )
}