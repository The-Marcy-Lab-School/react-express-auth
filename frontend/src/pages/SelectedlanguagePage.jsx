
import React, { useState, useEffect, useContext } from "react";
import QuizDataContext from '../contexts/quiz-data-conext';
import { useNavigate } from "react-router-dom";

export default function SelectedLanguagePage({ children }) {
  const [quiz_topics, setTopics] = useState([]);
  //const [selectedTopic, setSelectedTopic] = useState(null);
  const { setQuizData } = useContext(QuizDataContext)
 const navigate = useNavigate();
  useEffect(() => {
    fetch('api/q')
      .then(response => response.json())
      .then(data => {
        setTopics(data);
      })
      .catch(error => console.error(error));
  }, []);


  const fetchQuizData = (quizId) => {
    // console.log("quizId", quizId)
    // fetch(`api/lessons/${quizId}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("fetch quiz data", data)
    //     setQuizData(data);
    //     navigate("/lesson");
    //   })
    //   .catch(error => console.error(error));
    console.log("id of button clicked",quizId)
      setQuizData(quizId);
      navigate("/quiz-lesson");

  };
 
  return (
    <>
<div style={{backgroundColor:"#fff8f4"}} className="h-full">
    <div className="container mx-auto  lg:px-20" >
        <div className='grid grid-cols-3 h-full pb-40'>
            <div className="border-r border-gray-300 mx-3 lg:pl-20">
                <div className=" py-10 pb-3 mt-72 h-4/6 relative bg-green-100 group hover:bg-white-200 cursor-pointer transition ease-out duration-300"> 
                    <div>
                        <div className="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-purple-100 group-hover:bg-purple-50"></div>
                        <img src="https://d21buns5ku92am.cloudfront.net/65468/images/406053-Blog%20Post%20Spain-c0c9b0-large-1635929557.png"/>
                    </div>
                    <div className="px-7 mt-5">
                      <h1 className="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">Español</h1>
                      <p className="mt-2 opacity-60 group-hover:opacity-70">Like most languages, Spanish has its own very unique words which can’t be translated in other languages</p>
                      <br />
                      <div className="relative px-3 py-5 font-bold text-black group inline-block">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-green-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        {quiz_topics.map(topic => (
                          <div key={topic.id}>
                            {topic.topic === 'Spanish' && (
                              <span className="relative block text-center bg-transparent cursor-pointer" onClick={() => fetchQuizData(topic.id)}>
                                Get Started
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
            <div className="border-r border-gray-300 mx-3 lg:pl-20">
                <div className=" py-10  pb-3 mt-32 h-4/6 relative bg-orange-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300"> 
                    <div>
                        <div className="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-indigo-100  group-hover:bg-indigo-50"></div>
                        <img src="https://cdn.dribbble.com/users/2893989/screenshots/14742053/media/f85d6542e8f0a3d8bca3c5561a9f32a6.png?resize=400x0"/>
                    </div>
                   <div className="px-7 mt-5">
                        <h1 className="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">Français</h1>
                        <p className="text-1xl mt-2 opacity-60 group-hover:opacity-70 ">About 45% of modern English words are of French origin</p>
                        <br />
                        <div className="relative px-3 py-5 font-bold text-black group inline-block">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        {quiz_topics.map(topic => (
                          <div key={topic.id}>
                            {topic.topic === 'French' && (
                              <span className="relative block text-center bg-transparent cursor-pointer" onClick={() => fetchQuizData(topic.id)}>
                                Get Started
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      
                    </div>
                </div>
            </div>
            <div className="border-r border-gray-300 mx-3 lg:pl-20">
                <div className=" py-10 pb-3 mt-5 h-4/6 relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300"> 
                     <div>
                        <div className="w-4 h-1/5 bg-red-50	absolute right-0 -bottom-44 bg-red-100 group-hover:bg-red-50"></div>
                        <img src="https://cdn.dribbble.com/users/916264/screenshots/7908122/japan.png" />
                    </div>
                    <div className="px-7 mt-5">
                        <h1 className="text-3xl font-bold group-hover:text-red-300 transition ease-out duration-300">日本語</h1>
                        <p>(Nihongo/Japanese)</p>
                        <p className=" text-sm mt-2 opacity-60 group-hover:opacity-70 ">Japanese is the ninth most spoken language in the world</p>
                        <br />
                        <div className="relative px-3 py-5 font-bold text-black group inline-block">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-pink-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        {quiz_topics.map(topic => (
                          <div key={topic.id}>
                            {topic.topic === 'Japanese' && (
                              <span className="relative block text-center bg-transparent cursor-pointer" onClick={() => fetchQuizData(topic.id)}>
                                Get Started
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}
