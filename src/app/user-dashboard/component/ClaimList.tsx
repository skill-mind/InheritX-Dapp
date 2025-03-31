"use client";
import React from "react";
import { useState, JSX } from "react";

interface Claim {
  id: number;
  date: string;
  assetsOwner: string;
  assets: string;
  status: "Accepted" | "Pending" | "Rejected";
  action: string;
}

interface ClaimsListProps {
  claims: Claim[];
  onViewClaim: (claims: Claim) => void;
}

const ClaimsList: React.FC<ClaimsListProps> = ({ claims, onViewClaim }) => {
  return (
    <div className="bg-gradient-dark text-white p-6 rounded-lg mt-16">
      <h2 className="text-xl px-8 font-semibold">Claims</h2>
      {claims.length === 0 ? (
        <div className="text-3xl py-20 flex justify-center items-center">
          No Claims Yet, Enter Claim Code to Claim Inheritance
        </div>
      ) : (
        <table className="w-full mt-5 text-left border-separate border-spacing-y-4 px-8">
          <thead>
            <tr className="text-gray-300 text-sm">
              <th>Date</th>
              <th>Asset Owner’s Name</th>
              <th>Inherited Assets</th>
              <th>Claim Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim, index) => (
              <tr key={index} className="text-sm text-gray-300">
                <td>{claim.date}</td>
                <td>{claim.assetsOwner}</td>
                <td>{claim.assets}</td>
                <td>{claim.status}</td>
                <td>
                  <button
                    onClick={() => onViewClaim(claim)}
                    className="text-[#8A55FF] hover:underline"
                  >
                    View Claim
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClaimsList;
