'use client';
import Image from "next/image"
import Link from "next/link"
import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios";
interface Calendar {
  kind: string;
  etag: string;
  id: string;
  summary: string;
  description?: string;
  timeZone: string;
  summaryOverride?: string;
  colorId: string;
  backgroundColor: string;
  foregroundColor: string;
  selected: boolean;
  accessRole: string;
  defaultReminders: Reminder[];
  notificationSettings?: NotificationSettings;
  primary?: boolean;
  conferenceProperties: ConferenceProperties;
}

interface Reminder {
  method: string;
  minutes: number;
}

interface NotificationSettings {
  notifications: Notification[];
}

interface Notification {
  type: string;
  method: string;
}

interface ConferenceProperties {
  allowedConferenceSolutionTypes: string[];
}

export function Login() {
  const ssoCalendars = 'https://digitaldev.io.vn'; 
  const ssoLoginUrl = 'https://digitaldev.io.vn'; 

  const [calendars, setCalendars] = React.useState<Calendar[]>([]);

  const handleLogin = () => {
    const popup = window.open(
      ssoLoginUrl,
      'SSOLoginPopup',
      'width=600,height=600,scrollbars=yes'
    );
  
    const handleMessage = async (event: MessageEvent) => {
      if (event.origin !== new URL(ssoLoginUrl).origin) {
        console.error('Origin mismatch');
        return;
      }
  
      if (event.data?.status === 'login_success') {
        console.log('Login successful');
        const token = event.data.token;
        if (token) {
          localStorage.setItem('authToken', token);
        }
  
        await fetchCalendars();
  
        popup?.postMessage({ action: 'close_popup' }, ssoLoginUrl);
  
      } else if (event.data?.status === 'login_error') {
        console.error('Login failed:', event.data.error);
        popup?.postMessage({ action: 'close_popup' }, ssoLoginUrl);
      }
    };
  
    window.addEventListener('message', handleMessage, false);
  
    const popupInterval = setInterval(() => {
      if (popup?.closed) {
        window.removeEventListener('message', handleMessage);
        clearInterval(popupInterval);
      }
    }, 1000);
  };
  
  
  // const fetchCalendars = async () => {
  //   try {
  //     const response = await fetch(ssoCalendars + '/calendars', {'mode': 'no-cors', method: 'GET'});
  
  //     const calendars = await response.json();
  //     console.log(response);
  //     setCalendars(calendars);
  //     console.log('Calendars:', calendars);
  //   } catch (error) {
  //     console.error('Error fetching calendars:', error);
  //   }
  // };

  const fetchCalendars = async () => {
    try {
      const response =  await axios.get(ssoCalendars + '/calendars', { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
        },
      });
  // Access the response data
  const data = response.data;

  // Map the data to fit the Calendar model
  const calendars: Calendar[] = data.map((item: any) => ({
    kind: item.kind,
    etag: item.etag,
    id: item.id,
    summary: item.summary,
    description: item.description,
    timeZone: item.timeZone,
    summaryOverride: item.summaryOverride,
    colorId: item.colorId,
    backgroundColor: item.backgroundColor,
    foregroundColor: item.foregroundColor,
    selected: item.selected,
    accessRole: item.accessRole,
    defaultReminders: item.defaultReminders || [],
    notificationSettings: item.notificationSettings,
    primary: item.primary,
    conferenceProperties: item.conferenceProperties,
  }));

  // Update the state with the fetched calendar data
  setCalendars(calendars);
  console.log('Calendars:', calendars);
    } catch (error) {
      console.error('Error fetching calendars:', error);
    }
  };
  

  return (
    <div className="w-full h-screen flex items-center justify-center lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
    Connect Your Google Calendar
            </p>
          </div>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full gap-2 border-black" onClick={handleLogin}>
            <svg
        width="20"
        height="20"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456Z"
          fill="#4285F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
          fill="#EA4335"
        />
      </svg>
        <p className="font-bold">Continue with Google</p>
            </Button>
          </div>
          <h2 className="text-2xl font-bold mb-4">Your Calendars</h2>
          <Button variant="default" className="w-full gap-2" onClick={fetchCalendars}>Get Schedules</Button>
      {calendars.length > 0 ? (
        <ul className="space-y-2">
          {calendars.map((calendar) => (
            <li key={calendar.id} className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold">{calendar.summary}</h3>
              <p className="text-gray-600">{calendar.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No calendars found.</p>
      )}
        </div>
      </div>
      <div className="hidden rounded-xl h-full lg:block">
        <Image
          src="/landingAngled.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}