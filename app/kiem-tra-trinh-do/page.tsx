"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen, Award, Trophy, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"

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
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Kiểm Tra Trình Độ
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Đánh giá năng lực tiếng Anh của bạn với các bài test Cambridge chuẩn quốc tế
            </p>
          </div>

          {!testStarted && !testCompleted && (
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-indigo-200">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">STARTERS</h3>
                  <p className="text-gray-600 mb-4">Trình độ Pre A1</p>
                  <p className="text-sm text-gray-500 mb-6">Thời gian: 20 phút</p>
                  <Button
                    onClick={() => startTest("STARTERS")}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
                  >
                    Bắt Đầu Thi
                  </Button>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">MOVERS</h3>
                  <p className="text-gray-600 mb-4">Trình độ A1</p>
                  <p className="text-sm text-gray-500 mb-6">Thời gian: 25 phút</p>
                  <Button
                    onClick={() => startTest("MOVERS")}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                  >
                    Bắt Đầu Thi
                  </Button>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-200">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">FLYERS</h3>
                  <p className="text-gray-600 mb-4">Trình độ A2</p>
                  <p className="text-sm text-gray-500 mb-6">Thời gian: 30 phút</p>
                  <Button
                    onClick={() => startTest("FLYERS")}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                  >
                    Bắt Đầu Thi
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {testStarted && !testCompleted && currentQuestionData && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-indigo-600">{selectedLevel}</div>
                    <div className="text-gray-600">
                      Câu {currentQuestion + 1}/{selectedQuestions.length}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-lg font-semibold text-coral-500">
                    <span>Thời gian còn lại:</span>
                    <span>{formatTime(timeLeft)}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedQuestions.map((q, index) => (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                        index === currentQuestion
                          ? "bg-indigo-600 text-white scale-110"
                          : answers[q.id]
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">
                    {currentQuestionData.id}. {currentQuestionData.question}
                  </h3>

                  {currentQuestionData.image && (
                    <div className="mb-8 flex justify-center">
                      <Image
                        src={currentQuestionData.image || "/placeholder.svg"}
                        alt="Question"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg max-h-64 object-contain"
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    {currentQuestionData.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestionData.id, option.value)}
                        className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left text-lg font-medium ${
                          answers[currentQuestionData.id] === option.value
                            ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-lg"
                            : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t">
                  <Button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                    variant="outline"
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    Câu trước
                  </Button>

                  {currentQuestion === selectedQuestions.length - 1 ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={!allQuestionsAnswered()}
                      className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 px-8"
                    >
                      Nộp bài
                    </Button>
                  ) : (
                    <Button onClick={nextQuestion} className="flex items-center gap-2">
                      Câu tiếp theo
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}

          {showResultForm && (
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Nhập Thông Tin Để Xem Kết Quả</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên phụ huynh</label>
                    <input
                      type="text"
                      value={studentInfo.parentName}
                      onChange={(e) => setStudentInfo({ ...studentInfo, parentName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                      placeholder="Nhập họ tên phụ huynh"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên học sinh</label>
                    <input
                      type="text"
                      value={studentInfo.studentName}
                      onChange={(e) => setStudentInfo({ ...studentInfo, studentName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                      placeholder="Nhập họ tên học sinh"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại liên hệ</label>
                    <input
                      type="tel"
                      value={studentInfo.phone}
                      onChange={(e) => setStudentInfo({ ...studentInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <Button onClick={handleShowResults} className="w-full py-6 text-lg" size="lg">
                    Xem Kết Quả
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {score !== null && !showResultForm && (
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 text-center">
                <div
                  className={`mx-auto w-32 h-32 rounded-full flex items-center justify-center mb-6 ${
                    score >= 80
                      ? "bg-gradient-to-br from-green-400 to-teal-500"
                      : score >= 60
                        ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                        : "bg-gradient-to-br from-red-400 to-pink-500"
                  }`}
                >
                  <div className="text-white">
                    <div className="text-4xl font-bold">{score.toFixed(0)}%</div>
                    <div className="text-sm">Điểm</div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  {score >= 80 ? "Xuất sắc!" : score >= 60 ? "Khá tốt!" : "Cần cố gắng thêm!"}
                </h2>
                <p className="text-gray-600 mb-8">
                  Bạn đã trả lời đúng {selectedQuestions.filter((q) => answers[q.id] === q.correctAnswer).length}/
                  {selectedQuestions.length} câu
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Thông tin học sinh</h3>
                  <div className="text-left space-y-2 text-gray-700">
                    <p>
                      <span className="font-semibold">Phụ huynh:</span> {studentInfo.parentName}
                    </p>
                    <p>
                      <span className="font-semibold">Học sinh:</span> {studentInfo.studentName}
                    </p>
                    <p>
                      <span className="font-semibold">Số điện thoại:</span> {studentInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {selectedQuestions.map((question, index) => {
                    const isCorrect = answers[question.id] === question.correctAnswer
                    return (
                      <div
                        key={question.id}
                        className={`p-4 rounded-lg border-2 ${
                          isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                          )}
                          <div className="flex-1 text-left">
                            <p className="font-semibold text-gray-900 mb-1">
                              Câu {index + 1}: {question.question}
                            </p>
                            <p className="text-sm text-gray-600">
                              Bạn chọn:{" "}
                              {question.options.find((opt) => opt.value === answers[question.id])?.label || "Không có"}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-gray-600">
                                Đáp án đúng:{" "}
                                {question.options.find((opt) => opt.value === question.correctAnswer)?.label}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Button
                  onClick={() => {
                    setTestStarted(false)
                    setTestCompleted(false)
                    setSelectedLevel(null)
                    setScore(null)
                  }}
                  size="lg"
                  className="px-8"
                >
                  Làm bài test khác
                </Button>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
