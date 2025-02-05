import React from "react";
import SectionTitle from "./SectionTitle";

const Assessment = () => {
  return (
    <div
      id="assessments"
      className="max-w-contentContainer mx-auto py-10 xl:py-20 flex flex-col gap-4 items-center justify-center"
    >
      <SectionTitle title="Assessments" titleNo="04" />
      <div className="w-full flex flex-col items-center justify-center gap-4 mt-6">
        <table className="w-4/5 text-left border-collapse text-sm md:text-base">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 p-2 md:p-3">
                Assessment
              </th>
              <th className="border-b-2 border-gray-300 p-2 md:p-3">Git Link</th>
              <th className="border-b-2 border-gray-300 p-2 md:p-3">
                Date Completed
              </th>
              <th className="border-b-2 border-gray-300 p-2 md:p-3">
                Grade/Score
              </th>
              <th className="border-b-2 border-gray-300 p-2 md:p-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-2 md:p-3">
                Tip Calculator
              </td>
              <td className="border-b border-gray-300 p-2 md:p-3">
                <a href="https://github.com/Portia-Nelly-Mashaba/Code-Tribe.git" target="_blank" className="text-textGreen">
                  Git Link
                </a>
              </td>
              <td className="border-b border-gray-300 p-2 md:p-3">31/07/2024</td>
              <td className="border-b border-gray-300 p-2 md:p-3">N/A</td>
              <td className="border-b border-gray-300 p-2 md:p-3">
                UI Challenge
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 md:p-3">
                MarketPlace
              </td>
              <td className="border-b border-gray-300 p-2 md:p-3">
                <a href="https://github.com/Portia-Nelly-Mashaba/MERN-e-commerce.git" target="_blank" className="text-textGreen">
                  Git Link
                </a>
              </td>
              <td className="border-b border-gray-300 p-2 md:p-3">02/11/2024</td>
              <td className="border-b border-gray-300 p-2 md:p-3">N/A</td>
              <td className="border-b border-gray-300 p-2 md:p-3">
                Ecommerce App
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 md:p-3">
                Travel Weather
              </td>
              <td className="border-b border-gray-300 p-2 md:p-3">
                <a href="https://github.com/Portia-Nelly-Mashaba/Weather-Based-Travel-Planner-with-API-Integration.git" target="_blank" className="text-textGreen">
                  Git Link
                </a>
              </td>
              <td className="border-b border-gray-300 p-2 md:p-3">21/01/2025</td>
              <td className="border-b border-gray-300 p-2 md:p-3">N/A</td>
              <td className="border-b border-gray-300 p-2 md:p-3">
                Collaboration Project
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assessment;
