import { actionType } from "@/lib/types";
import { XMarkIcon } from "@/svg/Icons";

function BeneficialActions({
  title,
  paragraph,
  cancle,
  execute,
  modalHandle,
}: actionType) {
  return (
    <div className="bg-[#2B2A38] min-w-[600px] max-w-[705px] p-6 text-center mx-auto rounded-xl grid gap-8 z-50 h-fit  top-1/2 right-1/2 fixed -translate-y-[50%] translate-x-[50%]">
      <div onClick={modalHandle}  className="flex justify-end fixed right-3 top-3">
        <XMarkIcon  />
      </div>
      <div className="px-10 mt-6">
        <h2 className="font-bold text-[40px]">{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="flex justify-center gap-3">
        <button className="rounded-full bg-[#EB341E] text-white border border-[#B5B3B4] w-fit py-[10px] px-7 font-normal text-base">
          {cancle}
        </button>
        <button className="rounded-full bg-[#FFFFFF] text-black border border-[#C0BFC6] w-fit py-[10px] px-7 font-normal text-base">
          {execute}
        </button>
      </div>
    </div>
  );
}


function BeneficialActionModal({
  title,
  paragraph,
  cancle,
  execute,
  modalHandle,
}: actionType) {
  return (
    <div className="relative">
      <div
        className="fixed h-screen w-full bg-[#868686]/20 backdrop-blur-md top-0 left-0"
        onClick={modalHandle}
      />
      {/* <div className="w-[90%] max-h-[500px] grid mmin-h-[467px]  rounded-lg border  py-6 px-4 overflow-scroll max-w-5xl"> */}
      <BeneficialActions cancle={cancle} execute={execute} modalHandle={modalHandle} paragraph={paragraph} title={title} />
      {/* </div> */}
    </div>
  );
}
export default BeneficialActionModal;