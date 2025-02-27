import FileUpload from "@/components/sopport/FileUpload";


export default function Support () {
  return(
    <div>
      <section className="pt-[50px]">
        <h1 className="text-5xl font-semibold text-center">We're here to help</h1>
        <p className="text-center pt-6">
            Need help with your inheritance plan or account? if our <span>FAQs</span> didn't answer your question, <br />
            submit a support ticket, and our team will assist you within 48 buisness hours.
        </p>
      </section>

      <section className="ml-[350px] pt-28">
        <h3 className="text-2xl pb-5">Submit a Request</h3>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          className="bg-[#21202A] border border-[D9D9DD] rounded-lg outline-none w-[65%] py-3 pl-2 mb-5 "
          placeholder="Your Email Address"
        />

        <br /><label htmlFor="email">Subject</label><br />
        <select name="" id="" className="bg-[#21202A] border border-[D9D9DD] rounded-lg outline-none w-[65%] py-3 pl-2 mb-5">
            <option value=""></option>
            <option value="">Claims</option>
        </select>

        <br /><label htmlFor="email">Description</label> <br />
        <textarea
          className="bg-[#21202A] border border-[D9D9DD] rounded-lg outline-none w-[65%] py-3 pl-2 pb-36 pr-2 mb-5 "
          placeholder="Enter specific details of your inquiry. Please be as detailed as possible."
        />

        <FileUpload />
        <p className="text-[11px]">Please attach a screenshoot of any error or issue to help us assist you faster. For files over 3.5MB or additional, reply to your sopport <br /> confirmation email</p>

         <br /><button className="bg-[#1B0055] border border-[#C0BFC6] px-[48px] py-[15px] rounded-lg">Submit</button>
      </section>
    </div>
   
    

  )
}