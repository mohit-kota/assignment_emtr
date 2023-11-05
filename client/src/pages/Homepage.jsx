// import React from "react";
import { useEffect } from "react";
import { FeaturedCard } from "../components/FeaturedCard";
import Footer from "../components/Footer";
import Loader from "../components/loader";
import { useStateContext } from "../context";

const Homepage = () => {
  const { languageList, getLanguages } = useStateContext();
  useEffect(() => {
    getLanguages();

    return () => {};
  });
  return (
    <div className="">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto rounded-xl bg-[green] text-[yellow] py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Learning Languages Is Easier Now</h2>
          <p className="text-lg mb-8 font-medium">
            Amazing Games, games quizzes
          </p>
        
        </div>
      </section>
      {/* Top Languages */}
      {/* Featured Languages */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-medium mt-8">Featured Languages</h2>

        <div className=" mx-4 grid grid-cols-1 gap-4 relative">
          {languageList.length > 0 ? (
            languageList.map((language) => {
              return (

                <FeaturedCard 
                  key={language._id}
                  languageTitle={language.name}
                  body={language.description}
                  link={language.exercises[0]}
                />
              );
            })
          ) : (
            <div className="absolute left-1/2">
              <Loader />
            </div>
          )}
        </div>
      </section>
      {/* Featured Lessons */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-medium mt-8">Featured Lessons</h2>

        <div className="mx-4 grid grid-cols-1 gap-4">
          <FeaturedCard
            languageTitle={"English"}
            link={"64e868ca5dba93f04b589eff"}
          />
          <FeaturedCard
            languageTitle={"Hindi"}
            link={"64e8696d5dba93f04b589f00"}
          />
          <FeaturedCard
            languageTitle={"Urdu"}
            link={"64e869835dba93f04b589f01"}
          />
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto rounded-xl shadow-xl  bg-[#1b101b] text-white py-8 my-11 ">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">
            Start  learning language  today
          </h2>
        
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
