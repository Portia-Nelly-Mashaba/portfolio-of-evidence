import React from "react";
import ArchieveCard from "./ArchieveCard";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Archieve = () => {
  const [showMore, setShowMore] = React.useState(false);

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
          desc="Users can add shopping lists, specify quantities, and perform CRUD operations. It is an efficient and convenient app with everything saved on local storage."
          listItem={["ReactNative", "CSS", "REST API"]}
        />

        <ArchieveCard
          title="Gallery App"
          desc="App allows user to capture memories by adding the name, image, and location of places they visit. The app supports CRUD functions, and everything is saved on the database."
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

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchieveCard
                title="Card Guessing Game"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["React Js", "CSS", "NodeJs"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchieveCard
                title="Book Directory"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["NodeJs", "ExpressJs", "REST API"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchieveCard
                title="Shopping List App"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["NodeJs", "ExpressJs", "REST API"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchieveCard
                title="Quiz Application App"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["NodeJs", "ExpressJs"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchieveCard
                title="Basic Node.js Server App"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["NodeJs", "ExpressJs"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchieveCard
                title="Shopping List App"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["NodeJs", "ExpressJs"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchieveCard
                title="Employee App"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["NodeJs", "ExpressJs"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchieveCard
                title=" UI Challenge App"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["NodeJs", "ExpressJs", "REST API"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchieveCard
                title="Tip Calculator Challenge App"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                listItem={["NodeJs", "ExpressJs"]}
              />
            </motion.div>
          </>
        )}
      </div>

      {showMore ? (
        <div className="mt-12 flex items-center justify-center">
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        </div>
      ) : (
        <div className="mt-12 flex items-center justify-center">
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        </div>
      )}

      <div className="w-full flex flex-col items-center mt-20">
        <h2 className="text-3xl font-titleFont font-semibold">
          Peer-work Projects &{" "}
          <span className="text-textGreen">Assessments</span>
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

        <ArchieveCard
          title="Travel Weather App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactJS", "Google API", "CSS"]}
        />

        <ArchieveCard
          title="Restaurant App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          listItem={["ReactNative", "MongoDB", "NodeJS"]}
        />
      </div>
    </div>
  );
};

export default Archieve;
