"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  Globe,
} from "lucide-react"

// Language translations
const translations = {
  uz: {
    schoolName: "101-maktab",
    location: "Denov tumani, Surxondaryo",
    home: "Bosh sahifa",
    about: "Maktab haqida",
    programs: "Ta'lim dasturlari",
    achievements: "Yutuqlar",
    contact: "Aloqa",
    theme: "Tema:",
    welcome: "Xush kelibsiz!",
    welcomeTo: "101-maktab saytiga",
    heroDescription: "Zamonaviy ta'lim, yuqori sifat va o'quvchilarimizning kelajagi uchun ishlaymiz.",
    learnMore: "Maktab haqida batafsil",
    contactUs: "Aloqa qilish",
    students: "O'quvchilar",
    teachers: "O'qituvchilar",
    achievementsCount: "Yutuqlar",
    experience: "Yillik tajriba",
    aboutTitle: "Maktabimiz haqida",
    aboutSubtitle: "Bizning maktabimiz zamonaviy ta'lim usullari va an'anaviy qadriyatlarni birlashtiradi",
    ourMission: "Bizning missiyamiz",
    missionText:
      "101-maktab o'quvchilarining intellektual, ijodiy va axloqiy rivojlanishiga yordam berish maqsadida faoliyat yuritadi.",
    qualityEducation: "Sifatli ta'lim",
    qualityEducationDesc: "Zamonaviy o'qitish usullari va texnologiyalar",
    individualApproach: "Individual yondashuv",
    individualApproachDesc: "Har bir o'quvchining iqtidorini ochish",
    highResults: "Yuqori natijalar",
    highResultsDesc: "Olimpiadalar va tanlovlarda g'alaba",
    ourValues: "Bizning qadriyatlarimiz",
    qualityExcellence: "Sifat va mukammallik",
    innovationDevelopment: "Innovatsiya va rivojlanish",
    cooperationUnity: "Hamkorlik va birlik",
    moralValues: "Axloqiy qadriyatlar",
    programsTitle: "Ta'lim dasturlari",
    programsSubtitle: "Maktabimizda turli yo'nalishlarda ta'lim beriladi",
    primaryEducation: "Boshlang'ich ta'lim",
    primaryGrades: "1-4 sinflar",
    primaryDesc: "Bolalarning asosiy ko'nikmalarini rivojlantirish",
    secondaryEducation: "O'rta ta'lim",
    secondaryGrades: "5-9 sinflar",
    secondaryDesc: "Fundamental bilimlar va ijodiy fikrlashni rivojlantirish",
    higherEducation: "Yuqori ta'lim",
    higherGrades: "10-11 sinflar",
    higherDesc: "Oliy ta'limga tayyorgarlik va kasbiy yo'nalish tanlash",
    reading: "O'qish",
    writing: "Yozish",
    mathematics: "Matematika",
    naturalScience: "Tabiatshunoslik",
    science: "Fan",
    language: "Til",
    history: "Tarix",
    physics: "Fizika",
    chemistry: "Kimyo",
    biology: "Biologiya",
    it: "IT",
    achievementsTitle: "Bizning yutuqlarimiz",
    achievementsSubtitle: "O'quvchilarimizning erishgan muvaffaqiyatlari",
    mathOlympiad: "Matematika olimpiadasi",
    mathOlympiadDesc: "Viloyat bosqichida 1-o'rin",
    literatureContest: "Adabiyot tanlov",
    literatureContestDesc: "Respublika bosqichida ishtirok",
    bestSchool: "Eng yaxshi maktab",
    bestSchoolDesc: "Tuman miqyosida mukofot",
    year2024: "2024 yil",
    year2023: "2023 yil",
    newsTitle: "So'nggi yangiliklar",
    newsSubtitle: "Maktabimizdan eng muhim xabarlar",
    newAcademicYear: "Yangi o'quv yili boshlanishi",
    newAcademicYearDesc: "2024-2025 o'quv yili rasmiy ravishda boshlandi.",
    newLaboratory: "Yangi laboratoriya ochilishi",
    newLaboratoryDesc: "Maktabimizda zamonaviy fizika va kimyo laboratoriyasi ochildi.",
    sportsCompetitions: "Sport musobaqalari",
    sportsCompetitionsDesc: "Maktabimiz o'quvchilari sport musobaqalarida faol ishtirok etmoqda.",
    contactTitle: "Biz bilan bog'laning",
    contactSubtitle: "Savollaringiz bo'lsa, biz bilan aloqaga chiqing",
    contactInfo: "Aloqa ma'lumotlari",
    address: "Manzil",
    addressText: "101-maktab, Denov tumani\nSurxondaryo viloyati, O'zbekiston",
    phone: "Telefon",
    email: "Email",
    sendMessage: "Xabar yuborish",
    sendMessageDesc: "Bizga savolingizni yuboring",
    yourName: "Ismingiz",
    enterName: "Ismingizni kiriting",
    emailAddress: "Email manzilingiz",
    message: "Xabar",
    writeMessage: "Xabaringizni yozing...",
    send: "Xabar yuborish",
    quickLinks: "Tezkor havolalar",
    education: "Ta'lim",
    primaryEducationFooter: "Boshlang'ich ta'lim",
    secondaryEducationFooter: "O'rta ta'lim",
    higherEducationFooter: "Yuqori ta'lim",
    additionalEducation: "Qo'shimcha ta'lim",
    footerText: "Zamonaviy ta'lim va yuqori sifat bilan kelajagini quramiz.",
    copyright: "2024 101-maktab. Barcha huquqlar himoyalangan.",
  },
  ru: {
    schoolName: "Школа №101",
    location: "Денауский район, Сурхандарья",
    home: "Главная",
    about: "О школе",
    programs: "Образовательные программы",
    achievements: "Достижения",
    contact: "Контакты",
    theme: "Тема:",
    welcome: "Добро пожаловать!",
    welcomeTo: "на сайт школы №101",
    heroDescription: "Современное образование, высокое качество и работаем для будущего наших учеников.",
    learnMore: "Подробнее о школе",
    contactUs: "Связаться с нами",
    students: "Учеников",
    teachers: "Учителей",
    achievementsCount: "Достижений",
    experience: "Лет опыта",
    aboutTitle: "О нашей школе",
    aboutSubtitle: "Наша школа объединяет современные методы обучения и традиционные ценности",
    ourMission: "Наша миссия",
    missionText: "Школа №101 работает с целью содействия развитию учащихся.",
    qualityEducation: "Качественное образование",
    qualityEducationDesc: "Современные методы обучения и технологии",
    individualApproach: "Индивидуальный подход",
    individualApproachDesc: "Раскрытие таланта каждого ученика",
    highResults: "Высокие результаты",
    highResultsDesc: "Победы в олимпиадах и конкурсах",
    ourValues: "Наши ценности",
    qualityExcellence: "Качество и совершенство",
    innovationDevelopment: "Инновации и развитие",
    cooperationUnity: "Сотрудничество и единство",
    moralValues: "Нравственные ценности",
    programsTitle: "Образовательные программы",
    programsSubtitle: "В нашей школе обучение ведется по различным направлениям",
    primaryEducation: "Начальное образование",
    primaryGrades: "1-4 классы",
    primaryDesc: "Развитие основных навыков детей",
    secondaryEducation: "Среднее образование",
    secondaryGrades: "5-9 классы",
    secondaryDesc: "Фундаментальные знания и развитие мышления",
    higherEducation: "Старшие классы",
    higherGrades: "10-11 классы",
    higherDesc: "Подготовка к высшему образованию",
    reading: "Чтение",
    writing: "Письмо",
    mathematics: "Математика",
    naturalScience: "Естествознание",
    science: "Наука",
    language: "Язык",
    history: "История",
    physics: "Физика",
    chemistry: "Химия",
    biology: "Биология",
    it: "ИТ",
    achievementsTitle: "Наши достижения",
    achievementsSubtitle: "Успехи наших учеников",
    mathOlympiad: "Олимпиада по математике",
    mathOlympiadDesc: "1-е место на областном этапе",
    literatureContest: "Конкурс по литературе",
    literatureContestDesc: "Участие в республиканском этапе",
    bestSchool: "Лучшая школа",
    bestSchoolDesc: "Награда на районном уровне",
    year2024: "2024 год",
    year2023: "2023 год",
    newsTitle: "Последние новости",
    newsSubtitle: "Важные сообщения из нашей школы",
    newAcademicYear: "Начало нового учебного года",
    newAcademicYearDesc: "Официально начался учебный год 2024-2025.",
    newLaboratory: "Открытие новой лаборатории",
    newLaboratoryDesc: "В нашей школе открылась современная лаборатория.",
    sportsCompetitions: "Спортивные соревнования",
    sportsCompetitionsDesc: "Ученики активно участвуют в соревнованиях.",
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Если у вас есть вопросы, свяжитесь с нами",
    contactInfo: "Контактная информация",
    address: "Адрес",
    addressText: "Школа №101, Денауский район\nСурхандарьинская область, Узбекистан",
    phone: "Телефон",
    email: "Эл. почта",
    sendMessage: "Отправить сообщение",
    sendMessageDesc: "Отправьте нам ваш вопрос",
    yourName: "Ваше имя",
    enterName: "Введите ваше имя",
    emailAddress: "Ваш email",
    message: "Сообщение",
    writeMessage: "Напишите ваше сообщение...",
    send: "Отправить сообщение",
    quickLinks: "Быстрые ссылки",
    education: "Образование",
    primaryEducationFooter: "Начальное образование",
    secondaryEducationFooter: "Среднее образование",
    higherEducationFooter: "Старшие классы",
    additionalEducation: "Дополнительное образование",
    footerText: "Современное образование для будущего наших учеников.",
    copyright: "© 2024 Школа №101. Все права защищены.",
  },
  en: {
    schoolName: "School #101",
    location: "Denov district, Surkhandarya",
    home: "Home",
    about: "About School",
    programs: "Educational Programs",
    achievements: "Achievements",
    contact: "Contact",
    theme: "Theme:",
    welcome: "Welcome!",
    welcomeTo: "to School #101 website",
    heroDescription: "Modern education, high quality and we work for the future of our students.",
    learnMore: "Learn more about school",
    contactUs: "Contact us",
    students: "Students",
    teachers: "Teachers",
    achievementsCount: "Achievements",
    experience: "Years of experience",
    aboutTitle: "About our school",
    aboutSubtitle: "Our school combines modern teaching methods and traditional values",
    ourMission: "Our mission",
    missionText: "School #101 operates with the aim of promoting student development.",
    qualityEducation: "Quality education",
    qualityEducationDesc: "Modern teaching methods and technologies",
    individualApproach: "Individual approach",
    individualApproachDesc: "Revealing the talent of every student",
    highResults: "High results",
    highResultsDesc: "Victories in olympiads and competitions",
    ourValues: "Our values",
    qualityExcellence: "Quality and excellence",
    innovationDevelopment: "Innovation and development",
    cooperationUnity: "Cooperation and unity",
    moralValues: "Moral values",
    programsTitle: "Educational programs",
    programsSubtitle: "Our school provides education in various directions",
    primaryEducation: "Primary education",
    primaryGrades: "Grades 1-4",
    primaryDesc: "Developing children's basic skills",
    secondaryEducation: "Secondary education",
    secondaryGrades: "Grades 5-9",
    secondaryDesc: "Fundamental knowledge and creative thinking",
    higherEducation: "High school",
    higherGrades: "Grades 10-11",
    higherDesc: "Preparation for higher education",
    reading: "Reading",
    writing: "Writing",
    mathematics: "Mathematics",
    naturalScience: "Natural Science",
    science: "Science",
    language: "Language",
    history: "History",
    physics: "Physics",
    chemistry: "Chemistry",
    biology: "Biology",
    it: "IT",
    achievementsTitle: "Our achievements",
    achievementsSubtitle: "Success of our students",
    mathOlympiad: "Mathematics Olympiad",
    mathOlympiadDesc: "1st place at regional level",
    literatureContest: "Literature Contest",
    literatureContestDesc: "Participation at republican level",
    bestSchool: "Best School",
    bestSchoolDesc: "Award at district level",
    year2024: "2024",
    year2023: "2023",
    newsTitle: "Latest news",
    newsSubtitle: "Important messages from our school",
    newAcademicYear: "New academic year begins",
    newAcademicYearDesc: "The 2024-2025 academic year has officially begun.",
    newLaboratory: "New laboratory opening",
    newLaboratoryDesc: "A modern laboratory has opened at our school.",
    sportsCompetitions: "Sports competitions",
    sportsCompetitionsDesc: "Our students actively participate in competitions.",
    contactTitle: "Contact us",
    contactSubtitle: "If you have questions, contact us",
    contactInfo: "Contact information",
    address: "Address",
    addressText: "School #101, Denov district\nSurkhandarya region, Uzbekistan",
    phone: "Phone",
    email: "Email",
    sendMessage: "Send message",
    sendMessageDesc: "Send us your question",
    yourName: "Your name",
    enterName: "Enter your name",
    emailAddress: "Your email",
    message: "Message",
    writeMessage: "Write your message...",
    send: "Send message",
    quickLinks: "Quick links",
    education: "Education",
    primaryEducationFooter: "Primary education",
    secondaryEducationFooter: "Secondary education",
    higherEducationFooter: "High school",
    additionalEducation: "Additional education",
    footerText: "Modern education for the future of our students.",
    copyright: "© 2024 School #101. All rights reserved.",
  },
}

export default function SchoolPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState<"uz" | "ru" | "en">("uz")
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }

    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language") as "uz" | "ru" | "en"
    if (savedLanguage && ["uz", "ru", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }

    // Hide loading screen after 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // Handle click outside for dropdown
  useEffect(() => {
    const handleClickOutside = () => {
      if (isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const changeLanguage = (lang: "uz" | "ru" | "en") => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    setIsLanguageDropdownOpen(false)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const t = translations[language]

  // Loading/Welcome Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 flex items-center justify-center z-50 transition-colors duration-300">
        <div className="text-center text-white">
          <div className="mb-8 animate-bounce">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full mx-auto w-24 h-24 flex items-center justify-center shadow-2xl">
              <GraduationCap className="h-12 w-12 text-white animate-pulse" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up">{t.welcome}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold animate-fade-in-up animation-delay-300">{t.welcomeTo}</h2>
            <p className="text-lg md:text-xl opacity-90 animate-fade-in-up animation-delay-600">{t.location}</p>
          </div>
          <div className="flex justify-center space-x-2 mt-8 animate-fade-in-up animation-delay-900">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse animation-delay-400"></div>
          </div>
          <div className="mt-8 w-64 mx-auto">
            <div className="bg-white/20 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full rounded-full animate-loading-bar"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-float animation-delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white/15 rounded-full animate-float animation-delay-700"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 animate-fade-in">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{t.schoolName}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#bosh"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("bosh")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.home}
                </a>
                <a
                  href="#haqida"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("haqida")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.about}
                </a>
                <a
                  href="#dasturlar"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("dasturlar")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.programs}
                </a>
                <a
                  href="#yutuqlar"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("yutuqlar")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.achievements}
                </a>
                <a
                  href="#aloqa"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("aloqa")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.contact}
                </a>

                {/* Language Dropdown */}
                <div className="relative">
                  

                  {isLanguageDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                      <div className="py-1">
                        <button
                          onClick={() => changeLanguage("uz")}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            language === "uz"
                              ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          🇺🇿 O'zbek
                        </button>
                        <button
                          onClick={() => changeLanguage("ru")}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            language === "ru"
                              ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          🇷🇺 Русский
                        </button>
                        <button
                          onClick={() => changeLanguage("en")}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            language === "en"
                              ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          🇬🇧 English
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dark mode toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ml-4"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  <div className="flex space-x-1">
                    <button
                      onClick={() => changeLanguage("uz")}
                      className={`px-2 py-1 text-sm rounded transition-colors ${
                        language === "uz"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      UZ
                    </button>
                    <button
                      onClick={() => changeLanguage("ru")}
                      className={`px-2 py-1 text-sm rounded transition-colors ${
                        language === "ru"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      RU
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`px-2 py-1 text-sm rounded transition-colors ${
                        language === "en"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{t.theme}</span>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                <a
                  href="#bosh"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    document.getElementById("bosh")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.home}
                </a>
                <a
                  href="#haqida"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    document.getElementById("haqida")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.about}
                </a>
                <a
                  href="#dasturlar"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    document.getElementById("dasturlar")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.programs}
                </a>
                <a
                  href="#yutuqlar"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    document.getElementById("yutuqlar")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.achievements}
                </a>
                <a
                  href="#aloqa"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    document.getElementById("aloqa")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.contact}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="bosh" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">{t.schoolName}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">{t.location}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">{t.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                onClick={() => document.getElementById("haqida")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.learnMore}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                onClick={() => document.getElementById("aloqa")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.contactUs}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">850+</div>
              <div className="text-gray-600 dark:text-gray-300">{t.students}</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">45+</div>
              <div className="text-gray-600 dark:text-gray-300">{t.teachers}</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">25+</div>
              <div className="text-gray-600 dark:text-gray-300">{t.achievementsCount}</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">15</div>
              <div className="text-gray-600 dark:text-gray-300">{t.experience}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="haqida" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.aboutTitle}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t.aboutSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.ourMission}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t.missionText}</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                    <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.qualityEducation}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{t.qualityEducationDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                    <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.individualApproach}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{t.individualApproachDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-1 rounded-full">
                    <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.highResults}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{t.highResultsDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{t.ourValues}</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5" />
                  <span>{t.qualityExcellence}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5" />
                  <span>{t.innovationDevelopment}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5" />
                  <span>{t.cooperationUnity}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5" />
                  <span>{t.moralValues}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="dasturlar" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.programsTitle}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.programsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">{t.primaryEducation}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{t.primaryGrades}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{t.primaryDesc}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{t.reading}</Badge>
                  <Badge variant="secondary">{t.writing}</Badge>
                  <Badge variant="secondary">{t.mathematics}</Badge>
                  <Badge variant="secondary">{t.naturalScience}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">{t.secondaryEducation}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{t.secondaryGrades}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{t.secondaryDesc}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{t.science}</Badge>
                  <Badge variant="secondary">{t.mathematics}</Badge>
                  <Badge variant="secondary">{t.language}</Badge>
                  <Badge variant="secondary">{t.history}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">{t.higherEducation}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{t.higherGrades}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{t.higherDesc}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{t.physics}</Badge>
                  <Badge variant="secondary">{t.chemistry}</Badge>
                  <Badge variant="secondary">{t.biology}</Badge>
                  <Badge variant="secondary">{t.it}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="yutuqlar" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.achievementsTitle}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.achievementsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">{t.mathOlympiad}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{t.mathOlympiadDesc}</p>
                <Badge className="mt-2">{t.year2024}</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">{t.literatureContest}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{t.literatureContestDesc}</p>
                <Badge className="mt-2">{t.year2024}</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">{t.bestSchool}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{t.bestSchoolDesc}</p>
                <Badge className="mt-2">{t.year2023}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.newsTitle}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.newsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>15 {language === "en" ? "December" : language === "ru" ? "Декабрь" : "Dekabr"}, 2024</span>
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{t.newAcademicYear}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{t.newAcademicYearDesc}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>10 {language === "en" ? "December" : language === "ru" ? "Декабрь" : "Dekabr"}, 2024</span>
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{t.newLaboratory}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{t.newLaboratoryDesc}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>5 {language === "en" ? "December" : language === "ru" ? "Декабрь" : "Dekabr"}, 2024</span>
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{t.sportsCompetitions}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{t.sportsCompetitionsDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="aloqa" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.contactSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.contactInfo}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.address}</h4>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{t.addressText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.phone}</h4>
                    <p className="text-gray-600 dark:text-gray-300">+998 XX XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.email}</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@101maktab.uz</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">{t.sendMessage}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{t.sendMessageDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.yourName}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t.enterName}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.email}</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t.emailAddress}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.message}</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t.writeMessage}
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  {t.send}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t.schoolName}</h3>
                  <p className="text-sm text-gray-400">{t.location.split(",")[0]}</p>
                </div>
              </div>
              <p className="text-gray-400">{t.footerText}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#bosh"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("bosh")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {t.home}
                  </a>
                </li>
                <li>
                  <a
                    href="#haqida"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("haqida")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {t.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#dasturlar"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("dasturlar")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {t.programs}
                  </a>
                </li>
                <li>
                  <a
                    href="#yutuqlar"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("yutuqlar")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {t.achievements}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.education}</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">{t.primaryEducationFooter}</span>
                </li>
                <li>
                  <span className="text-gray-400">{t.secondaryEducationFooter}</span>
                </li>
                <li>
                  <span className="text-gray-400">{t.higherEducationFooter}</span>
                </li>
                <li>
                  <span className="text-gray-400">{t.additionalEducation}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">{t.location}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">+998 XX XXX XX XX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">info@101maktab.uz</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>{t.copyright}</p>
            <p className="mt-2">Dasturchi: Nazarov Azizbek | Tel: <a href="tel:+998888061683" className="underline">+998888061683</a></p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loading-bar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-loading-bar {
          animation: loading-bar 4s ease-in-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}
