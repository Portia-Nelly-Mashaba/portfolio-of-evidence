import React from "react";
import ArchieveCard from "./ArchieveCard";

const Archieve = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other CodeTribe Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archieve
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchieveCard
          title="Shopping List App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactNative", "CSS", "REST API"]}
        />

        <ArchieveCard
          title="Gallery App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactNative", "CSS", "SQLITE", "Google API"]}
        />

        <ArchieveCard
          title="Payment Gateway App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactNative", "CSS", "Stripe API", "NodeJS"]}
        />

        <ArchieveCard
          title="Audio Recorder App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactNative", "CSS", "REST API"]}
        />

        <ArchieveCard
          title="MERN Recipe App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["React Js", "NodeJs", "MongoDB"]}
        />

        <ArchieveCard
          title="Employee App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["React Js", "Firebase", "NodeJs"]}
        />
        

        <ArchieveCard
          title="Card Guessing Game"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["React Js", "CSS", "NodeJs"]}
        />

        <ArchieveCard
          title="Book Directory"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs", "REST API"]}
        />

        <ArchieveCard
          title="Shopping List App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs", "REST API"]}
        />

        <ArchieveCard
          title="Quiz Application App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs"]}
        />

        <ArchieveCard
          title="Basic Node.js Server App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs"]}
        />

        <ArchieveCard
          title="Todo List App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs", "REST API"]}
        />

        <ArchieveCard
          title="Shopping List App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs"]}
        />

        <ArchieveCard
          title="Employee App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs"]}
        />

        <ArchieveCard
          title=" UI Challenge App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs", "REST API"]}
        />

        <ArchieveCard
          title="Tip Calculator Challenge App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={[ "NodeJs", "ExpressJs"]}
        />  

      </div>

      <div>
      <div className="w-full flex flex-col items-center mt-10">
        <h2 className="text-3xl font-titleFont font-semibold">
          Assessments Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archieve
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchieveCard
          title="MarketPlace App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactJS", "NodeJS", "MongoDB"]}
        />
      </div>
      </div>

      <div>
      <div className="w-full flex flex-col items-center mt-10">
        <h2 className="text-3xl font-titleFont font-semibold">
          Peer-work Projects <span className="text-textGreen">@collaboration</span>
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archieve
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchieveCard
          title="Travel Weather App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactJS", "Google API", "CSS"]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchieveCard
          title="Restaurant App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactNative", "MongoDB", "NodeJS"]}
        />
      </div>
      </div>

      
    </div>
  );
};

export default Archieve;
