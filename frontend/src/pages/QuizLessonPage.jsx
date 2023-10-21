import Modal from "../components/Modal";
import React, { useState, useEffect ,useContext} from "react";
import Context from '../contexts/quiz-data-conext';
import LessonContext from '../contexts/lesson-context'
import { useNavigate } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Progress } from 'semantic-ui-react';




// export default ProgressExampleProgress
export default function QuizLessonPage() {
  const { quizData, setQuizData } = useContext(Context);
  console.log("quizData from lessons page", quizData )
  const {setQuestionsData} = useContext(LessonContext )
  const navigate = useNavigate();
  const fetchLessonData = (quizId, levelId) => {
 
    console.log("i was quicked")
    console.log("button clickedq", quizId,levelId)
    fetch(`api/lessons-quizzes/${quizId}-${levelId}`)
    .then(response => response.json())
    .then(data => {
      setQuestionsData(data)
      console.log("data being fetch", data)
      navigate("/quiz");
      // Update quizData with the new data
      // setQuizData(prevData => [...prevData, ...data]);
    })
    .catch(error => console.error(error));
  };

  
  const renderModal = () => {
    if (showModal) {
      return (
        <Modal closeModal={() => setShowModal(true)} />
      );
    }
    return null; // Return null if showModal is false
  };




  {/* <button

    className="lesson-button show-modalbutton button-52"
    onClick={() => setShowModal(true)}
  >
    Spanish Lesson 1
  </button>
  <button
    className="button-52"
    disabled={userProgress < 85} // Disable the button until progress reaches 85%
  >
    Spanish Lesson 2
  </button> */}
  // <div style={{backgroundColor:"#fff8f4"}} className="centered-container">
  //   <h1 style={{fontSize:"40px"}}>Spanish Lessons</h1>
  //   <br/>


  //   <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
  //     <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
  //     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
  //     </span>
  //     <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
  //     <span class="relative invisible">Button Text</span>
  //     </a>
  //   {showModal && <Modal closeModal={() => setShowModal(false)} />}
  // </div>


  {/* {quizData.map(item => (
    item.quiz_id === 1 && (
      <button key={item.id} onClick={() => fetchLessonData(item.quiz_id, item.level_id)}>
      {item.lessons}
      </button>
      )
    ))} */}
    return (
      <>
     
            <>
            {/* <ProgressExampleProgress /> */}
          {/* <div className="relative mb-5 py-9">
            <div className="rounded-full border border-red-500 p-1">
              <div className="flex h-6 items-center justify-center rounded-full bg-red-300 text-xs leading-none" style={{ width: "85%", height: "85%" }}>
                <span className="p-1 text-white">1%</span>
              </div>
            </div>
          </div> */}
        </>
        <br/>
        <div style={{ backgroundColor: "#fff8f4" }} className="h-full">
          <div className="container mx-auto lg:px-20">
            <div className="grid grid-cols-1 h-full pb-40">
              <div className="border-r border-gray-300 mx-2 lg:pl-20">
                <div className="py-10 pb-3 h-4/6 relative bg-indigo-50 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300 flex flex-col items-center justify-center">
                  <div>
                    <div className="w-4 h-1/5 bg-red-50 absolute right-0 -top-48 bg-red-100 group-hover:bg-purple-50"></div>
                    <img
                      src="https://cdn.dribbble.com/userupload/9159316/file/original-8cbf73ab1c69afb739aa8ddbcc4fea59.jpg?crop=0x0-2998x2249&resize=400x300&vertical=center"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <div className="px-7 text-center">
                    <h1 className="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">01.</h1>
                    <h2 className="text-1xl mt-4 font-bold">Lesson 1</h2>
                    <p className="mt-5 opacity-60 group-hover:opacity-70">Beginner Friendly Greetings</p>
                    <div href="#_" className="relative flex items-center justify-center px-8 py-4 font-bold text-black group mt-3">
                      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                      {quizData.map((topic) => (
                        <div key={topic.id}>
                          {console.log("topic",topic)}
                          {topic.lessons === 'lessons 1 basic' && topic.quiz_id === 1 && (
                            <span
                              className="relative block text-center bg-transparent cursor-pointer"
                              onClick={() => fetchLessonData(topic.quiz_id, topic.level_id)}
                            >
                              {topic.lessons}
                            </span>
                          )}
                        </div>
                      ))}
{/*                       
                      {quizData.map(topic => (
                          <div key={topic.id}>
                            {topic.lesson === 'lesson 1' && (
                              <span className="relative block text-center bg-transparent cursor-pointer" onClick={() => fetchLessonData(topic.quiz_id, topic.level_id)}>
                                {topic.lessons}
                              </span>
                            )}
                          </div>
                        ))} */}
{/* 
{quizData.map((topic) => (
  <div key={topic.id}>
    {topic.lessons === 'lessons 1' && (
      <span
        className="relative block text-center bg-transparent cursor-pointer"
        onClick={() => fetchLessonData(topic.quiz_id, topic.level_id)}
      >
        {topic.lessons}
      </span>
    )}
  </div>
))} */}


                      
                      {/* <div>
                      <button className="showModalbutton" onClick={() => setShowModal(true)}>
                        Show Modal
                      </button>
                      {console.log("showModal state:", showModal)}

                      {/* Call the renderModal function */}
                    {/* {renderModal()} */}
                    </div> 
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="border-r border-gray-300 mx-3 lg:pl-20">
                <div className="py-10 pb-3 mt-5 h-4/6 relative bg-blue-200 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300 flex flex-col items-center justify-center">
                  <div>
                    <div className="w-4 h-1/5 bg-red-50 absolute right-0 -top-48 bg-indigo-100 group-hover:bg-indigo-50"></div>
                    <img
                      src="https://minutes.co/wp-content/uploads/2019/07/difficult-people.jpg"
                      className="max-w-3/4 h-auto"
                      style={{ maxHeight: "300px" }}
                      alt="Image 2"
                      />
                  </div>
                  <div className="px-7 text-center mt-7">
                    <h1 className="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">02.</h1>
                    <h2 className="text-1xl mt-4 font-bold">Lesson 2</h2>
                    <p className="mt-2 opacity-60 group-hover:opacity-70"></p>
                    <div href="#_" className="relative flex items-center justify-center px-8 py-4 font-bold text-black group mt-3">
                      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-indigo-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                      <span className="relative text-lg"> Get Started</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
                      {/* {showModal && <Modal closeModal={() => setShowModal(false)} />} */}
      </>
    );
  }


  