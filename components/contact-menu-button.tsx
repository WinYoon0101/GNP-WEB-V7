'use client'
import { useState } from "react"
import { MessageCircle, X, Phone, MapPin, Mail, MessageSquare } from "lucide-react"

const getIcon = (type: string) => {
  switch (type) {
    case 'phone': return <Phone className="h-5 w-5 text-green-600" />;
    case 'zalo': return <MessageSquare className="h-5 w-5 text-blue-500" />;
    case 'email': return <Mail className="h-5 w-5 text-red-500" />;
    case 'map': return <MapPin className="h-5 w-5 text-blue-700" />;
    default: return <MessageCircle className="h-5 w-5 text-gray-500" />;
  }
}

export function ContactMenu({ contacts }: { contacts: any[] }) {
  const [isOpen, setIsOpen] = useState(false)
  
 const handleContact = (c: any) => {
    if (!c.value) return; // Không làm gì nếu không có giá trị

    switch (c.type) {
      case 'phone':
        // Lọc số và gọi
        window.location.href = `tel:${c.value.replace(/\D/g, '')}`;
        break;
      case 'zalo':
        // Lọc số và mở link Zalo
        window.open(`https://zalo.me/${c.value.replace(/\D/g, '')}`, "_blank");
        break;
      case 'email':
        window.location.href = `mailto:${c.value}`;
        break;
      default:
        // Đảm bảo link map có http/https
        const url = c.value.startsWith('http') ? c.value : `https://${c.value}`;
        window.open(url, "_blank");
    }
    setIsOpen(false);
}

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl w-64 p-4 animate-slide-up border border-gray-100">
           {contacts.map((c, i) => (
             <button 
                key={i} 
                onClick={() => handleContact(c)} 
                className="w-full p-3 hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors text-left"
             >
               {getIcon(c.type)}
               <span className="text-gray-700 font-medium">{c.label}</span>
             </button>
           ))}
           <button 
            onClick={() => setIsOpen(false)} 
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 p-3 bg-gray-800 hover:bg-gray-900 rounded-full text-white shadow-lg transition-colors"
           >
             <X className="h-5 w-5" />
           </button>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-6 right-6 z-50 bg-blue-600 p-4 rounded-full text-white shadow-2xl hover:scale-110 transition-transform hover:bg-blue-700"
        aria-label="Liên hệ"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </>
  )
}