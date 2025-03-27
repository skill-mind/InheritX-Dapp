import { CheckMark } from "@/svg/Icons";

export default function PlansConfirmation(){
    return (
      <div className="flex flex-col justify-center items-center gap-5 py-5">
        <CheckMark />
        <div className="grid gap-3 text-center">
          <h1 className="text-[40px] font-bold">Plan Created Successfully</h1>
          <p className="font-normal text-base">
            Your submissions have been received! We’re reviewing them and will
            update you shortly. Check your email or dashboard for status
            updates.
          </p>
        </div>
      </div>
    );
}