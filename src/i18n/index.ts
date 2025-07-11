
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      apply: 'Apply',
      track: 'Track Application',
      dashboard: 'Dashboard',
      login: 'Login',
      
      // Landing Page
      heroTitle: 'Digital Government Services at Your Fingertips',
      heroSubtitle: 'Apply for certificates, track progress, and receive real-time updates - all in one place',
      applyNow: 'Apply Now',
      trackApplication: 'Track Application',
      
      // Features
      realTimeTracking: 'Real-time Tracking',
      smsEmailUpdates: 'SMS & Email Updates',
      multilingualInterface: 'Multilingual Interface',
      qrCertificates: 'QR-based Certificates',
      
      // Application Form
      personalInfo: 'Personal Information',
      certificateType: 'Certificate Type',
      documentUpload: 'Document Upload',
      reviewSubmit: 'Review & Submit',
      fullName: 'Full Name',
      mobileNumber: 'Mobile Number',
      aadhaarNumber: 'Aadhaar Number',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      email: 'Email',
      address: 'Address',
      pincode: 'Pincode',
      
      // Certificate Types
      income: 'Income Certificate',
      caste: 'Caste Certificate',
      domicile: 'Domicile Certificate',
      birth: 'Birth Certificate',
      character: 'Character Certificate',
      other: 'Other',
      
      // Status
      submitted: 'Submitted',
      inProgress: 'In Progress',
      completed: 'Completed',
      delayed: 'Delayed',
      rejected: 'Rejected',
      
      // Common
      submit: 'Submit',
      cancel: 'Cancel',
      download: 'Download',
      viewDetails: 'View Details',
      loading: 'Loading...',
      
      // Officer Portal
      officerDashboard: 'Officer Dashboard',
      approve: 'Approve',
      reject: 'Reject',
      markDelay: 'Mark Delay',
      
      // Admin
      auditWall: 'Audit Wall',
      heatmap: 'Service Heatmap',
      analytics: 'Analytics'
    }
  },
  hi: {
    translation: {
      home: 'होम',
      apply: 'आवेदन करें',
      track: 'आवेदन ट्रैक करें',
      dashboard: 'डैशबोर्ड',
      login: 'लॉग इन',
      
      heroTitle: 'आपकी उंगलियों पर डिजिटल सरकारी सेवाएं',
      heroSubtitle: 'प्रमाणपत्रों के लिए आवेदन करें, प्रगति ट्रैक करें, और वास्तविक समय अपडेट प्राप्त करें',
      applyNow: 'अभी आवेदन करें',
      trackApplication: 'आवेदन ट्रैक करें',
      
      realTimeTracking: 'वास्तविक समय ट्रैकिंग',
      smsEmailUpdates: 'SMS और ईमेल अपडेट',
      multilingualInterface: 'बहुभाषी इंटरफेस',
      qrCertificates: 'QR आधारित प्रमाणपत्र',
      
      personalInfo: 'व्यक्तिगत जानकारी',
      certificateType: 'प्रमाणपत्र प्रकार',
      documentUpload: 'दस्तावेज अपलोड',
      reviewSubmit: 'समीक्षा और सबमिट',
      fullName: 'पूरा नाम',
      mobileNumber: 'मोबाइल नंबर',
      aadhaarNumber: 'आधार नंबर',
      dateOfBirth: 'जन्म तिथि',
      gender: 'लिंग',
      email: 'ईमेल',
      address: 'पता',
      pincode: 'पिनकोड',
      
      income: 'आय प्रमाणपत्र',
      caste: 'जाति प्रमाणपत्र',
      domicile: 'निवास प्रमाणपत्र',
      birth: 'जन्म प्रमाणपत्र',
      character: 'चरित्र प्रमाणपत्र',
      other: 'अन्य',
      
      submitted: 'सबमिट किया गया',
      inProgress: 'प्रगति में',
      completed: 'पूर्ण',
      delayed: 'विलंबित',
      rejected: 'अस्वीकृत',
      
      submit: 'सबमिट करें',
      cancel: 'रद्द करें',
      download: 'डाउनलोड',
      viewDetails: 'विवरण देखें',
      loading: 'लोड हो रहा है...',
      
      officerDashboard: 'अधिकारी डैशबोर्ड',
      approve: 'स्वीकृत करें',
      reject: 'अस्वीकार करें',
      markDelay: 'विलंब चिह्नित करें',
      
      auditWall: 'ऑडिट वॉल',
      heatmap: 'सेवा हीटमैप',
      analytics: 'एनालिटिक्स'
    }
  },
  ta: {
    translation: {
      home: 'முகப்பு',
      apply: 'விண்ணப்பிக்கவும்',
      track: 'விண்ணப்பத்தை கண்காணிக்கவும்',
      dashboard: 'டாஷ்போர்டு',
      login: 'உள் நுழைய',
      
      heroTitle: 'உங்கள் விரல் நுனியில் டிஜிட்டல் அரசாங்க சேவைகள்',
      heroSubtitle: 'சான்றிதழ்களுக்கு விண்ணப்பிக்கவும், முன்னேற்றத்தை கண்காணிக்கவும், உண்மையான நேர புதுப்பிப்புகளைப் பெறவும்',
      applyNow: 'இப்போது விண்ணப்பிக்கவும்',
      trackApplication: 'விண்ணப்பத்தை கண்காணிக்கவும்',
      
      realTimeTracking: 'நிகழ்நேர கண்காணிப்பு',
      smsEmailUpdates: 'SMS மற்றும் மின்னஞ்சல் புதுப்பிப்புகள்',
      multilingualInterface: 'பன்மொழி இடைமுகம்',
      qrCertificates: 'QR அடிப்படையிலான சான்றிதழ்கள்',
      
      personalInfo: 'தனிப்பட்ட தகவல்',
      certificateType: 'சான்றிதழ் வகை',
      documentUpload: 'ஆவண பதிவேற்றம்',
      reviewSubmit: 'மதிப்பீடு மற்றும் சமர்ப்பிப்பு',
      fullName: 'முழு பெயர்',
      mobileNumber: 'கைபேசி எண்',
      aadhaarNumber: 'ஆதார் எண்',
      dateOfBirth: 'பிறந்த தேதி',
      gender: 'பாலினம்',
      email: 'மின்னஞ்சல்',
      address: 'முகவரி',
      pincode: 'அஞ்சல் குறியீடு',
      
      income: 'வருமான சான்றிதழ்',
      caste: 'சாதி சான்றிதழ்',
      domicile: 'குடியிருப்பு சான்றிதழ்',
      birth: 'பிறப்பு சான்றிதழ்',
      character: 'பண்பு சான்றிதழ்',
      other: 'மற்றவை',
      
      submitted: 'சமர்ப்பிக்கப்பட்டது',
      inProgress: 'செயல்பாட்டில்',
      completed: 'நிறைவானது',
      delayed: 'தாமதமானது',
      rejected: 'நிராகரிக்கப்பட்டது',
      
      submit: 'சமர்ப்பிக்கவும்',
      cancel: 'ரத்து செய்',
      download: 'பதிவிறக்கம்',
      viewDetails: 'விவரங்களைப் பார்க்கவும்',
      loading: 'ஏற்றுகிறது...',
      
      officerDashboard: 'அலுவலர் டாஷ்போர்டு',
      approve: 'அனுமதிக்கவும்',
      reject: 'நிராகரிக்கவும்',
      markDelay: 'தாமதத்தைக் குறிக்கவும்',
      
      auditWall: 'தணிக்கை சுவர்',
      heatmap: 'சேவை வெப்ப வரைபடம்',
      analytics: 'பகுப்பாய்வு'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
