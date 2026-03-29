"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen, Award, Trophy, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type TestLevel = "STARTERS" | "MOVERS" | "FLYERS"

interface Question {
  id: number
  question: string
  image?: string
  options: { label: string; value: string }[]
  correctAnswer: string
}

const questionBank: Record<TestLevel, { questions: Question[]; timeLimit: number }> = {
  STARTERS: {
    timeLimit: 20,
    questions: [
      {
        id: 1,
        question: "This is a dog",
        image: "/cute-dog.png",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 2,
        question: "This is a teacher",
        image: "/diverse-classroom-teacher.png",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 3,
        question: "These are apples",
        image: "/red-apples.png",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 4,
        question: "This is a cat",
        image: "/orange-cat.png",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 5,
        question: "This is a tree",
        image: "/green-tree.jpg",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 6,
        question: "This is a bird",
        image: "/colorful-bird.jpg",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 7,
        question: "These are books",
        image: "/stacked-books.jpg",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 8,
        question: "This is a house",
        image: "/modern-house.jpg",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 9,
        question: "This is a car",
        image: "/red-car.jpg",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
      {
        id: 10,
        question: "These are flowers",
        image: "/colorful-flowers.jpg",
        options: [
          { label: "✓", value: "correct" },
          { label: "✗", value: "incorrect" },
        ],
        correctAnswer: "correct",
      },
    ],
  },
  MOVERS: {
    timeLimit: 25,
    questions: [
      {
        id: 1,
        question: "What color is the sky?",
        options: [
          { label: "Blue", value: "blue" },
          { label: "Red", value: "red" },
          { label: "Green", value: "green" },
          { label: "Yellow", value: "yellow" },
        ],
        correctAnswer: "blue",
      },
      {
        id: 2,
        question: "How many legs does a cat have?",
        options: [
          { label: "Two", value: "two" },
          { label: "Four", value: "four" },
          { label: "Six", value: "six" },
          { label: "Eight", value: "eight" },
        ],
        correctAnswer: "four",
      },
      {
        id: 3,
        question: "What do you use to write?",
        options: [
          { label: "Pen", value: "pen" },
          { label: "Spoon", value: "spoon" },
          { label: "Fork", value: "fork" },
          { label: "Plate", value: "plate" },
        ],
        correctAnswer: "pen",
      },
      {
        id: 4,
        question: "Which one is a fruit?",
        options: [
          { label: "Carrot", value: "carrot" },
          { label: "Apple", value: "apple" },
          { label: "Potato", value: "potato" },
          { label: "Onion", value: "onion" },
        ],
        correctAnswer: "apple",
      },
      {
        id: 5,
        question: "What season comes after winter?",
        options: [
          { label: "Summer", value: "summer" },
          { label: "Fall", value: "fall" },
          { label: "Spring", value: "spring" },
          { label: "Winter", value: "winter" },
        ],
        correctAnswer: "spring",
      },
      {
        id: 6,
        question: "Where do fish live?",
        options: [
          { label: "Trees", value: "trees" },
          { label: "Water", value: "water" },
          { label: "Sky", value: "sky" },
          { label: "Ground", value: "ground" },
        ],
        correctAnswer: "water",
      },
      {
        id: 7,
        question: "What do you use to eat soup?",
        options: [
          { label: "Fork", value: "fork" },
          { label: "Knife", value: "knife" },
          { label: "Spoon", value: "spoon" },
          { label: "Chopsticks", value: "chopsticks" },
        ],
        correctAnswer: "spoon",
      },
      {
        id: 8,
        question: "Which animal can fly?",
        options: [
          { label: "Dog", value: "dog" },
          { label: "Cat", value: "cat" },
          { label: "Bird", value: "bird" },
          { label: "Fish", value: "fish" },
        ],
        correctAnswer: "bird",
      },
      {
        id: 9,
        question: "What time do you usually eat breakfast?",
        options: [
          { label: "Morning", value: "morning" },
          { label: "Afternoon", value: "afternoon" },
          { label: "Evening", value: "evening" },
          { label: "Night", value: "night" },
        ],
        correctAnswer: "morning",
      },
      {
        id: 10,
        question: "How many days are in a week?",
        options: [
          { label: "Five", value: "five" },
          { label: "Six", value: "six" },
          { label: "Seven", value: "seven" },
          { label: "Eight", value: "eight" },
        ],
        correctAnswer: "seven",
      },
    ],
  },
  FLYERS: {
    timeLimit: 30,
    questions: [
      {
        id: 1,
        question: "Which word is a synonym for 'happy'?",
        options: [
          { label: "Sad", value: "sad" },
          { label: "Joyful", value: "joyful" },
          { label: "Angry", value: "angry" },
          { label: "Tired", value: "tired" },
        ],
        correctAnswer: "joyful",
      },
      {
        id: 2,
        question: "What is the capital of France?",
        options: [
          { label: "London", value: "london" },
          { label: "Paris", value: "paris" },
          { label: "Berlin", value: "berlin" },
          { label: "Madrid", value: "madrid" },
        ],
        correctAnswer: "paris",
      },
      {
        id: 3,
        question: "Which sentence is correct?",
        options: [
          { label: "She go to school", value: "a" },
          { label: "She goes to school", value: "b" },
          { label: "She going to school", value: "c" },
          { label: "She gone to school", value: "d" },
        ],
        correctAnswer: "b",
      },
      {
        id: 4,
        question: "What is 15 + 27?",
        options: [
          { label: "32", value: "32" },
          { label: "42", value: "42" },
          { label: "52", value: "52" },
          { label: "62", value: "62" },
        ],
        correctAnswer: "42",
      },
      {
        id: 5,
        question: "Which is the largest ocean?",
        options: [
          { label: "Atlantic", value: "atlantic" },
          { label: "Indian", value: "indian" },
          { label: "Arctic", value: "arctic" },
          { label: "Pacific", value: "pacific" },
        ],
        correctAnswer: "pacific",
      },
      {
        id: 6,
        question: "What does 'reliable' mean?",
        options: [
          { label: "Trustworthy", value: "trustworthy" },
          { label: "Lazy", value: "lazy" },
          { label: "Funny", value: "funny" },
          { label: "Weak", value: "weak" },
        ],
        correctAnswer: "trustworthy",
      },
      {
        id: 7,
        question: "Which planet is closest to the Sun?",
        options: [
          { label: "Venus", value: "venus" },
          { label: "Earth", value: "earth" },
          { label: "Mercury", value: "mercury" },
          { label: "Mars", value: "mars" },
        ],
        correctAnswer: "mercury",
      },
      {
        id: 8,
        question: "What is the past tense of 'run'?",
        options: [
          { label: "Runned", value: "runned" },
          { label: "Ran", value: "ran" },
          { label: "Running", value: "running" },
          { label: "Runs", value: "runs" },
        ],
        correctAnswer: "ran",
      },
      {
        id: 9,
        question: "How many continents are there?",
        options: [
          { label: "Five", value: "five" },
          { label: "Six", value: "six" },
          { label: "Seven", value: "seven" },
          { label: "Eight", value: "eight" },
        ],
        correctAnswer: "seven",
      },
      {
        id: 10,
        question: "Which word is an antonym for 'difficult'?",
        options: [
          { label: "Hard", value: "hard" },
          { label: "Easy", value: "easy" },
          { label: "Challenging", value: "challenging" },
          { label: "Complex", value: "complex" },
        ],
        correctAnswer: "easy",
      },
    ],
  },
}

export default function KiemTraTrinhDoPage() {
  const [selectedLevel, setSelectedLevel] = useState<TestLevel | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const [testStarted, setTestStarted] = useState(false)
  const [testCompleted, setTestCompleted] = useState(false)
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [score, setScore] = useState<number | null>(null)
  const [showResultForm, setShowResultForm] = useState(false)
  const [studentInfo, setStudentInfo] = useState({
    parentName: "",
    studentName: "",
    phone: "",
  })

  const selectRandomQuestions = (level: TestLevel): Question[] => {
    const allQuestions = questionBank[level].questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 5)
  }

  const startTest = (level: TestLevel) => {
    const randomQuestions = selectRandomQuestions(level)
    setSelectedQuestions(randomQuestions)
    setSelectedLevel(level)
    setCurrentQuestion(0)
    setAnswers({})
    setScore(null)
    setTimeLeft(questionBank[level].timeLimit * 60)
    setTestStarted(true)
    setTestCompleted(false)
    setShowResultForm(false)
    setStudentInfo({ parentName: "", studentName: "", phone: "" })
  }

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index)
  }

  const nextQuestion = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const allQuestionsAnswered = () => {
    return selectedQuestions.every((q) => answers[q.id] !== undefined)
  }

  const handleSubmit = () => {
    if (!allQuestionsAnswered()) {
      alert("Vui lòng trả lời tất cả các câu hỏi trước khi nộp bài!")
      return
    }
    setTestCompleted(true)
    setShowResultForm(true)
  }

  const handleShowResults = () => {
    if (!studentInfo.parentName || !studentInfo.studentName || !studentInfo.phone) {
      alert("Vui lòng điền đầy đủ thông tin!")
      return
    }

    let correctCount = 0
    selectedQuestions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++
      }
    })
    const finalScore = (correctCount / selectedQuestions.length) * 100
    setScore(finalScore)
    setShowResultForm(false)
  }

  const currentQuestionData = selectedQuestions[currentQuestion]

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    if (testStarted && !testCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [testStarted, testCompleted, timeLeft])

  useEffect(() => {
    if (testStarted && !testCompleted && timeLeft === 0) {
      let correctCount = 0
      selectedQuestions.forEach((question) => {
        if (answers[question.id] === question.correctAnswer) {
          correctCount++
        }
      })
      const finalScore = (correctCount / selectedQuestions.length) * 100
      setScore(finalScore)
      setTestCompleted(true)
      setShowResultForm(true)
    }
  }, [testStarted, testCompleted, timeLeft, selectedQuestions, answers])

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] overflow-x-hidden">
      <Header />

      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{ backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <main className="flex-grow pt-24 pb-20 relative z-10 transition-all duration-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-widest border border-orange-200 shadow-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
              <Award className="h-4 w-4" />
              Chuẩn Quốc Tế Cambridge
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Kiểm Tra <span className="text-orange-500 italic">Trình Độ</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Đánh giá năng lực sử dụng Anh ngữ của bạn thông qua các bài test được thiết kế bởi chuyên gia, giúp bạn tìm ra lộ trình học tập tối ưu nhất.
            </p>
          </div>

          {!testStarted && !testCompleted && (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              {[
                {
                  level: "STARTERS",
                  title: "Starters",
                  subtitle: "Pre A1",
                  time: "20 phút",
                  icon: <BookOpen className="h-10 w-10 text-emerald-500" />,
                  color: "emerald",
                  desc: "Cho trẻ mới bắt đầu làm quen với tiếng Anh.",
                  btnBg: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200 hover:shadow-emerald-500/40"
                },
                {
                  level: "MOVERS",
                  title: "Movers",
                  subtitle: "Level A1",
                  time: "25 phút",
                  icon: <Award className="h-10 w-10 text-blue-500" />,
                  color: "blue",
                  desc: "Dành cho học sinh bắt đầu giao tiếp cơ bản.",
                  btnBg: "bg-blue-600 hover:bg-blue-700 shadow-blue-200 hover:shadow-blue-500/40"
                },
                {
                  level: "FLYERS",
                  title: "Flyers",
                  subtitle: "Level A2",
                  time: "30 phút",
                  icon: <Trophy className="h-10 w-10 text-orange-600" />,
                  color: "orange",
                  desc: "Hoàn thiện kỹ năng cơ bản, sẵn sàng cho lộ trình mới.",
                  btnBg: "bg-orange-600 hover:bg-orange-700 shadow-orange-200 hover:shadow-orange-500/40"
                }
              ].map((item, index) => (
                <div
                  key={item.level}
                  className={`group relative bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-white/50 p-1 md:p-1.5 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]`}
                >
                  <div className="bg-white rounded-[2rem] p-8 h-full flex flex-col items-center text-center">
                    <div className={`mb-6 p-5 rounded-3xl bg-slate-50 border border-slate-100 transition-transform group-hover:scale-110 duration-500`}>
                      {item.icon}
                    </div>

                    <h3 className="text-3xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-orange-500 transition-colors uppercase">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                        {item.subtitle}
                      </span>
                    </div>

                    <p className="text-slate-500 text-sm mb-6 leading-relaxed max-w-[200px]">
                      {item.desc}
                    </p>

                    <div className="mt-auto w-full space-y-4">
                      <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        {item.time} làm bài
                      </div>
                      <Button
                        onClick={() => startTest(item.level as TestLevel)}
                        className={`w-full py-7 text-sm font-black uppercase tracking-[0.15em] rounded-2xl transition-all duration-300 shadow-lg text-white ${item.btnBg}`}
                      >
                        Bắt Đầu Thi
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {testStarted && !testCompleted && currentQuestionData && (
            <div className="max-w-5xl mx-auto px-4">
              <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                <div className="bg-slate-900 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-2xl shadow-lg shadow-orange-500/20">
                      {selectedLevel === "STARTERS" ? <BookOpen className="text-white h-6 w-6" /> :
                        selectedLevel === "MOVERS" ? <Award className="text-white h-6 w-6" /> :
                          <Trophy className="text-white h-6 w-6" />}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xl tracking-tight uppercase leading-none mb-1">{selectedLevel}</h4>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                        Câu {currentQuestion + 1} trên {selectedQuestions.length}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-slate-300 text-sm font-bold uppercase tracking-wider">Thời gian:</span>
                      <span className="text-white text-xl font-mono font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2.5 mb-12 justify-center">
                    {selectedQuestions.map((q, index) => (
                      <button
                        key={q.id}
                        onClick={() => goToQuestion(index)}
                        className={`w-12 h-12 rounded-xl font-black transition-all duration-300 flex items-center justify-center border-2 ${index === currentQuestion
                            ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-110"
                            : answers[q.id]
                              ? "border-emerald-100 bg-emerald-50 text-emerald-600"
                              : "border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200"
                          }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <div className="max-w-3xl mx-auto space-y-10">
                    <div className="space-y-4">
                      <span className="inline-block px-3 py-1 rounded-lg bg-orange-50 text-orange-600 font-black text-[10px] uppercase tracking-widest border border-orange-100">
                        Câu hỏi {currentQuestion + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                        {currentQuestionData.question}
                      </h3>
                    </div>

                    {currentQuestionData.image && (
                      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                        <Image
                          src={currentQuestionData.image || "/placeholder.svg"}
                          alt="Question Visual"
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    )}

                    <div className="grid gap-4">
                      {currentQuestionData.options.map((option, idx) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(currentQuestionData.id, option.value)}
                          className={`group w-full p-6 md:p-8 rounded-[1.5rem] border-2 transition-all duration-300 text-left relative overflow-hidden ${answers[currentQuestionData.id] === option.value
                              ? "border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/20"
                              : "border-slate-100 bg-white hover:border-orange-200 hover:bg-orange-50/30"
                            }`}
                        >
                          <div className="flex items-center gap-6 relative z-10 font-bold text-lg md:text-xl">
                            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm transition-colors ${answers[currentQuestionData.id] === option.value
                                ? "border-white bg-white text-orange-500"
                                : "border-slate-200 text-slate-400 group-hover:border-orange-300"
                              }`}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            {option.label}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-10 border-t border-slate-100">
                      <Button
                        onClick={prevQuestion}
                        disabled={currentQuestion === 0}
                        variant="ghost"
                        className="flex items-center gap-3 text-slate-500 font-bold hover:bg-slate-50 py-6 px-6 rounded-2xl"
                      >
                        <ChevronLeft className="h-5 w-5" />
                        Quay lại
                      </Button>

                      {currentQuestion === selectedQuestions.length - 1 ? (
                        <Button
                          onClick={handleSubmit}
                          disabled={!allQuestionsAnswered()}
                          className="bg-slate-900 hover:bg-black text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl disabled:opacity-30"
                        >
                          Nộp Bài & Kết Quả
                        </Button>
                      ) : (
                        <Button
                          onClick={nextQuestion}
                          className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-orange-500/20"
                        >
                          Kế tiếp
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showResultForm && (
            <div className="max-w-2xl mx-auto px-4">
              <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-8 md:p-12 text-center space-y-10">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-orange-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">Thông Tin Nhận <span className="text-orange-500 italic">Kết Quả</span></h2>
                  <p className="text-slate-500 font-medium">Bạn đã hoàn thành bài thi! Vui lòng điền thông tin để hệ thống ghi nhận và gửi kết quả chi tiết.</p>
                </div>

                <div className="space-y-5 text-left">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Họ tên phụ huynh</label>
                    <input
                      type="text"
                      value={studentInfo.parentName}
                      onChange={(e) => setStudentInfo({ ...studentInfo, parentName: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all font-bold"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Họ tên học sinh</label>
                    <input
                      type="text"
                      value={studentInfo.studentName}
                      onChange={(e) => setStudentInfo({ ...studentInfo, studentName: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all font-bold"
                      placeholder="Nguyễn Văn B"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Số điện thoại</label>
                    <input
                      type="tel"
                      value={studentInfo.phone}
                      onChange={(e) => setStudentInfo({ ...studentInfo, phone: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all font-bold"
                      placeholder="09xx xxx xxx"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleShowResults}
                  className="w-full py-8 text-lg font-black uppercase tracking-widest bg-slate-900 hover:bg-black text-white rounded-3xl shadow-xl shadow-slate-900/20 transition-all"
                >
                  Xem Kết Quả Chi Tiết 🚀
                </Button>
              </div>
            </div>
          )}

          {score !== null && !showResultForm && (
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
                <div className={`${score >= 80 ? "bg-emerald-500" : score >= 60 ? "bg-orange-500" : "bg-red-500"
                  } p-12 text-center text-white space-y-4 relative overflow-hidden`}>

                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '15px 15px' }} />

                  <div className="relative z-10 space-y-6">
                    <div className="inline-block px-6 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-widest mb-4">
                      Kết quả cuối cùng
                    </div>
                    <div className="relative inline-block">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle cx="64" cy="64" r="60" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                        <circle cx="64" cy="64" r="60" stroke="white" strokeWidth="8" fill="none" strokeDasharray={377} strokeDashoffset={377 - (377 * score) / 100} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center font-black">
                        <span className="text-4xl">{score.toFixed(0)}</span>
                        <span className="text-[10px] uppercase tracking-tighter opacity-70">Điểm</span>
                      </div>
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tight">
                      {score >= 80 ? "Sẵn sàng tỏa sáng!" : score >= 60 ? "Thể hiện rất tốt!" : "Hãy nỗ lực thêm nhé!"}
                    </h2>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-6">
                      <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm border-b border-slate-200 pb-3">Hồ sơ học viên</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-xs font-bold uppercase">Họ tên:</span>
                          <span className="text-slate-900 font-bold">{studentInfo.studentName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-xs font-bold uppercase">Trình độ test:</span>
                          <span className="text-orange-500 font-black">{selectedLevel}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-xs font-bold uppercase">Kết quả:</span>
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${score >= 80 ? "bg-emerald-100 text-emerald-600" : score >= 60 ? "bg-orange-100 text-orange-600" : "bg-red-100 text-red-600"
                            }`}>{score >= 80 ? "Vượt mức" : score >= 60 ? "Đạt chuẩn" : "Chưa đạt"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 space-y-4 flex flex-col justify-center">
                      <h3 className="font-black text-orange-700 uppercase tracking-widest text-sm">Lời khuyên chuyên gia</h3>
                      <p className="text-orange-800 text-sm italic font-medium leading-relaxed">
                        {score >= 80 ? '"Kết quả của con rất ấn tượng! Hãy tiếp tục rèn luyện kỹ năng nâng cao để sẵn sàng cho các kỳ thi quốc tế chính thức."' :
                          score >= 60 ? '"Con có nền tảng tốt. Tập trung thêm vào phần từ vựng và cấu trúc ngữ pháp để tự tin hơn khi giao tiếp."' :
                            '"Đừng nản lòng nhé! Con cần ôn tập lại kiến thức cơ bản. GNP English luôn sẵn sàng hỗ trợ con trong hành trình này."'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm">Xem lại đáp án</h3>
                    <div className="grid gap-4">
                      {selectedQuestions.map((question, index) => {
                        const isCorrect = answers[question.id] === question.correctAnswer
                        return (
                          <div key={question.id} className={`p-6 rounded-2xl border-2 transition-all ${isCorrect ? "bg-emerald-50/50 border-emerald-100" : "bg-red-50/50 border-red-100"
                            }`}>
                            <div className="flex items-start gap-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${isCorrect ? "bg-emerald-500" : "bg-red-500"
                                }`}>
                                {isCorrect ? <CheckCircle2 className="h-4 w-4 text-white" /> : <XCircle className="h-4 w-4 text-white" />}
                              </div>
                              <div className="space-y-2">
                                <p className="font-bold text-slate-900">{index + 1}. {question.question}</p>
                                <div className="flex flex-wrap gap-4 text-xs font-bold">
                                  <span className={isCorrect ? "text-emerald-600" : "text-red-500"}>
                                    Bạn chọn: {(() => {
                                      const selectedIdx = question.options.findIndex(o => o.value === answers[question.id]);
                                      return selectedIdx !== -1 ? `${String.fromCharCode(65 + selectedIdx)}. ${question.options[selectedIdx].label}` : "Bỏ trống";
                                    })()}
                                  </span>
                                  {!isCorrect && (
                                    <span className="text-emerald-600">
                                      Đáp án đúng: {(() => {
                                        const correctIdx = question.options.findIndex(o => o.value === question.correctAnswer);
                                        return correctIdx !== -1 ? `${String.fromCharCode(65 + correctIdx)}. ${question.options[correctIdx].label}` : "N/A";
                                      })()}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <Button
                      onClick={() => {
                        setTestStarted(false)
                        setTestCompleted(false)
                        setSelectedLevel(null)
                        setScore(null)
                      }}
                      className="flex-1 py-7 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-black uppercase tracking-widest transition-all"
                    >
                      Kiểm tra lại
                    </Button>
                    <Button
                      asChild
                      className="flex-1 py-7 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-orange-500/20"
                    >
                      <Link href="/lien-he">Nhận tư vấn lộ trình</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
