export interface Beneficiary {
    name: string
    email: string
    allocation: string
    nfts?: number
  }
  
  export interface Plan {
    id: number
    name: string
    assetOwner: string
    beneficiaries: Beneficiary[]
    timeLockStatus: string
    status: "Active" | "Completed"
    description: string
    transferDate: string
    inactivityCriteria: string
    multiSignatureApproval: string
  }
  
  export interface Document {
    title: string
    filename: string
  }
  
  export interface User {
    name: string
    email: string
    dateOfBirth: string
    nationality: string
    address: string
    idType: string
    documents: Document[]
  }
  
  