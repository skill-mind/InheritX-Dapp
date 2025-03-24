import React from 'react'
import SupportStatCard from "../components/SupportStatCard"
import SupportQuickAction from '../components/SupportQuickAction'
import SupportSearchBar from "../components/SupportSearchBar"
import SupportTicket from '../components/SupportTicket'
import SupportFaqs from '../components/SupportFaqs'
 
export default function support() {
  return (
    <>
      <SupportStatCard />

      <SupportQuickAction />

      <SupportSearchBar />

      <SupportTicket />

      <SupportFaqs />
    </>
  )
}
