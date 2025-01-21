import React from 'react';
import SectionTitle from './SectionTitle';

const OtherInfo = () => {
  const currentDate = new Date().toLocaleDateString('en-GB');

  return (
    <div className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <div className="w-full flex flex-col items-center">
        <SectionTitle title="Other Information" titleNo="07" />
      </div>
      
      <div className="w-full flex flex-col items-start mt-10">
        <h3 className="text-xl font-titleFont font-semibold tracking-wide text-textGreen">Feedback and Reflections</h3>
        <p className="mt-2">
          <strong>Facilitator Feedback:</strong> No Feedback yet
        </p>
        <p className="mt-2">
          <strong>Self-Reflection:</strong> Describe your growth, strengths, and areas for improvement during the program.
        </p>
      </div>
      <div className="w-full flex flex-col items-start mt-10 xl:flex-row xl:justify-between">
        <div className="w-full xl:w-1/2">
          <h3 className="text-xl font-titleFont font-semibold tracking-wide text-textGreen">Post-Program Goals</h3>
          <p className="mt-2">
            <strong>Short-Term Goals:</strong>
          </p>
          <ul className="text-sm list-disc list-inside ml-4">
            <li>Secure a job in web development.</li>
            <li>Build 2-3 more portfolio projects.</li>
          </ul>
          <p className="mt-2">
            <strong>Long-Term Goals:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Become a full-stack developer.</li>
            <li>Contribute to open-source projects.</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-10">
        <p className="text-sm text-gray-500">Last update: {currentDate}</p>
      </div>
    </div>
  );
};

export default OtherInfo;
