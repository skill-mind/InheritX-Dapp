"use client";

import Image from "next/image";
import PlanCard from "./components/plansHeaderCard";
import PlanTable from "./components/plansTable";
import img from "@/../public/about-2.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import InheritancePlanFormOne from "./components/createPlanOne";
import BeneficiaryForm from "./components/add-beneficial-form";
import ConfigureConditions from "./components/configure-condition";
import AdditionalMessages from "./components/additional-message";
import BasicInfo, {
  BeneficiaryInfo,
  MeadiaAndBeneficial,
} from "./components/beneficiary-info";
import PlansConfirmation from "./components/plan-confirmation";
import BeneficialActionModal from "./components/plans-action-modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SelectorInput from "./components/selector-input";

function Plans() {
  const [create, setCreate] = useState(0);
  const [activeTab, setActiveTab] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState("");

  // Plan table data
  const planTableDetails = [
    {
      planName: "To Friends and Loved Ones",
      totalAssest: "$22,100.23",
      beneficiaries: "12",
      timeLockStatus: "Activate in 6 months time",
      action: "View Plan",
    },
    {
      planName: "Family Plan",
      totalAssest: "$45,205.22",
      beneficiaries: "6",
      timeLockStatus: "Activate after 2 years of inactivity",
      action: "View Plan",
    },
  ];

  // Navigation handlers
  function nextHandle() {
    setCreate((num) => num + 1);
  }

  function prevHandle() {
    if (create === 0) return;
    setCreate((num) => num - 1);
  }

  function activeTabHandle() {
    setActiveTab("Basic-Information");
  }

  // Modal components
  const renderExecuteModal = () => {
    if (modalIsOpen !== "execute") return null;

    return (
      <BeneficialActionModal
        cancle="No, Cancel"
        execute="Yes, Execute Plan Now"
        modalHandle={() => setModalIsOpen("")}
        paragraph="This transfers allocations to beneficiaries immediately. This action cannot be reversed"
        title="Execute Plan Now?"
      />
    );
  };

  const renderDeleteModal = () => {
    if (modalIsOpen !== "delete") return null;

    return (
      <BeneficialActionModal
        cancle="No, Cancel"
        execute="Yes, Delete Plan"
        modalHandle={() => setModalIsOpen("")}
        paragraph="This action cannot be reversed"
        title="Delete Plan?"
      />
    );
  };

  const renderOverrideModal = () => {
    if (modalIsOpen !== "override") return null;

    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-2xl bg-[#413F54] rounded-lg p-6 text-white">
          {activeTab !== "" && (
            <>
              <h1 className="text-2xl text-center mb-6 font-bold text-[40px]">
                Override Plan
              </h1>
              <ul className="flex justify-center items-center gap-5 mb-5">
                <li
                  onClick={() => {
                    setActiveTab("Basic-Information");
                  }}
                  className={`font-light text-base ${
                    activeTab === "Basic-Information"
                      ? "text text-white border-white"
                      : "text-[#807F8D] border-[#807F8D]"
                  } border-b-2 pb-2 cursor-pointer`}
                >
                  Basic Information
                </li>
                <li
                  onClick={() => {
                    setActiveTab("beneficiaries");
                  }}
                  className={`font-light text-base ${
                    activeTab === "beneficiaries"
                      ? "text text-white border-white"
                      : "text-[#807F8D] border-[#807F8D]"
                  } border-b-2 pb-2 cursor-pointer`}
                >
                  Beneficiaries
                </li>
                <li
                  onClick={() => {
                    setActiveTab("media");
                  }}
                  className={`font-light text-base ${
                    activeTab === "media"
                      ? "text text-white border-white"
                      : "text-[#807F8D] border-[#807F8D]"
                  } border-b-2 pb-2 cursor-pointer`}
                >
                  Media & Recipients
                </li>
              </ul>
              {activeTab == "Basic-Information" &&
                modalIsOpen === "override" && (
                  <div className="grid gap-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-sm text-white font-normal  block mb-1"
                      >
                        Plan Name
                      </label>
                      <Input
                        id=""
                        placeholder="Beneficiary Name"
                        className="bg-[#21202A] border-[#D9D9DD] border text-white h-[54px] rounded-2xl"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-sm text-white font-normal  block mb-1"
                      >
                        Additional Message (Optional)
                      </label>
                      <Textarea
                        id=""
                        value=""
                        placeholder="Write a short message to beneficiary"
                        className="bg-[#21202A] border-[#D9D9DD] border text-white min-h-[200px] rounded-2xl"
                      />
                    </div>
                    <SelectorInput />
                    <ConfigureConditions />
                  </div>
                )}
              {activeTab == "beneficiaries" && modalIsOpen === "override" && (
                <BeneficiaryForm />
              )}
              {activeTab == "media" && modalIsOpen === "override" && (
                <AdditionalMessages />
              )}
            </>
          )}
          {modalIsOpen !== "override" && (
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                className="bg-white hover:text-white hover:border-[#B5B3B4] border border-transparent text-black hover:bg-transparent rounded-full px-7 py-[10px]"
              >
                Execute Now
              </Button>
              <Button
                type="button"
                variant="outline"
                className="bg-[#211A1D] border-[#B5B3B4] text-white hover:text-white hover:bg-transparent rounded-full  px-7 py-[10px]"
              >
                Override Plan
              </Button>
              <Button
                type="button"
                className="bg-[#EB341E] text-white hover:text-white border-[#B5B3B4] border hover:bg-transparent rounded-full px-7 py-[10px]"
              >
                Delete Plan
              </Button>
            </div>
          )}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="bg-[#211A1D] border-[#B5B3B4] text-white hover:text-white hover:bg-transparent rounded-full  px-7 py-[10px]"
              onClick={() => setModalIsOpen("override")}
            >
              Revert Changes
            </Button>
            <Button
              type="button"
              className="bg-white hover:text-white hover:border-[#B5B3B4] border border-transparent text-black hover:bg-transparent rounded-full px-7 py-[10px]"
              onClick={() => setModalIsOpen("execute")}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // Render plan overview content
  const renderPlanOverview = () => {
    if (modalIsOpen !== "" || activeTab === "") return null;

    return (
      <div>
        <h2 className="font-semibold text-lg">Plans | Plan Overview</h2>
        <div className="flex justify-center items-center min-h-screen md:p-4">
          <div className="w-[400px] md:min-w-[600px] md:max-w-[813px] bg-gradient-dark rounded-lg p-6 text-white">
            <h1 className="text-xl md:text-2xl text-center mb-6 font-bold text-[40px]">
              Create Inheritance Plan
            </h1>
            <ul className="flex justify-center items-center gap-5 mb-5">
              <li
                onClick={() => {
                  setActiveTab("Basic-Information");
                }}
                className={`font-light text-base ${
                  activeTab === "Basic-Information"
                    ? "text text-white border-white"
                    : "text-[#807F8D] border-[#807F8D]"
                } border-b-2 pb-2 cursor-pointer text-sm md:text-[14px]`}
              >
                Basic Information
              </li>
              <li
                onClick={() => {
                  setActiveTab("beneficiaries");
                }}
                className={`font-light text-base ${
                  activeTab === "beneficiaries"
                    ? "text text-white border-white"
                    : "text-[#807F8D] border-[#807F8D]"
                } border-b-2 pb-2 cursor-pointer text-sm md:text-[14px]`}
              >
                Beneficiaries
              </li>
              <li
                onClick={() => {
                  setActiveTab("media");
                }}
                className={`font-light text-base ${
                  activeTab === "media"
                    ? "text text-white border-white"
                    : "text-[#807F8D] border-[#807F8D]"
                } border-b-2 pb-2 cursor-pointer text-sm md:text-[14px]`}
              >
                Media & Recipients
              </li>
            </ul>
            {activeTab === "Basic-Information" && <BasicInfo />}
            {activeTab === "beneficiaries" && <BeneficiaryInfo />}
            {activeTab === "media" && <MeadiaAndBeneficial />}
            <div className=" grid md:flex justify-end gap-3  md:ml-[50%] md:max-w-[50%] pt-4">
              <Button
                type="button"
                className="bg-white hover:text-white hover:border-[#B5B3B4] border border-transparent text-black hover:bg-transparent md:rounded-full mx-auto w-[300px] md:w-[153px]  px-7 py-[10px]"
                onClick={() => setModalIsOpen("execute")}
              >
                Execute Now
              </Button>
              <Button
                type="button"
                variant="outline"
                className="bg-[#211A1D] border-[#B5B3B4] text-white hover:text-white hover:bg-transparent md:rounded-full mx-auto w-[300px] md:w-[153px]   px-7 py-[10px]"
                onClick={() => setModalIsOpen("override")}
              >
                Override Plan
              </Button>
              <Button
                type="button"
                className="bg-[#EB341E] text-white hover:text-white border-[#B5B3B4] border hover:bg-transparent md:rounded-full mx-auto w-[300px] md:w-[153px]   px-7 py-[10px]"
                onClick={() => setModalIsOpen("delete")}
              >
                Delete Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render plans table or empty state
  const renderPlansTableOrEmpty = () => {
    if (create !== 0 || activeTab !== "") return null;

    if (planTableDetails.length > 0) {
      return (
        <>
          <PlanCard />
          <PlanTable
            activeTab={activeTabHandle}
            planTableDetails={planTableDetails}
          />
        </>
      );
    } else {
      return (
        <div>
          <nav className="w-full text-[#D9D9DD] font-semibold text-base pb-7">
            <ul className="grid grid-cols-5 w-full text-start">
              <li className="text-start">Plan Name</li>
              <li className="text-start">Total Assets Allocated</li>
              <li className="text-center">Beneficiaries</li>
              <li className="text-center">Time-Lock Status</li>
              <li className="text-end">Action</li>
            </ul>
          </nav>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image className="mx-auto" src={img} alt="safe lock" />
            <h3>Nothing to show here</h3>
            <Button
              onClick={nextHandle}
              className="flex gap-3 rounded-full bg-[#1B0055] border border-[#C0BFC6] w-fit py-[10px] px-7 font-normal text-base items-center"
            >
              Create Inheritance Plan
            </Button>
          </div>
        </div>
      );
    }
  };

  // Render plan creation wizard
  const renderPlanCreationWizard = () => {
    if (planTableDetails.length > 0 || create === 0 || activeTab !== "")
      return null;

    return (
      <div>
        <h2 className="font-semibold text-lg">Plans | create plans</h2>
        <div className="flex justify-center items-center min-h-screen p-4">
          <div className="w-full max-w-2xl bg-[#413F54] rounded-lg p-6 text-white">
            {create !== 6 && (
              <>
                <h1 className="text-2xl text-center mb-4 font-bold text-[40px]">
                  Create Inheritance Plan
                </h1>

                {create !== 4 && (
                  <div className="text-2xl font-normal text-white mb-2 ml-6">
                    {create === 5 ? 4 : create}/<span>4</span> Plan Overview
                  </div>
                )}
              </>
            )}
            {/* Plan creation step components */}
            {create === 1 && <InheritancePlanFormOne />}
            {create === 2 && <BeneficiaryForm />}
            {create === 3 && <ConfigureConditions />}
            {create === 4 && <AdditionalMessages />}
            {create === 5 && <BasicInfo />}
            {create === 6 && <PlansConfirmation />}

            {create !== 6 && (
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  className="bg-white hover:text-white hover:border-[#B5B3B4] border border-transparent text-black hover:bg-transparent rounded-full px-7 py-[10px]"
                  onClick={nextHandle}
                >
                  Next
                </Button>
                {create !== 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-[#211A1D] border-[#B5B3B4] text-white hover:text-white hover:bg-transparent rounded-full  px-7 py-[10px]"
                    onClick={prevHandle}
                  >
                    Back
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-4 p-8">
      {/* Modals */}
      {renderExecuteModal()}
      {renderOverrideModal()}
      {renderDeleteModal()}

      {/* Main content */}
      <div className="flex flex-col gap-4">
        {renderPlansTableOrEmpty()}
        {renderPlanOverview()}
        {renderPlanCreationWizard()}
      </div>
    </section>
  );
}

export default Plans;
