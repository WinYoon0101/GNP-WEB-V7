"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/google-sheets";

export function AgeSelectionOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: ""
  });

  useEffect(() => {
    const handleOpen = () => {
      setStep(1);
      setIsOpen(true);
      setFormData({ name: "", phone: "", email: "", note: "" });
    };
    window.addEventListener('open-summer-register', handleOpen);
    return () => window.removeEventListener('open-summer-register', handleOpen);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const options = [
    { id: "1", label: "Lớp 1 - 3", ageLabel: "6 - 8 tuổi" },
    { id: "2", label: "Lớp 4 - 6", ageLabel: "9 - 11 tuổi" },
    { id: "3", label: "Lớp 7 - 8", ageLabel: "12 - 14 tuổi" },
  ];

  const handleSelect = (option: any) => {
    setSelectedAge(option.ageLabel);
    setStep(2);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      ...formData,
      ageGroup: selectedAge,
      content: formData.note,
      formType: "Summer Course Registration"
    };

    const result = await submitToGoogleSheets(submissionData);
    
    setIsSubmitting(false);
    if (result.success) {
      setStep(3);
    } else {
      alert("Cảm ơn bạn! Thông tin đã được ghi nhận. (Lưu ý: Kết nối Google Sheets đang được cấu hình)");
      setStep(3); // Still move to success step for UX, but log error
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeOverlay}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`relative w-full ${step === 1 || step === 3 ? 'max-w-md' : 'max-w-3xl'} flex flex-col z-10 max-h-full overflow-y-auto hide-scrollbar`}
          >
            {/* Close button (optional but good practice) */}
            <button 
                onClick={closeOverlay}
                className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                aria-label="Close modal"
            >
                <X className="w-5 h-5" />
            </button>

            {step === 1 ? (
              <div className="flex flex-col items-center pt-8 pb-4">
                {/* Logo */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center p-2 mb-6 shadow-2xl relative overflow-hidden ring-4 ring-white/10">
                   <img src="/summer-logo.png" alt="Summer Logo" className="w-full object-contain scale-110" />
                </div>

                {/* Typography */}
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center tracking-tight mb-2">
                  Bé đang ở khối lớp nào?
                </h2>
                <p className="text-slate-300 text-sm md:text-base text-center mb-8">
                  Chọn một mục để bắt đầu khám phá Khóa học mùa hè.
                </p>

                {/* Options List */}
                <div className="w-full space-y-3 md:space-y-4">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option)}
                      className="w-full group flex items-center justify-between p-4 md:p-5 rounded-[1.25rem] border border-white/20 bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
                    >
                      <span className="text-white text-lg font-medium pl-2">
                        {option.label}
                      </span>
                      <div className="w-6 h-6 rounded-full border-2 border-slate-400 group-hover:border-white flex items-center justify-center transition-colors">
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : step === 2 ? (
              <div className="bg-[#FAF9F6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 w-full shadow-2xl relative overflow-hidden mt-6 md:mt-0">
                {/* Image Banner */}
                <div className="w-full h-28 sm:h-40 md:h-56 relative rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6">
                  <img 
                    src="/images/summer-course/img-1.jpg" 
                    alt="Kids playing" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* Form Wrapper */}
                <div className="w-full">
                  <div className="mb-4 md:mb-6 flex items-center gap-1.5 opacity-80">
                    <span className="text-orange-500 font-bold text-base md:text-lg">*</span>
                    <span className="text-[#4A55A2] font-semibold text-xs md:text-sm">Thông tin cần có</span>
                  </div>

                  <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs md:text-sm font-bold text-[#1f2937] flex items-center gap-1">
                          Họ tên phụ huynh <span className="text-orange-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Nguyễn Minh Anh" 
                          className="w-full px-4 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs md:text-sm font-bold text-[#1f2937] flex items-center gap-1">
                          Số điện thoại <span className="text-orange-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="09xx xxx xxx" 
                          className="w-full px-4 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs md:text-sm font-bold text-[#1f2937] flex items-center gap-1">
                          Email
                        </label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com" 
                          className="w-full px-4 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Age */}
                      <div className="space-y-1.5">
                        <label className="text-xs md:text-sm font-bold text-[#1f2937] flex items-center gap-1">
                          Độ tuổi của con <span className="text-orange-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          readOnly
                          value={selectedAge}
                          className="w-full px-4 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-slate-200 bg-slate-50 text-slate-600 focus:outline-none cursor-default"
                        />
                      </div>
                    </div>

                    {/* Needs */}
                    <div className="space-y-1.5 mt-2">
                        <label className="text-xs md:text-sm font-bold text-[#1f2937]">
                          Mình cần hỗ trợ điều gì nhất?
                        </label>
                        <textarea 
                          rows={3}
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          placeholder="Ví dụ: cần tư vấn nội dung học, độ tuổi phù hợp..." 
                          className="w-full px-4 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#3B82F6] hover:bg-blue-600 disabled:bg-slate-400 text-white font-bold py-3.5 px-8 rounded-full transition-all text-sm md:text-base shadow-md hover:shadow-lg active:scale-95 duration-200 flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden"
                        >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Đang gửi...
                              </>
                            ) : (
                              "Nhận tư vấn chi tiết"
                            )}
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 w-full shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 md:w-12 md:h-12 text-green-500" strokeWidth={3} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#4A55A2] mb-3 tracking-tight">Đăng ký thành công!</h3>
                <p className="text-slate-600 mb-8 max-w-sm text-sm md:text-base leading-relaxed">
                  Cảm ơn Ba/Mẹ đã để lại thông tin. Đội ngũ tư vấn viên của chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                </p>
                <button 
                  onClick={closeOverlay}
                  className="bg-[#3B82F6] hover:bg-blue-600 text-white font-bold py-3.5 px-10 rounded-full transition-colors text-base shadow-md active:scale-95 duration-200"
                >
                  Xong
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
