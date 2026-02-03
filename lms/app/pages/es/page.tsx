'use client'
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon, BookOpenIcon, PlayIcon, LinkIcon, ArrowRightIcon, ArrowLeftIcon, AcademicCapIcon, CheckCircleIcon, XCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { COMPLETE_COURSE_DATA } from './unit1Data'
import { useRouter } from 'next/navigation'

const EnvironmentalScienceLMS = () => {
  const router = useRouter()
  const [activeUnit, setActiveUnit] = useState<number | null>(null)
  const [activeModule, setActiveModule] = useState<string | null>(null)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showFinalQuiz, setShowFinalQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const courseData = COMPLETE_COURSE_DATA || {
    courseInfo: {
      title: "Environmental Science",
      code: "2401160101",
      regulation: "GGUBT-24",
      semester: "II B.Tech - II Semester",
      credits: "2-0-0-2",
      hours: "28 Contact Hours"
    },
    units: [
      {
        id: 1,
        title: "Environment and Ecosystem",
        modules: [
          {
            id: "env-def",
            title: "Definition, Scope and Importance",
            content: {
              definition: "🌍 Environment is like our planet's life support system! It includes everything around us - the air we breathe, water we drink, soil that grows our food, and all living creatures. Think of it as a giant web where everything is connected.",
              simpleExplanation: "Imagine Earth as a huge house where humans, animals, plants, air, water, and soil all live together. The environment is this entire house and how all the residents interact with each other!",
              scope: "Environmental Science is like being a detective for nature! It combines different subjects to solve environmental mysteries:",
              scopeDetails: [
                "🔬 Physical Sciences: Understanding weather, climate, and earth processes",
                "🧬 Biology: Studying plants, animals, and how they live together",
                "💻 Technology: Using computers and satellites to monitor nature",
                "👥 Social Studies: Learning how humans affect the environment"
              ],
              importance: [
                "🌱 Helps us understand how our actions affect nature",
                "💧 Teaches us to save water, air, and soil for future kids",
                "🏭 Shows us how to reduce pollution from factories and cars",
                "♻️ Guides us to live in a way that doesn't harm the planet",
                "🌡️ Helps fight climate change and global warming"
              ],
              realExamples: [
                "When you plant a tree, you're helping the environment by providing oxygen",
                "Recycling plastic bottles reduces waste and saves resources",
                "Using bicycles instead of cars reduces air pollution",
                "Solar panels convert sunlight into clean electricity"
              ],
              images: [
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
                "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=400&fit=crop",
                "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
              ],
              videos: ["dQw4w9WgXcQ", "5QxxaVfgQ3k"],
              quiz: {
                questions: [
                  {
                    id: "q1",
                    question: "What does 'Environment' include?",
                    options: ["Only plants and animals", "Everything around us - air, water, soil, and living things", "Only non-living things", "Only human-made things"],
                    correct: 1
                  },
                  {
                    id: "q2",
                    question: "Environmental Science combines which subjects?",
                    options: ["Only Biology", "Only Chemistry", "Multiple subjects like Biology, Chemistry, Physics, and Social Studies", "Only Physics"],
                    correct: 2
                  },
                  {
                    id: "q3",
                    question: "Why is environmental awareness important?",
                    options: ["To increase pollution", "To help us live without harming nature", "To use more resources", "To build more factories"],
                    correct: 1
                  }
                ]
              }
            }
          },
          {
            id: "ecosystem",
            title: "Ecosystem Structure and Function",
            content: {
              definition: "🏘️ An ecosystem is like a neighborhood where all living things (plants, animals, bacteria) live together with non-living things (air, water, soil) and help each other survive!",
              simpleExplanation: "Think of a forest as a big apartment building. Trees are like the building structure, animals are residents, soil is the foundation, and sunlight is the electricity that powers everything. Everyone has a job and helps others!",
              components: {
                biotic: [
                  "🌱 Producers (Green Plants) - The 'food makers' who cook using sunlight",
                  "🐰 Primary Consumers (Plant-eaters) - Animals like rabbits who eat plants",
                  "🦅 Secondary Consumers (Meat-eaters) - Animals like eagles who hunt others",
                  "🍄 Decomposers (Bacteria & Fungi) - Nature's cleanup crew who recycle dead things"
                ],
                abiotic: [
                  "🌡️ Temperature - Controls how fast life processes happen",
                  "☀️ Sunlight - Provides energy for plants to make food",
                  "💧 Water - Essential for all living things to survive",
                  "🌱 Soil - Provides nutrients and home for plants",
                  "🌬️ Air - Provides oxygen for breathing and CO2 for plants",
                  "⚡ Minerals - Building blocks that living things need to grow"
                ]
              },
              functions: [
                "⚡ Energy Flow - Like electricity flowing from power plant to homes",
                "♻️ Nutrient Cycling - Nature's recycling system that never stops working",
                "📊 Population Control - Natural way to keep animal numbers balanced",
                "🔄 Succession - How ecosystems grow and change over time"
              ],
              examples: [
                "🏞️ Pond Ecosystem: Algae make food → Fish eat algae → Birds eat fish → Bacteria clean up waste",
                "🏡 Backyard Ecosystem: Plants grow → Bees pollinate flowers → Birds eat insects → Worms enrich soil",
                "🌳 Forest Ecosystem: Trees provide oxygen → Squirrels eat nuts → Owls hunt mice → Fungi decompose leaves"
              ],
              images: [
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
                "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=400&fit=crop",
                "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop"
              ],
              videos: ["hFAOXdXZ5TM", "68tgzVaBW4g"],
              quiz: {
                questions: [
                  {
                    id: "q1",
                    question: "What are producers in an ecosystem?",
                    options: ["Animals that hunt", "Plants that make their own food", "Bacteria that decompose", "Consumers that eat meat"],
                    correct: 1
                  },
                  {
                    id: "q2",
                    question: "Which is an abiotic component?",
                    options: ["Trees", "Animals", "Sunlight", "Bacteria"],
                    correct: 2
                  },
                  {
                    id: "q3",
                    question: "What do decomposers do?",
                    options: ["Make food from sunlight", "Hunt other animals", "Break down dead organisms", "Eat only plants"],
                    correct: 2
                  }
                ]
              }
            }
          },
          {
            id: "food-chains",
            title: "Food Chains and Ecological Pyramids",
            content: {
              definition: "🍽️ A food chain is like a cafeteria line where energy and nutrients pass from one living thing to another. It shows 'who eats whom' in nature!",
              simpleExplanation: "Imagine a simple story: Grass grows using sunlight → Rabbit eats grass → Fox eats rabbit → When fox dies, bacteria break it down to feed grass again. It's nature's way of sharing energy!",
              types: [
                "🌱 Grazing Food Chain: Starts with green plants (Grass → Rabbit → Fox → Bacteria)",
                "🍂 Detritus Food Chain: Starts with dead leaves and waste (Dead leaves → Earthworms → Birds → Decomposers)"
              ],
              pyramids: [
                "🔢 Pyramid of Numbers: Shows how many organisms are at each level (Many plants → Few herbivores → Fewer carnivores)",
                "⚖️ Pyramid of Biomass: Shows the total weight of organisms at each level",
                "⚡ Pyramid of Energy: Shows how much energy flows through each level (Most energy in plants, least in top predators)"
              ],
              examples: [
                "🌾 Farm Food Chain: Wheat → Mouse → Snake → Hawk",
                "🌊 Ocean Food Chain: Algae → Small fish → Big fish → Shark",
                "🌳 Forest Food Chain: Leaves → Caterpillar → Bird → Cat"
              ],
              images: [
                "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=400&fit=crop",
                "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop",
                "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop"
              ],
              videos: ["TE6wqG4nb3M", "hLq2datPo5M"],
              quiz: {
                questions: [
                  {
                    id: "q1",
                    question: "What starts a grazing food chain?",
                    options: ["Dead animals", "Green plants", "Carnivores", "Decomposers"],
                    correct: 1
                  },
                  {
                    id: "q2",
                    question: "In a pyramid of numbers, which level has the most organisms?",
                    options: ["Top carnivores", "Secondary consumers", "Primary consumers", "Producers"],
                    correct: 3
                  }
                ]
              }
            }
          }
        ]
      },
      {
        id: 2,
        title: "Natural Resources",
        modules: [
          {
            id: "energy-resources",
            title: "Renewable and Non-renewable Energy",
            content: {
              definition: "⚡ Energy resources are like nature's power banks that give us electricity and fuel for our daily needs!",
              renewable: {
                definition: "♻️ Renewable energy is like a magic power source that never runs out!",
                types: [
                  "☀️ Solar Energy - Power from sunlight (like solar panels on roofs)",
                  "💨 Wind Energy - Power from moving air (like windmills)",
                  "💧 Hydroelectric - Power from flowing water (like dams)",
                  "🌋 Geothermal - Power from Earth's heat (like hot springs)",
                  "🌱 Biomass - Power from plants and organic waste"
                ],
                advantages: ["Never runs out", "Clean and doesn't pollute", "Free after initial setup"]
              },
              nonRenewable: {
                definition: "⛽ Non-renewable energy comes from sources that will eventually run out",
                types: [
                  "⚫ Coal - Ancient plants compressed over millions of years",
                  "🛢️ Oil/Petroleum - Ancient sea creatures turned into liquid fuel",
                  "💨 Natural Gas - Clean-burning gas found underground",
                  "☢️ Nuclear Fuel - Energy from splitting atoms"
                ],
                problems: ["Will run out someday", "Causes pollution", "Contributes to global warming"]
              },
              examples: [
                "Your house solar panels use renewable solar energy",
                "Cars mostly use non-renewable gasoline",
                "Wind farms generate clean electricity",
                "Coal power plants burn fossil fuels"
              ],
              images: [
                "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop",
                "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=400&fit=crop",
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop"
              ],
              videos: ["20Vb6hlLQSg", "6fv6J5eDFV4"],
              quiz: {
                questions: [
                  {
                    id: "q1",
                    question: "Which is a renewable energy source?",
                    options: ["Coal", "Solar power", "Oil", "Natural gas"],
                    correct: 1
                  },
                  {
                    id: "q2",
                    question: "What's the main problem with non-renewable energy?",
                    options: ["Too expensive", "Will eventually run out", "Too clean", "Too efficient"],
                    correct: 1
                  }
                ]
              }
            }
          }
        ]
      }
    ],
    finalQuiz: {
      questions: [
        {
          id: "fq1",
          question: "What is the main component of environment?",
          options: ["Only living things", "Only non-living things", "Both living and non-living things", "Only humans"],
          correct: 2
        },
        {
          id: "fq2",
          question: "Who are the producers in an ecosystem?",
          options: ["Animals", "Green plants", "Bacteria", "Humans"],
          correct: 1
        },
        {
          id: "fq3",
          question: "Which energy source is renewable?",
          options: ["Coal", "Oil", "Wind", "Natural gas"],
          correct: 2
        },
        {
          id: "fq4",
          question: "What starts a food chain?",
          options: ["Carnivores", "Producers", "Decomposers", "Consumers"],
          correct: 1
        },
        {
          id: "fq5",
          question: "Environmental Science is:",
          options: ["Only about plants", "Only about animals", "Study of interaction between living and non-living things", "Only about pollution"],
          correct: 2
        }
      ]
    },
    references: {
      textbooks: [
        "Environmental Studies for Undergraduate Courses by Erach Bharucha",
        "Environmental Studies by Palaniswamy – Pearson Education",
        "Environmental Studies by Dr.S.Azeem Unnisa"
      ],
      referenceBooks: [
        "Environmental Science by Deeksha Dave and E.Sai Baba Reddy",
        "Environmental Sciences and Technology by M.Anji Reddy",
        "Comprehensive Environmental Studies by J.P.Sharma"
      ],
      webLinks: [
        "https://www.edx.org/learn/environmental-science",
        "http://ecoursesonline.iasri.res.in/Courses/Environmental%20Science",
        "https://onlinecourses.nptel.ac.in/noc23_hs55/preview",
        "https://www.ugc.ac.in/oldpdf/modelcurriculum/env.pdf"
      ]
    }
  }

  const getAllModules = () => {
    const allModules: Array<{unitId: number, moduleId: string, title: string}> = []
    courseData.units.forEach(unit => {
      unit.modules.forEach(module => {
        allModules.push({unitId: unit.id, moduleId: module.id, title: module.title})
      })
    })
    return allModules
  }

  const getCurrentModuleIndex = () => {
    const allModules = getAllModules()
    return allModules.findIndex(m => m.moduleId === activeModule)
  }

  const goToNextModule = () => {
    const allModules = getAllModules()
    const currentIndex = getCurrentModuleIndex()
    if (currentIndex < allModules.length - 1) {
      const nextModule = allModules[currentIndex + 1]
      setActiveUnit(nextModule.unitId)
      setActiveModule(nextModule.moduleId)
      setShowQuiz(false)
      setQuizSubmitted(false)
      setQuizAnswers({})
    }
  }

  const goToPreviousModule = () => {
    const allModules = getAllModules()
    const currentIndex = getCurrentModuleIndex()
    if (currentIndex > 0) {
      const prevModule = allModules[currentIndex - 1]
      setActiveUnit(prevModule.unitId)
      setActiveModule(prevModule.moduleId)
      setShowQuiz(false)
      setQuizSubmitted(false)
      setQuizAnswers({})
    }
  }

  const toggleUnit = (unitId: number) => {
    setActiveUnit(activeUnit === unitId ? null : unitId)
    setActiveModule(null)
    setShowQuiz(false)
    setShowFinalQuiz(false)
  }

  const selectModule = (moduleId: string) => {
    setActiveModule(moduleId)
    setShowQuiz(false)
    setQuizSubmitted(false)
    setQuizAnswers({})
    setShowFinalQuiz(false)
  }

  const getCurrentModule = () => {
    if (!activeModule) return null
    for (const unit of courseData.units) {
      const module = unit.modules.find(m => m.id === activeModule)
      if (module) return module
    }
    return null
  }

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({...prev, [questionId]: answer}))
  }

  const submitQuiz = () => {
    setQuizSubmitted(true)
  }

  const getQuizScore = (quiz: any) => {
    let correct = 0
    quiz.questions.forEach((q: any) => {
      if (quizAnswers[q.id] === q.options[q.correct]) {
        correct++
      }
    })
    return { correct, total: quiz.questions.length }
  }

  const renderQuiz = (quiz: any, title: string) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <AcademicCapIcon className="w-6 h-6 mr-2" />
        {title}
      </h3>
      
      {!quizSubmitted ? (
        <div className="space-y-6">
          {quiz.questions.map((question: any, qIndex: number) => (
            <div key={question.id} className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">
                {qIndex + 1}. {question.question}
              </h4>
              <div className="space-y-2">
                {question.options.map((option: string, oIndex: number) => (
                  <label key={oIndex} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      onChange={() => handleQuizAnswer(question.id, option)}
                      className="text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          
          <button
            onClick={submitQuiz}
            disabled={Object.keys(quizAnswers).length < quiz.questions.length}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            Submit Quiz
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircleIcon className="w-6 h-6 text-green-600 mr-2" />
              <span className="font-medium">
                Quiz Completed! Score: {getQuizScore(quiz).correct}/{getQuizScore(quiz).total}
              </span>
            </div>
          </div>
          
          {quiz.questions.map((question: any, qIndex: number) => (
            <div key={question.id} className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">
                {qIndex + 1}. {question.question}
              </h4>
              <div className="space-y-1">
                {question.options.map((option: string, oIndex: number) => {
                  const isCorrect = oIndex === question.correct
                  const isSelected = quizAnswers[question.id] === option
                  return (
                    <div
                      key={oIndex}
                      className={`p-2 rounded ${
                        isCorrect
                          ? 'bg-green-100 text-green-800'
                          : isSelected
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        {isCorrect && <CheckCircleIcon className="w-4 h-4 mr-2" />}
                        {isSelected && !isCorrect && <XCircleIcon className="w-4 h-4 mr-2" />}
                        {option}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg overflow-y-auto">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">{courseData.courseInfo.title}</h1>
          <p className="text-sm text-gray-600">{courseData.courseInfo.code}</p>
          <p className="text-sm text-gray-600">{courseData.courseInfo.semester}</p>
        </div>
        
        <div className="p-4">
          <button
            onClick={() => router.push('/pages/livebooks')}
            className="w-full mb-4 p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeftCircleIcon className="w-5 h-5" />
            Back to Live Books
          </button>
          {courseData.units.map((unit) => (
            <div key={unit.id} className="mb-2">
              <button
                onClick={() => toggleUnit(unit.id)}
                className="w-full flex items-center justify-between p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <span className="font-medium text-gray-800">Unit {unit.id}: {unit.title}</span>
                {activeUnit === unit.id ? 
                  <ChevronDownIcon className="w-5 h-5" /> : 
                  <ChevronRightIcon className="w-5 h-5" />
                }
              </button>
              
              {activeUnit === unit.id && (
                <div className="mt-2 ml-4 space-y-1">
                  {unit.modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => selectModule(module.id)}
                      className={`w-full text-left p-2 rounded text-sm transition-colors ${
                        activeModule === module.id 
                          ? 'bg-blue-200 text-blue-800' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {module.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <button
            onClick={() => setShowFinalQuiz(true)}
            className="w-full mt-4 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            📝 Final Quiz
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {showFinalQuiz ? (
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Final Quiz - Environmental Science</h1>
              {renderQuiz(courseData.finalQuiz, "Complete Course Assessment")}
            </div>
          </div>
        ) : !activeModule ? (
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Environmental Science</h1>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Course Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><strong>Course Code:</strong> {courseData.courseInfo.code}</p>
                    <p><strong>Regulation:</strong> {courseData.courseInfo.regulation}</p>
                    <p><strong>Semester:</strong> {courseData.courseInfo.semester}</p>
                  </div>
                  <div>
                    <p><strong>Credits:</strong> {courseData.courseInfo.credits}</p>
                    <p><strong>Contact Hours:</strong> {courseData.courseInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Course Objectives</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>To make students aware of environmental issues</li>
                  <li>To understand the unity of life and lifestyle implications</li>
                  <li>To understand the importance of protecting natural resources</li>
                  <li>To understand causes of environmental pollution</li>
                  <li>To save earth from engineering inventions</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Course Units</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courseData.units.map((unit) => (
                    <div key={unit.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-blue-600">Unit {unit.id}</h3>
                      <p className="text-gray-700">{unit.title}</p>
                      <p className="text-sm text-gray-500 mt-2">{unit.modules.length} modules</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              {(() => {
                const module = getCurrentModule()
                if (!module) return null

                return (
                  <div>
                    {/* Navigation Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h1 className="text-3xl font-bold text-gray-800">{module.title}</h1>
                      <div className="flex space-x-2">
                        <button
                          onClick={goToPreviousModule}
                          disabled={getCurrentModuleIndex() === 0}
                          className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400"
                        >
                          <ArrowLeftIcon className="w-4 h-4 mr-2" />
                          Previous
                        </button>
                        <button
                          onClick={goToNextModule}
                          disabled={getCurrentModuleIndex() === getAllModules().length - 1}
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                        >
                          Next
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Module Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {module.content.images?.map((image: string, index: number) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`${module.title} ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      ))}
                    </div>

                    {/* Module Content */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                      <div className="prose max-w-none">
                        {module.content.definition && (
                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">🎯 What is it?</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">{module.content.definition}</p>
                          </div>
                        )}

                        {module.content.simpleExplanation && (
                          <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">💡 Simple Explanation</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">{module.content.simpleExplanation}</p>
                          </div>
                        )}

                        {Object.entries(module.content).map(([key, value]) => {
                          if (['definition', 'simpleExplanation', 'images', 'videos', 'quiz'].includes(key)) return null
                          
                          return (
                            <div key={key} className="mb-6">
                              <h3 className="text-xl font-semibold mb-3 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                              </h3>
                              {Array.isArray(value) ? (
                                <ul className="space-y-2">
                                  {value.map((item, index) => (
                                    <li key={index} className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-3 rounded-lg">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              ) : typeof value === 'object' ? (
                                <div className="space-y-4">
                                  {Object.entries(value).map(([subKey, subValue]) => (
                                    <div key={subKey} className="bg-gray-50 p-4 rounded-lg">
                                      <h4 className="font-medium text-gray-800 capitalize mb-2">
                                        {subKey.replace(/([A-Z])/g, ' $1')}:
                                      </h4>
                                      {Array.isArray(subValue) ? (
                                        <ul className="space-y-1">
                                          {subValue.map((item, index) => (
                                            <li key={index} className="text-gray-700 ml-4">{item}</li>
                                          ))}
                                        </ul>
                                      ) : (
                                        <p className="text-gray-700 ml-4">{subValue}</p>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-gray-700 text-lg leading-relaxed">{value}</p>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Embedded YouTube Videos */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <PlayIcon className="w-6 h-6 mr-2" />
                        📺 Watch & Learn
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {module.content.videos?.map((videoId: string, index: number) => (
                          <div key={index} className="aspect-video">
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title={`${module.title} Video ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="rounded-lg"
                            ></iframe>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Module Quiz */}
                    {!showQuiz ? (
                      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold flex items-center">
                            <AcademicCapIcon className="w-6 h-6 mr-2" />
                            Test Your Knowledge
                          </h3>
                          <button
                            onClick={() => setShowQuiz(true)}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                          >
                            Start Quiz
                          </button>
                        </div>
                        <p className="text-gray-600 mt-2">
                          Take a quick quiz to test your understanding of this module!
                        </p>
                      </div>
                    ) : (
                      renderQuiz(module.content.quiz, `Quiz: ${module.title}`)
                    )}

                    {/* References */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <BookOpenIcon className="w-6 h-6 mr-2" />
                        📚 Learn More
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">📖 Textbooks</h4>
                          <ul className="space-y-1">
                            {courseData.references.textbooks.map((book, index) => (
                              <li key={index} className="text-sm text-gray-700">• {book}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">📚 Reference Books</h4>
                          <ul className="space-y-1">
                            {courseData.references.referenceBooks.map((book, index) => (
                              <li key={index} className="text-sm text-gray-700">• {book}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                          <LinkIcon className="w-4 h-4 mr-1" />
                          🌐 Online Resources
                        </h4>
                        <div className="space-y-1">
                          {courseData.references.webLinks.map((link, index) => (
                            <a 
                              key={index}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EnvironmentalScienceLMS