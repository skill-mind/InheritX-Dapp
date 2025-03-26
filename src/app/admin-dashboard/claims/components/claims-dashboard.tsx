"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Hourglass, CheckCircle, XCircle, Search, Download } from "lucide-react"
import ClaimsTable from "./claims-table"

// Define the types for our data
interface ClaimSummary {
  id: string
  title: string
  count: number
  icon: React.ElementType
  color: string
}

interface Claim {
  id: string
  planId: string
  planName: string
  assetOwner: string
  beneficiary: string
  status: "Pending" | "Validated" | "Rejected"
}

export default function ClaimsDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Claims summary data
  const claimsSummary: ClaimSummary[] = [
    {
      id: "total",
      title: "Total Claims",
      count: 220,
      icon: Clock,
      color: "bg-indigo-950 hover:bg-indigo-900",
    },
    {
      id: "pending",
      title: "Claims Pending Validation",
      count: 54,
      icon: Hourglass,
      color: "bg-indigo-800 hover:bg-indigo-700",
    },
    {
      id: "validated",
      title: "Validated Claims",
      count: 120,
      icon: CheckCircle,
      color: "bg-emerald-700 hover:bg-emerald-600",
    },
    {
      id: "rejected",
      title: "Rejected Claims",
      count: 120,
      icon: XCircle,
      color: "bg-red-800 hover:bg-red-700",
    },
  ]

  // Claims data
  const claimsData: Claim[] = [
    {
      id: "1",
      planId: "PL001",
      planName: "Family Plan",
      assetOwner: "owner@example.com",
      beneficiary: "person@example.com",
      status: "Pending",
    },
    {
      id: "2",
      planId: "PL002",
      planName: "Business Plan",
      assetOwner: "business@example.com",
      beneficiary: "employee@example.com",
      status: "Validated",
    },
    {
      id: "3",
      planId: "PL003",
      planName: "Personal Plan",
      assetOwner: "john@example.com",
      beneficiary: "jane@example.com",
      status: "Pending",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 bg-[#0a0a10] p-4 md:p-6 rounded-lg">

      {/* Claims summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {claimsSummary.map((summary) => (
          <div key={summary.id} className={`${summary.color} rounded-lg p-4 md:p-6 transition-colors duration-200`}>
            <div className="flex flex-col">
              <div className="mb-1 md:mb-2">
                <summary.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h3 className="text-xs md:text-sm text-white/80">{summary.title}</h3>
              <p className="text-2xl md:text-3xl font-bold text-white mt-1 md:mt-2">{summary.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search bar and actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
        <div className="relative flex-grow w-full max-w-2xl">
          <div className="relative flex items-center w-full">
            <div className="absolute left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Find using Plan ID, Asset owner/Beneficiary email"
              className="w-full bg-[#121218] border border-gray-700 rounded-full py-1.5 md:py-2 pl-9 pr-20 md:pr-24 text-sm md:text-base text-white placeholder-gray-400 focus:ring-1 focus:ring-indigo-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 md:px-5 py-1 md:py-1.5 rounded-full transition-colors duration-200 mr-0.5"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
          <button className="flex items-center gap-1 md:gap-2 text-gray-300 hover:text-white text-sm md:text-base">
            <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span>Download CSV</span>
          </button>
          <button className="text-gray-300 hover:text-white text-sm md:text-base">All</button>
        </div>
      </div>

      {/* Claims table */}
      <ClaimsTable claims={claimsData} />
    </div>
  )
}

