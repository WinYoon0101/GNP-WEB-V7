export async function submitToGoogleSheets(data: any) {
  // URL Web App từ Google Sheets của bạn
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMqLElA2lCd8gFpsr-PJ9zqh7NV2m3BC6mvVS-32HKK5dJQ7RhHMtyGWWaB80rOsk5Lg/exec";

  try {
    // Chuẩn hóa dữ liệu theo format script của bạn (name, phone, email, age, message)
    const payload = {
      name: data.name || "",
      phone: data.phone || "",
      email: data.email || "",
      age: data.age || data.ageGroup || data.course || "",
      message: data.message || data.note || data.content || "",
      timestamp: new Date().toLocaleString("vi-VN"),
      formSource: data.formType || "General"
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    
    return { success: true };
  } catch (error) {
    console.error("Lỗi khi gửi dữ liệu đến Google Sheets:", error);
    return { success: false, error };
  }
}
