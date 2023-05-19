import React from 'react';
import img from '../../assets/split-pdf.svg';
import { HiChevronDoubleRight } from 'react-icons/hi';

function About() {
  return (
    <div className="w-full bg-[#2abfff] py-8 px-4 md:py-16" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-full md:w-[600px] mx-auto mb-8 md:mb-0" src={img} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black">
            Introducing the revolutionary PDF extracting and summarizing technology
          </h1>
          <p className="text-white text-lg md:text-base">
            Our web app is designed to transform the way you read and learn from PDFs!
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 my-auto text-white mx-auto">
          <p>You do the steps,</p>
          <p>
            we handle the <span className="text-black">power.</span>
          </p>
        </div>

        <div>
          <div className="border-2 border-white rounded-[33px] m-2 p-4 flex">
            <div className="text-[33px] my-auto text-white mx-2">
              <HiChevronDoubleRight />
            </div>
            <div>
              <h1 className="text-[32px] font-semibold text-white">Register</h1>
              <p className="text-white text-base">
                Login with email and password or with your Google account.
              </p>
            </div>
          </div>

          <div className="border-2 border-white rounded-[33px] m-2 p-4 flex">
            <div className="text-[33px] my-auto text-white mx-2">
              <HiChevronDoubleRight />
            </div>
            <div>
              <h1 className="text-[32px] font-semibold text-white">Upload</h1>
              <p className="text-white text-base">
                Upload your boring textbooks into our customized PDF splitter.
              </p>
            </div>
          </div>

          <div className="border-2 border-white rounded-[33px] m-2 p-4 flex">
            <div className="text-[33px] my-auto text-white mx-2">
              <HiChevronDoubleRight />
            </div>
            <div>
              <h1 className="text-[32px] font-semibold text-black">Notimise</h1>
              <p className="text-white text-base">
                Generate summarized text from your PDFs, with the option to download them as a PDF.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
