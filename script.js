// وظيفة تبديل اللغة
document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.getElementById('languageToggle');
  let currentLang = 'ar'; // اللغة الافتراضية هي العربية
  
  // تحميل اللغة المحفوظة إذا وجدت
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    currentLang = savedLang;
  }
  
  // تطبيق اللغة الحالية
  applyLanguage(currentLang);
  
  // تبديل اللغة عند النقر على الزر
  languageToggle.addEventListener('click', function() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(currentLang);
    // حفظ اللغة المختارة
    localStorage.setItem('language', currentLang);
  });
  
  // تطبيق اللغة على جميع العناصر
  function applyLanguage(lang) {
    // تحديث نص الزر
    const languageText = lang === 'ar' ? 'English' : 'العربية';
    languageToggle.querySelector('span').textContent = languageText;
    
    // تحديث اتجاه الصفحة
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // تحديث جميع العناصر التي تحتوي على data-translate
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // تحديث عنوان الصفحة
    document.title = lang === 'ar' 
      ? 'السيرة الذاتية - عبد العزيز رضوان' 
      : 'CV - Abdulaziz Radwan';
  }
});