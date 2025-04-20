import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [articleNo, setArticleNo] = useState("");
  const [shoeNo, setShoeNo] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your WhatsApp number in international format without '+' or spaces
    const yourNumber = "919893460548"; // Replace with your actual number

    // Prepare the message with form data
    const message = `
Name: ${name}
Article No: ${articleNo}
Shoe No: ${shoeNo}
Phone No: ${phoneNo}
Address: ${address}
Can we contact you for more info?: ${checkbox ? "Yes" : checkbox2 ? "No" : "Not specified"}
    `;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${yourNumber}&text=${encodedMessage}`;

    // Open WhatsApp in new tab/window
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <h1 className='text-center text-lg  font-semibold mt-3 sm:text-3xl'>Complete Your Info to <span className='text-amber-400'>Confirm</span> Your Order</h1>
      <section className='contact w-full h-200 flex justify-center items-center'>
        <div className='h-full w-full sm:w-[65rem] flex justify-center items-center'>
          <form onSubmit={handleSubmit} className='flex flex-col bg-zinc-950 h-[90%] hover: border-blue-600 hover:border-2 w-[90%] rounded-2xl'>
            <h1 className='text-3xl font-semibold text-center mt-5'>Contact Us</h1>

            <h5 className='mx-auto mt-2'>Name</h5>
            <input
              type="text"
              autoComplete='off'
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className='text-center bg-zinc-900 focus:border-blue-600 w-[90%] h-15 placeholder:text-2xl placeholder:text-zinc-800 rounded-xl mx-auto placeholder:text-center'
            />

            <div className='flex justify-between items-center mt-3'>
              <div className='w-[50%] flex flex-col items-center'>
                <h5 className='mt-2'>Article No.</h5>
                <input
                  type="text"
                  autoComplete='off'
                  value={articleNo}
                  onChange={e => setArticleNo(e.target.value)}
                  required
                  className=' bg-zinc-900 text-center w-[90%] h-15 placeholder:text-2xl placeholder:text-zinc-800 rounded-xl mx-auto placeholder:text-center'
                />
              </div>
              <div className='w-[50%] flex flex-col items-center'>
                <h5 className='mt-2'>Shoe No.</h5>
                <input
                  type="text"
                  autoComplete='off'
                  value={shoeNo}
                  onChange={e => setShoeNo(e.target.value)}
                  required
                  className=' bg-zinc-900 text-center w-[90%] h-15 placeholder:text-2xl placeholder:text-zinc-800 rounded-xl mx-auto placeholder:text-center'
                />
              </div>
            </div>

            <h5 className='mx-auto mt-4'>Phone no.</h5>
            <input
              type="tel"
              autoComplete='off'
              value={phoneNo}
              onChange={e => setPhoneNo(e.target.value)}
              required
              className=' bg-zinc-900 text-center w-[70%] h-15 placeholder:text-2xl placeholder:text-zinc-800 rounded-xl mx-auto placeholder:text-center'
            />

            <h5 className='mx-auto mt-4'>Address</h5>
            <textarea
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
              className=' bg-zinc-900 text-center w-[70%] h-25 placeholder:text-2xl placeholder:text-zinc-800 rounded-xl mx-auto placeholder:text-center mb-3'
            />

            <h5 className='mx-auto mt-4'>Can We Contact You For More Info?</h5>
            <div className='checkbox flex justify-center gap-5 mt-3'>
              <label className='flex flex-col items-center cursor-pointer'>
                <input
                  type="checkbox"
                  checked={checkbox}
                  onChange={() => {
                    setCheckbox(true);
                    setCheckbox2(false);
                  }}
                  className='mr-2'
                />
                <span>Yes</span>
              </label>
              <label className='flex flex-col items-center cursor-pointer'>
                <input
                  type="checkbox"
                  checked={checkbox2}
                  onChange={() => {
                    setCheckbox2(true);
                    setCheckbox(false);
                  }}
                  className='mr-2'
                />
                <span>No</span>
              </label>
            </div>

            <button
              type="submit"
              className='w-40 h-15 text-center flex justify-center mt-4 mx-auto gap-1.5 items-center rounded-2xl border-2 border-white text-sm font-semibold hover:border-blue-600'
            >
              Submit Details
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
