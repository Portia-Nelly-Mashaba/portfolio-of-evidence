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
        {/* Responsive wrapper */}
        <div className="w-4/5 overflow-x-auto">
          <table className="min-w-full text-left border-collapse text-sm md:text-base">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 p-2 md:p-3">
                  Assessment
                </th>
                <th className="border-b-2 border-gray-300 p-2 md:p-3">
                  Git Link
                </th>
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
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  Tip Calculator
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  <a
                    href="https://github.com/Portia-Nelly-Mashaba/Code-Tribe.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textGreen block"
                  >
                    Git Link
                  </a>
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  31/07/2024
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  N/A
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3">
                  UI Challenge
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  MarketPlace
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  <a
                    href="https://github.com/Portia-Nelly-Mashaba/MERN-e-commerce.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textGreen block"
                  >
                    Git Link
                  </a>
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  02/11/2024
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  N/A
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3">
                  Ecommerce App
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
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
        {/* Responsive wrapper */}
        <div className="w-4/5 overflow-x-auto">
          <table className="min-w-full text-left border-collapse text-sm md:text-base">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 p-2 md:p-3">
                  Assessment
                </th>
                <th className="border-b-2 border-gray-300 p-2 md:p-3">
                  Git Link
                </th>
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
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  Tip Calculator
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  <a
                    href="https://github.com/Portia-Nelly-Mashaba/Code-Tribe.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textGreen block"
                  >
                    Git Link
                  </a>
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  31/07/2024
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  N/A
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3">
                  UI Challenge
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  MarketPlace
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  <a
                    href="https://github.com/Portia-Nelly-Mashaba/MERN-e-commerce.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textGreen block"
                  >
                    Git Link
                  </a>
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  02/11/2024
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  N/A
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3">
                  Ecommerce App
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  Travel Weather
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  <a
                    href="https://github.com/Portia-Nelly-Mashaba/Weather-Based-Travel-Planner-with-API-Integration.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textGreen block"
                  >
                    Git Link
                  </a>
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  21/01/2025
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  N/A
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3">
                  Collaboration Project
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
            Travel Weather
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  <a
                    href="https://github.com/Portia-Nelly-Mashaba/Weather-Based-Travel-Planner-with-API-Integration.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textGreen block"
                  >
                    Git Link
                  </a>
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  21/01/2025
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3 whitespace-nowrap">
                  N/A
                </td>
                <td className="border-b border-gray-300 p-2 md:p-3">
                  Collaboration Project
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
