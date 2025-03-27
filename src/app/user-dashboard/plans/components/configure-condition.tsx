"use client";

import type React from "react";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { Condition } from "@/lib/types";



export default function ConfigureConditions() {
  const [conditions, setConditions] = useState<Condition[]>([
    {
      id: "specific-date",
      title: "Enable Transfer on Specific Date",
      description:
        "Set a fixed date for the automatic transfer of your assets. The plan will execute on the selected date, regardless of activity.",
      enabled: false,
    },
    {
      id: "inactive",
      title: "Enable When Inactive",
      description:
        "Set a time period (e.g., 6 months) after which the plan will execute if no activity is detected on your account. Ideal for ensuring your assets are transferred if you become incapacitated or unable to manage your account.",
      enabled: false,
    },
    {
      id: "multi-signature",
      title: "Enable Multi-Signature Approval",
      description:
        "Require multiple signatures to execute the inheritance plan. This ensures that no single party can trigger the transfer without consensus.",
      enabled: false,
    },
  ]);

  const [date, setDate] = useState("31-01-2023");
  const [inactivityPeriod, setInactivityPeriod] = useState("2 years");
  // const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);

  const toggleCondition = (id: string) => {
    setConditions(
      conditions.map((condition) =>
        condition.id === id
          ? { ...condition, enabled: !condition.enabled }
          : condition
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      conditions,
      date,
      inactivityPeriod,
    });
    // Here you would handle the form submission
  };

  const isConditionEnabled = (id: string) => {
    return (
      conditions.find((condition) => condition.id === id)?.enabled || false
    );
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handlePeriodSelect = (period: string) => {
    setInactivityPeriod(period);
    setIsPeriodDropdownOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8 mx-6">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 flex-1">
              <h3 className="font-medium text-white">{conditions[0].title}</h3>
              <p className="text-sm text-white/70 max-w-xl">
                {conditions[0].description}
              </p>
            </div>
            <div
              className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out ${
                isConditionEnabled("specific-date")
                  ? "bg-purple-600"
                  : "bg-[#C0BFC6]"
              }`}
              onClick={() => toggleCondition("specific-date")}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  isConditionEnabled("specific-date")
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </div>
          </div>

          {isConditionEnabled("specific-date") && (
            <div className="bg-[#2B2A38] rounded-2xl p-5 space-y-1">
              <label
                htmlFor=""
                className="text-sm text-gray-300 block mb-1 ml-1"
              >
                Select Date
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={date}
                  onChange={handleDateChange}
                  placeholder="DD-MM-YYYY"
                  className=" bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl w-full pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 my-1"
                />
              </div>
              <p className="text-xs text-red-400 ml-1">
                Date in DD-MM-YYYY format (day-month-year)
                <br />
                Current date executes plan immediately
              </p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 flex-1">
              <h3 className="font-medium text-white">{conditions[1].title}</h3>
              <p className="text-sm text-white/70 max-w-xl">
                {conditions[1].description}
              </p>
            </div>
            <div
              className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out ${
                isConditionEnabled("inactive")
                  ? "bg-purple-600"
                  : "bg-[#C0BFC6]"
              }`}
              onClick={() => toggleCondition("inactive")}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  isConditionEnabled("inactive")
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </div>
          </div>

          {isConditionEnabled("inactive") && (
            <div className="bg-[#2B2A38] rounded-2xl p-5 space-y-1">
              <label
                htmlFor=""
                className="text-sm text-gray-300 block mb-1 ml-1"
              >
                Set Period of Inactivity
              </label>
              <div className="relative">
                <div
                  className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl w-full flex items-center justify-between px-3 py-2 text-sm cursor-pointer"
                  onClick={() => setIsPeriodDropdownOpen(!isPeriodDropdownOpen)}
                >
                  <span>{inactivityPeriod}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>

                {isPeriodDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-[#21202A] border border-gray-700 rounded-md shadow-lg">
                    {[
                      "6 months",
                      "1 year",
                      "2 years",
                      "3 years",
                      "5 years",
                    ].map((period) => (
                      <div
                        key={period}
                        className="px-3 py-2 hover:bg-gray-700 cursor-pointer text-sm"
                        onClick={() => handlePeriodSelect(period)}
                      >
                        {period}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 flex-1">
            <h3 className="font-medium text-white">{conditions[2].title}</h3>
            <p className="text-sm text-white/70 max-w-xl">
              {conditions[2].description}
            </p>
          </div>
          <div
            className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out ${
              isConditionEnabled("multi-signature")
                ? "bg-purple-600"
                : "bg-[#C0BFC6]"
            }`}
            onClick={() => toggleCondition("multi-signature")}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                isConditionEnabled("multi-signature")
                  ? "translate-x-6"
                  : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
