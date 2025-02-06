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
          repoLink="https://github.com/Portia-Nelly-Mashaba/Shopping-List--react-native-and-redux.git"
        />

        <ArchieveCard
          title="Gallery App"
          desc="App allows user to capture memories by adding the name, image, and location of places they visit. The app supports CRUD functions, and everything is saved on the database."
          listItem={["ReactNative", "CSS", "SQLITE", "Google API"]}
          repoLink="https://github.com/Portia-Nelly-Mashaba/Geo-Gallery.git"
        />

        <ArchieveCard
          title="Payment Gateway App"
          desc="A PayStripe gateway app that allows users to make payments with Stripe gateway for a beauty app store. It ensures secure and seamless transactions."
          listItem={["ReactNative", "CSS", "Stripe API", "NodeJS"]}
          repoLink="https://github.com/Portia-Nelly-Mashaba/payment-gateway.git"
        />

        <ArchieveCard
          title="Audio Recorder App"
          desc="A mobile app for recording voice notes, with features to play, playback, delete, and share recordings over social media. It also includes user login functionality."
          listItem={["ReactNative", "CSS", "REST API"]}
          repoLink="https://github.com/Portia-Nelly-Mashaba/Recording-App.git"
        />

        <ArchieveCard
          title="Birthday Card App"
          desc="A delightful app that lets users create personalized birthday cards by writing messages and inserting pictures, providing a unique way to celebrate special occasions."
          listItem={["ReactNative", "CSS", "REST API"]}
          repoLink="https://github.com/Portia-Nelly-Mashaba/Birthday-Card.git"
        />

        <ArchieveCard
          title="MERN Recipe App"
          desc="A full-stack recipe app where users can create, view, update, and delete recipes. It ensures efficient data management and a seamless user experience."
          listItem={["React Js", "NodeJs", "MongoDB"]}
          repoLink="https://github.com/Portia-Nelly-Mashaba/MERN-Recipe-App-.git"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchieveCard
                title="Employee App"
                desc="An app with Super Admin and Admin roles for managing employee records, including CRUD operations and secure authentication. It also features real-time updates."
                listItem={["React Js", "Firebase", "NodeJs"]}
                repoLink="https://github.com/Portia-Nelly-Mashaba/Employee-App-with-Node-Js-and-Firebase.git"
              />
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchieveCard
                title="Library Management App"
                desc="A Library Management System implemented using MongoDB shell (mongosh), showcasing database creation, collections setup, CRUD operations, and advanced queries."
                listItem={["React Js", "Firebase", "NodeJs"]}
                repoLink="https://github.com/Portia-Nelly-Mashaba/Library-Management-System-.git"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchieveCard
                title="Fruit Card Memory Game"
                desc="A fun card memory game with 18 cards, a timer, and a restart button. Users can test their memory and enjoy a playful experience."
                listItem={["React Js", "CSS", "NodeJs"]}
                repoLink="https://github.com/Portia-Nelly-Mashaba/Memory-Game--Node-JS.git"
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
                repoLink="https://github.com/Portia-Nelly-Mashaba/shopping_list-with-mongoDB.git"
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
                repoLink="https://github.com/Portia-Nelly-Mashaba/Node.Js---Quizz-App.git"
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
                repoLink="https://github.com/Portia-Nelly-Mashaba/Node-Server.git"
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
                repoLink="https://github.com/Portia-Nelly-Mashaba/News-App.git"
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
                repoLink="https://github.com/Portia-Nelly-Mashaba/Employee-app.git"
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
                repoLink="https://github.com/Portia-Nelly-Mashaba/Single-price-grid-component.git"
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
                repoLink="https://github.com/Portia-Nelly-Mashaba/Code-Tribe.git"
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
          desc="A user-friendly marketplace app that connects buyers and sellers seamlessly, offering a secure and efficient way to discover, purchase, and sell items with ease."
          listItem={["ReactJS", "NodeJS", "MongoDB"]}
          repoLink="https://github.com/Portia-Nelly-Mashaba/MERN-e-commerce.git"
        />

        <ArchieveCard
          title="Travel Weather App"
          desc="A travel weather app predicting 7-day forecasts and suggesting activities based on the weather, ensuring users can make the most of their trips, regardless of the weather conditions."
          listItem={["ReactJS", "Google API", "CSS"]}
          repoLink="https://github.com/Portia-Nelly-Mashaba/Weather-Based-Travel-Planner-with-API-Integration.git"
        />

        <ArchieveCard
          title="Restaurant App"
          desc="A restaurant reservation app that allows users to book tables, view menus, and receive personalized dining suggestions, ensuring enjoyable dining experience."
          listItem={["ReactNative", "MongoDB", "NodeJS"]}
          repoLink="https://github.com/Portia-Nelly-Mashaba/portfolio-of-evidence.git"
        />
      </div>
    </div>
  );
};

export default Archieve;
