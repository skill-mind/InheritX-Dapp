import type { Plan, User } from "./types"

export const plans: Plan[] = [
  {
    id: 24322,
    name: "Family Plan",
    assetOwner: "danielochoja@gmail.com",
    beneficiaries: [
      {
        name: "Daniel Ochoja",
        email: "danielochoja@gmail.com",
        allocation: "50% (Approx. $25,213.44)",
        nfts: 2,
      },
      {
        name: "Stephen Jack",
        email: "stephnheeenjs@gmail.com",
        allocation: "50% (Approx. $25,213.44)",
      },
    ],
    timeLockStatus: "Activate after 2 years of inactivity",
    status: "Active",
    description: "For everyone dear to me",
    transferDate: "28-05-2030",
    inactivityCriteria: "2 years",
    multiSignatureApproval: "Enabled",
  },
  {
    id: 24332,
    name: "To Friends and Loved Ones",
    assetOwner: "danielochoja@yahoo.com",
    beneficiaries: [
      {
        name: "John Doe",
        email: "johndoe@gmail.com",
        allocation: "30% (Approx. $15,000.00)",
      },
      {
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        allocation: "70% (Approx. $35,000.00)",
      },
    ],
    timeLockStatus: "Activate in 6 months time",
    status: "Completed",
    description: "Assets for my closest friends",
    transferDate: "15-12-2025",
    inactivityCriteria: "6 months",
    multiSignatureApproval: "Disabled",
  },
]

export const users: User[] = [
  {
    name: "Daniel Ochoja",
    email: "danielochoja@gmail.com",
    dateOfBirth: "02-04-2024",
    nationality: "Nigeria",
    address: "No.45, Kyoto Avenue, Lagos, Nigeria",
    idType: "Driver's License",
    documents: [
      {
        title: "Front of ID",
        filename: "driver_license_front.jpeg",
      },
      {
        title: "Back of ID",
        filename: "driver_license_back.jpeg",
      },
      {
        title: "Proof of Address",
        filename: "utility_bill.jpeg",
      },
    ],
  },
  {
    name: "Stephen Jack",
    email: "stephnheeenjs@gmail.com",
    dateOfBirth: "15-07-1990",
    nationality: "United States",
    address: "123 Main St, New York, NY, USA",
    idType: "Passport",
    documents: [
      {
        title: "Front of ID",
        filename: "passport_front.jpeg",
      },
      {
        title: "Back of ID",
        filename: "passport_back.jpeg",
      },
      {
        title: "Proof of Address",
        filename: "bank_statement.pdf",
      },
    ],
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    dateOfBirth: "10-11-1985",
    nationality: "Canada",
    address: "456 Maple Ave, Toronto, Canada",
    idType: "National ID",
    documents: [
      {
        title: "Front of ID",
        filename: "national_id_front.jpeg",
      },
      {
        title: "Back of ID",
        filename: "national_id_back.jpeg",
      },
      {
        title: "Proof of Address",
        filename: "lease_agreement.pdf",
      },
    ],
  },
  {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    dateOfBirth: "22-03-1992",
    nationality: "United Kingdom",
    address: "789 Oxford St, London, UK",
    idType: "Passport",
    documents: [
      {
        title: "Front of ID",
        filename: "uk_passport_front.jpeg",
      },
      {
        title: "Back of ID",
        filename: "uk_passport_back.jpeg",
      },
      {
        title: "Proof of Address",
        filename: "council_tax_bill.pdf",
      },
    ],
  },
]

