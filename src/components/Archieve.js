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
          desc="A PayStripe gateway app that allows users to make payments with Stripe gateway for a beauty app store. It ensures secure and seamless transactions."
          listItem={["ReactNative", "CSS", "Stripe API", "NodeJS"]}
        />

        <ArchieveCard
          title="Audio Recorder App"
          desc="A mobile app for recording voice notes, with features to play, playback, delete, and share recordings over social media. It also includes user login functionality."
          listItem={["ReactNative", "CSS", "REST API"]}
        />


        <ArchieveCard
          title="MERN Recipe App"
          desc="A full-stack recipe app where users can create, view, update, and delete recipes. It ensures efficient data management and a seamless user experience."
          listItem={["React Js", "NodeJs", "MongoDB"]}
        />


      <ArchieveCard
        title="Employee App"
        desc="An app with Super Admin and Admin roles for managing employee records, including CRUD operations and secure authentication. It also features real-time updates."
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
                title="Fruit Card Guessing Game"
                desc="A fun card guessing game with 18 cards, a timer, and a restart button. Users can test their memory and enjoy a playful experience."
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
                desc="A comprehensive book directory app where users can add, view, update, and delete book entries. It ensures efficient data management."
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
                desc="A handy app where users can add shopping lists, specify quantities, and perform CRUD operations. It is efficient and convenient."
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
  desc="A command-line quiz app with a timer alert. Users can test their knowledge and enjoy a seamless experience."
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
  desc="A simple server app created using Node.js and Express.js. It handles HTTP requests and responses efficiently."
  listItem={["NodeJs", "ExpressJs"]}
/>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchieveCard
                title="News App"
                desc="A comprehensive news app featuring categories, search functionality, bookmarking, and social media sharing."
                listItem={["ReactJs", "NewsAPI", "ExpressJs"]}
              />


            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchieveCard
  title="Employee App"
  desc="An app for managing employee records with CRUD operations and search functionality. "
  listItem={["ReactJs", "Json Server"]}
/>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchieveCard
  title="UI Challenge App"
  desc="A UI challenge app created using CSS and ReactJs, featuring a beautifully designed card component."
  listItem={["NodeJs", "CSS"]}
/>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchieveCard
  title="Tip Calculator App"
  desc="A tip calculator app that allows users to split the bill among themselves. It ensures accurate calculations and a seamless user experience."
  listItem={["ReactJs", "CSS"]}
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
