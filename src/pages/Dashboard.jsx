import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { FaSortDown } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import Graph from "../components/Graph.jsx";

const Dashboard = () => {
  return (
    <div className="rounded-xl w-full me-4 py-4 ps-4 flex flex-col shrink md:h-[88.5vh] md:ps-2">
      <h1 className="text-4xl mb-7 text-primary10 font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 shrink-0">
        <div className="h-32 rounded-2xl p-4 border-2 shadow-lg flex">
          <div className="w-full overflow-hidden">
            <h1 className="text-gray7 text-lg whitespace-nowrap font-hind font-semibold">
              Motor Status
            </h1>
            <p className="text-green3 font-semibold text-4xl flex-1 mt-3">ON</p>
          </div>

          <div className="flex justify-center items-center -z-10">
            <div className="h-16 w-16 rounded-full bg-green2 border-[3px] border-green3"></div>
          </div>
        </div>

        <div className="h-32 rounded-2xl p-4 border-2 shadow-lg flex">
          <div className="w-full">
            <h1 className="text-gray7 text-lg whitespace-nowrap font-hind font-semibold">
              Current Level
            </h1>
            <div className="flex-col text-white text-lg justify-startf">
              <p className="text-red-600 font-semibold flex flex-nowrap">
                <FaSortDown /> 30%
              </p>
              <p className="text-gray7">vs last week</p>
            </div>
          </div>

          <div className="flex items-center justify-center overflow-hidden">
            <Gauge
              sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 35,
                },
              })}
              cornerRadius="50%"
              width={160}
              height={160}
              value={75}
              startAngle={-115}
              endAngle={115}
            />
          </div>
        </div>

        <div className="h-32 rounded-2xl p-4 border-2 shadow-lg flex-col">
          <h1 className="text-gray7 text-lg whitespace-nowrap font-hind font-semibold">
            Last Water Filled
          </h1>

          <div className="flex justify-end items-center h-12">
            <div className="">
              <p className="text-gray8 text-xl flex items-center justify-start font-bold font-montserrat">
                <CiCalendarDate className="mr-2" />
                09/02/11
              </p>
              <p className="text-gray8 text-xl flex items-center justify-start font-bold font-montserrat whitespace-nowrap">
                <CiClock2 className="mr-2" />
                05:46 AM
              </p>
            </div>
          </div>
        </div>

        <div className="h-32 rounded-2xl p-4 border-2 shadow-lg flex-col">
          <h1 className="text-gray7 text-lg whitespace-nowrap font-hind font-semibold">
            Last Updated
          </h1>

          <div className="flex justify-end items-center h-12">
            <div className="">
              <p className="text-gray8 text-xl flex items-center justify-start font-bold font-montserrat">
                <CiCalendarDate className="mr-2" />
                09/02/11
              </p>
              <p className="text-gray8 text-xl flex items-center justify-start font-bold font-montserrat whitespace-nowrap">
                <CiClock2 className="mr-2" />
                12:31 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl min-h-96 p-4 mt-4 border-2 shadow-lg overflow-hidden">
          <Graph />
      </div>
    </div>
  );
};

export default Dashboard;
