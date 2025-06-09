"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    login: "Login",
    register: "Register",
    language: "Language",

    // Landing Page
    welcomeTitle: "Welcome to Investment Platform",
    welcomeSubtitle: "Connect innovative projects with passionate investors",
    getStarted: "Get Started",
    learnMore: "Learn More",
    forInvestors: "For Investors",
    forProjectOwners: "For Project Owners",
    investorDescription: "Discover and invest in promising projects that match your interests and goals.",
    projectOwnerDescription: "Showcase your project and connect with investors who believe in your vision.",

    // Features
    featuresTitle: "Why Choose Our Platform?",
    secureTransactions: "Secure Transactions",
    secureTransactionsDesc: "Your investments are protected with bank-level security.",
    diverseProjects: "Diverse Projects",
    diverseProjectsDesc: "Explore projects across various industries and sectors.",
    expertSupport: "Expert Support",
    expertSupportDesc: "Get guidance from our team of investment professionals.",

    // Auth
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    fullName: "Full Name",
    userType: "I am a",
    investor: "Investor",
    projectOwner: "Project Owner",
    loginTitle: "Welcome Back",
    loginSubtitle: "Sign in to your account",
    registerTitle: "Create Account",
    registerSubtitle: "Join our investment community",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    signUp: "Sign up",
    signIn: "Sign in",

    // Dashboard
    dashboard: "Dashboard",
    welcome: "Welcome",
    logout: "Logout",

    // Project Owner Features
    createProject: "Create Project",
    myProjects: "My Projects",
    projectTitle: "Project Title",
    projectDescription: "Project Description",
    fundingGoal: "Funding Goal",
    projectCategory: "Project Category",
    timeline: "Timeline",
    uploadDocuments: "Upload Documents",
    saveProject: "Save Project",
    projectStatus: "Project Status",
    active: "Active",
    closed: "Closed",
    negotiation: "Negotiation",
    investmentOffers: "Investment Offers",
    amount: "Amount",
    ownershipPercentage: "Ownership Percentage",
    rating: "Rating",
    time: "Time",
    accept: "Accept",
    reject: "Reject",
    negotiate: "Negotiate",
    filterOffers: "Filter Offers",
    aiAnalysis: "AI Analysis",
    recommendations: "Recommendations",
    topInvestors: "Top Investors",
    rateInvestor: "Rate Investor",
    sendMessage: "Send Message",
    messages: "Messages",
    negotiationChat: "Negotiation Chat",
    technology: "Technology",
    healthcare: "Healthcare",
    finance: "Finance",
    education: "Education",
    retail: "Retail",
    months: "months",
    selectCategory: "Select Category",
    enterAmount: "Enter amount",
    enterPercentage: "Enter percentage",
    projectCreated: "Project created successfully!",
    offerAccepted: "Offer accepted successfully!",
    offerRejected: "Offer rejected successfully!",
    messageSent: "Message sent successfully!",
    ratingSubmitted: "Rating submitted successfully!",

    // Investor Features
    browseProjects: "Browse Projects",
    projectDetails: "Project Details",
    submitOffer: "Submit Offer",
    myOffers: "My Offers",
    projectLeaderboard: "Project Leaderboard",
    notifications: "Notifications",
    offerAmount: "Offer Amount",
    offerOwnership: "Offer Ownership",
    additionalTerms: "Additional Terms",
    submitOfferButton: "Submit Offer",
    editOffer: "Edit Offer",
    withdrawOffer: "Withdraw Offer",
    viewDetails: "View Details",
    fundingProgress: "Funding Progress",
    projectOwner: "Project Owner",
    deadline: "Deadline",
    minimumInvestment: "Minimum Investment",
    maximumInvestment: "Maximum Investment",
    riskLevel: "Risk Level",
    expectedReturn: "Expected Return",
    projectDocuments: "Project Documents",
    investmentTerms: "Investment Terms",
    offerSubmitted: "Offer submitted successfully!",
    offerUpdated: "Offer updated successfully!",
    offerWithdrawn: "Offer withdrawn successfully!",
    rateProjectOwner: "Rate Project Owner",
    projectRating: "Project Rating",
    topProjects: "Top Projects",
    trending: "Trending",
    newest: "Newest",
    mostFunded: "Most Funded",
    highestRated: "Highest Rated",
    matchingProjects: "Projects Matching Your Interests",
    newProjectAlert: "New Project Alert",
    offerAcceptedNotification: "Your offer has been accepted",
    offerRejectedNotification: "Your offer has been rejected",
    negotiationStarted: "Negotiation started",
    markAsRead: "Mark as Read",
    clearAll: "Clear All",
    noNotifications: "No notifications",
    low: "Low",
    medium: "Medium",
    high: "High",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    withdrawn: "Withdrawn",

    // Negotiation System
    secureNegotiation: "Secure Negotiation",
    negotiationRoom: "Negotiation Room",
    startNegotiation: "Start Negotiation",
    negotiationHistory: "Negotiation History",
    counterOffer: "Counter Offer",
    makeCounterOffer: "Make Counter Offer",
    acceptOffer: "Accept Offer",
    rejectOffer: "Reject Offer",
    finalizeAgreement: "Finalize Agreement",
    agreementTerms: "Agreement Terms",
    negotiationStatus: "Negotiation Status",
    inProgress: "In Progress",
    completed: "Completed",
    cancelled: "Cancelled",
    secureChat: "Secure Chat",
    privateConversation: "Private Conversation",
    encryptedMessage: "This conversation is encrypted and secure",
    negotiationSummary: "Negotiation Summary",
    originalOffer: "Original Offer",
    currentOffer: "Current Offer",
    proposedTerms: "Proposed Terms",

    // AI Chatbot
    aiAssistant: "AI Investment Assistant",
    askAI: "Ask AI Assistant",
    aiRecommendations: "AI Recommendations",
    projectAnalysis: "Project Analysis",
    investmentAdvice: "Investment Advice",
    riskAssessment: "Risk Assessment",
    portfolioOptimization: "Portfolio Optimization",
    marketInsights: "Market Insights",
    aiTyping: "AI is typing...",
    askQuestion: "Ask a question...",
    suggestedQuestions: "Suggested Questions",
    aiWelcome: "Hello! I'm your AI investment assistant. How can I help you today?",
    analyzingProject: "Analyzing project...",
    generatingRecommendation: "Generating recommendation...",
    aiAnalysisComplete: "Analysis complete",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    language: "اللغة",

    // Landing Page
    welcomeTitle: "مرحباً بك في منصة الاستثمار",
    welcomeSubtitle: "ربط المشاريع المبتكرة بالمستثمرين المتحمسين",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف المزيد",
    forInvestors: "للمستثمرين",
    forProjectOwners: "لأصحاب المشاريع",
    investorDescription: "اكتشف واستثمر في المشاريع الواعدة التي تتناسب مع اهتماماتك وأهدافك.",
    projectOwnerDescription: "اعرض مشروعك وتواصل مع المستثمرين الذين يؤمنون برؤيتك.",

    // Features
    featuresTitle: "لماذا تختار منصتنا؟",
    secureTransactions: "معاملات آمنة",
    secureTransactionsDesc: "استثماراتك محمية بأمان مصرفي عالي المستوى.",
    diverseProjects: "مشاريع متنوعة",
    diverseProjectsDesc: "استكشف المشاريع عبر مختلف الصناعات والقطاعات.",
    expertSupport: "دعم الخبراء",
    expertSupportDesc: "احصل على التوجيه من فريق المتخصصين في الاستثمار.",

    // Auth
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    fullName: "الاسم الكامل",
    userType: "أنا",
    investor: "مستثمر",
    projectOwner: "صاحب مشروع",
    loginTitle: "مرحباً بعودتك",
    loginSubtitle: "سجل دخولك إلى حسابك",
    registerTitle: "إنشاء حساب",
    registerSubtitle: "انضم إلى مجتمع الاستثمار",
    dontHaveAccount: "ليس لديك حساب؟",
    alreadyHaveAccount: "لديك حساب بالفعل؟",
    signUp: "إنشاء حساب",
    signIn: "تسجيل الدخول",

    // Dashboard
    dashboard: "لوحة التحكم",
    welcome: "مرحباً",
    logout: "تسجيل الخروج",

    // Project Owner Features
    createProject: "إنشاء مشروع",
    myProjects: "مشاريعي",
    projectTitle: "عنوان المشروع",
    projectDescription: "وصف المشروع",
    fundingGoal: "هدف التمويل",
    projectCategory: "فئة المشروع",
    timeline: "الجدول الزمني",
    uploadDocuments: "رفع المستندات",
    saveProject: "حفظ المشروع",
    projectStatus: "حالة المشروع",
    active: "نشط",
    closed: "مغلق",
    negotiation: "تفاوض",
    investmentOffers: "عروض الاستثمار",
    amount: "المبلغ",
    ownershipPercentage: "نسبة الملكية",
    rating: "التقييم",
    time: "الوقت",
    accept: "قبول",
    reject: "رفض",
    negotiate: "تفاوض",
    filterOffers: "تصفية العروض",
    aiAnalysis: "تحليل الذكي",
    recommendations: "التوصيات",
    topInvestors: "أفضل المستثمرين",
    rateInvestor: "تقييم المستثمر",
    sendMessage: "إرسال رسالة",
    messages: "الرسائل",
    negotiationChat: "محادثة التفاوض",
    technology: "التكنولوجيا",
    healthcare: "الرعاية الصحية",
    finance: "المالية",
    education: "التعليم",
    retail: "التجارة",
    months: "أشهر",
    selectCategory: "اختر الفئة",
    enterAmount: "أدخل المبلغ",
    enterPercentage: "أدخل النسبة",
    projectCreated: "تم إنشاء المشروع بنجاح!",
    offerAccepted: "تم قبول العرض بنجاح!",
    offerRejected: "تم رفض العرض بنجاح!",
    messageSent: "تم إرسال الرسالة بنجاح!",
    ratingSubmitted: "تم تقديم التقييم بنجاح!",

    // Investor Features
    browseProjects: "تصفح المشاريع",
    projectDetails: "تفاصيل المشروع",
    submitOffer: "تقديم عرض",
    myOffers: "عروضي",
    projectLeaderboard: "ترتيب المشاريع",
    notifications: "الإشعارات",
    offerAmount: "مبلغ العرض",
    offerOwnership: "نسبة الملكية",
    additionalTerms: "شروط إضافية",
    submitOfferButton: "تقديم العرض",
    editOffer: "تعديل العرض",
    withdrawOffer: "سحب العرض",
    viewDetails: "عرض التفاصيل",
    fundingProgress: "تقدم التمويل",
    projectOwner: "صاحب المشروع",
    deadline: "الموعد النهائي",
    minimumInvestment: "الحد الأدنى للاستثمار",
    maximumInvestment: "الحد الأقصى للاستثمار",
    riskLevel: "مستوى المخاطر",
    expectedReturn: "العائد المتوقع",
    projectDocuments: "مستندات المشروع",
    investmentTerms: "شروط الاستثمار",
    offerSubmitted: "تم تقديم العرض بنجاح!",
    offerUpdated: "تم تحديث العرض بنجاح!",
    offerWithdrawn: "تم سحب العرض بنجاح!",
    rateProjectOwner: "تقييم صاحب المشروع",
    projectRating: "تقييم المشروع",
    topProjects: "أفضل المشاريع",
    trending: "الأكثر رواجاً",
    newest: "الأحدث",
    mostFunded: "الأكثر تمويلاً",
    highestRated: "الأعلى تقييماً",
    matchingProjects: "المشاريع المطابقة لاهتماماتك",
    newProjectAlert: "تنبيه مشروع جديد",
    offerAcceptedNotification: "تم قبول عرضك",
    offerRejectedNotification: "تم رفض عرضك",
    negotiationStarted: "بدأت المفاوضات",
    markAsRead: "تحديد كمقروء",
    clearAll: "مسح الكل",
    noNotifications: "لا توجد إشعارات",
    low: "منخفض",
    medium: "متوسط",
    high: "عالي",
    pending: "قيد الانتظار",
    approved: "موافق عليه",
    rejected: "مرفوض",
    withdrawn: "مسحوب",

    // Negotiation System
    secureNegotiation: "تفاوض آمن",
    negotiationRoom: "غرفة التفاوض",
    startNegotiation: "بدء التفاوض",
    negotiationHistory: "تاريخ التفاوض",
    counterOffer: "عرض مضاد",
    makeCounterOffer: "تقديم عرض مضاد",
    acceptOffer: "قبول العرض",
    rejectOffer: "رفض العرض",
    finalizeAgreement: "إنهاء الاتفاقية",
    agreementTerms: "شروط الاتفاقية",
    negotiationStatus: "حالة التفاوض",
    inProgress: "قيد التنفيذ",
    completed: "مكتمل",
    cancelled: "ملغي",
    secureChat: "محادثة آمنة",
    privateConversation: "محادثة خاصة",
    encryptedMessage: "هذه المحادثة مشفرة وآمنة",
    negotiationSummary: "ملخص التفاوض",
    originalOffer: "العرض الأصلي",
    currentOffer: "العرض الحالي",
    proposedTerms: "الشروط المقترحة",

    // AI Chatbot
    aiAssistant: "مساعد الاستثمار الذكي",
    askAI: "اسأل المساعد الذكي",
    aiRecommendations: "توصيات الذكاء الاصطناعي",
    projectAnalysis: "تحليل المشروع",
    investmentAdvice: "نصائح الاستثمار",
    riskAssessment: "تقييم المخاطر",
    portfolioOptimization: "تحسين المحفظة",
    marketInsights: "رؤى السوق",
    aiTyping: "الذكاء الاصطناعي يكتب...",
    askQuestion: "اطرح سؤالاً...",
    suggestedQuestions: "أسئلة مقترحة",
    aiWelcome: "مرحباً! أنا مساعدك الذكي للاستثمار. كيف يمكنني مساعدتك اليوم؟",
    analyzingProject: "تحليل المشروع...",
    generatingRecommendation: "إنشاء التوصية...",
    aiAnalysisComplete: "اكتمل التحليل",
  },
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")
  const [direction, setDirection] = useState("ltr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"
    setLanguage(savedLanguage)
    setDirection(savedLanguage === "ar" ? "rtl" : "ltr")
    document.documentElement.setAttribute("dir", savedLanguage === "ar" ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", savedLanguage)
  }, [])

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    setDirection(newLanguage === "ar" ? "rtl" : "ltr")
    localStorage.setItem("language", newLanguage)
    document.documentElement.setAttribute("dir", newLanguage === "ar" ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", newLanguage)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        changeLanguage,
        t,
        isRTL: language === "ar",
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
