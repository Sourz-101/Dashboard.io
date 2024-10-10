import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Alert = () => {

  const alertMessage = [
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "Motor Temperature 200° C",
      statusColor : "red2"
    },
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "Order no #153732 expected to be delayed by 5 hours",
      statusColor : "red2"
    },
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "Motor RPM more than 3560",
      statusColor : "yellow2"
    },
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "The machine was turned on at 10:05 AM",
      statusColor : "green2"
    },
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "Order no #14523 will be completed 2 hours before expected time",
      statusColor : "green2"
    },
    //////////////////////////////////////////////////////////
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "Motor Temperature 200° C",
      statusColor : "red2"
    },
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "Order no #153732 expected to be delayed by 5 hours",
      statusColor : "red2"
    },
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "Motor RPM more than 3560",
      statusColor : "yellow2"
    },
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "The machine was turned on at 10:05 AM",
      statusColor : "green2"
    },
    {
      date: new Date(Date.now()).toLocaleString(),
      message: "Order no #14523 will be completed 2 hours before expected time",
      statusColor : "green2"
    },
  ]

  const colorScheme = {
    red2: "bg-red1",
    yellow2: "bg-yellow1",
    green2: "bg-green1"
  }

  return (
    <div className="rounded-xl w-full me-4 py-4 ps-4 h-[88.5vh] flex flex-col shrink">
      {/* Heading - Alert */}
      <h1 className="text-4xl text-primary10 font-bold mb-4">Alert</h1>
      <div className="mb-6 bg-gray3 h-[2px]"/>

      {/* Alert List */}
      <div className="overflow-y-auto pt-2 pb-4 px-4">
      {
        alertMessage.map((item, index) => (
          <div key={index} className={`flex items-center justify-between rounded-xl p-4 mb-4 hover:shadow-xl border border-l-[6px] border-${item.statusColor} ${colorScheme[item.statusColor]}`}>
            <div className="flex flex-col">
              <p className="text-gray8 text-xs font-bold">{item.date}</p>
              <p className="text-gray8 text-lg">{item.message}</p>
            </div>
            <button className={`bg-${item.statusColor} text-white rounded-md p-2 flex items-center  whitespace-nowrap`}>
              <span className="mr-2">Take Action</span> 
              <MdOutlineKeyboardArrowRight size={25}/>
            </button>
          </div>
        ))
      }
      
      </div>
    </div>
    
  )
}

export default Alert;

/*
    <div class="overflow-y-auto pt-2 pb-4"><div class="flex items-center justify-between bg-[#ffeded] rounded-r-xl p-4 mb-4 border border-red2 border-l-[6px] border-red2"><div class="flex flex-col"><p class="text-gray6 text-xs font-bold">6/10/2024, 3:36:31 PM</p><p class="text-gray6 text-lg">Motor Temperature 200° C</p></div><button class="bg-red2 text-white rounded-md px-4 py-1 inline-flex whitespace-nowrap">Take Action <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-108000j-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosIcon"><path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg></button></div><div class="flex items-center justify-between bg-[#ffeded] rounded-r-xl p-4 mb-4 border border-red2 border-l-[6px] border-red2"><div class="flex flex-col"><p class="text-gray6 text-xs font-bold">6/10/2024, 3:36:31 PM</p><p class="text-gray6 text-lg">Order no #153732 expected to be delayed by 5 hours</p></div><button class="bg-red2 text-white rounded-md px-4 py-1 inline-flex whitespace-nowrap">Take Action <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-108000j-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosIcon"><path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg></button></div><div class="flex items-center justify-between bg-[#fff8ed] rounded-r-xl p-4 mb-4 border border-yellow2 border-l-[6px] border-yellow2"><div class="flex flex-col"><p class="text-gray6 text-xs font-bold">6/10/2024, 3:36:31 PM</p><p class="text-gray6 text-lg">Motor RPM more than 3560</p></div><button class="bg-yellow2 text-white rounded-md px-4 py-1 inline-flex whitespace-nowrap">Take Action <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-108000j-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosIcon"><path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg></button></div><div class="flex items-center justify-between bg-[#e7fff9] rounded-r-xl p-4 mb-4 border border-green2 border-l-[6px] border-green2"><div class="flex flex-col"><p class="text-gray6 text-xs font-bold">6/10/2024, 3:36:31 PM</p><p class="text-gray6 text-lg">The machine was turned on at 10:05 AM</p></div><button class="bg-green2 text-white rounded-md px-4 py-1 inline-flex whitespace-nowrap">Take Action <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-108000j-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosIcon"><path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg></button></div><div class="flex items-center justify-between bg-[#e7fff9] rounded-r-xl p-4 mb-4 border border-green2 border-l-[6px] border-green2"><div class="flex flex-col"><p class="text-gray6 text-xs font-bold">6/10/2024, 3:36:31 PM</p><p class="text-gray6 text-lg">Order no #14523 will be completed 2 hours before expected time</p></div><button class="bg-green2 text-white rounded-md px-4 py-1 inline-flex whitespace-nowrap">Take Action <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-108000j-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosIcon"><path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg></button></div></div>

*/