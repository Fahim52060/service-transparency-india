import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Upload, X, Download, QrCode as QrCodeIcon } from 'lucide-react';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';

interface FormData {
  personalInfo: {
    fullName: string;
    mobileNumber: string;
    aadhaarNumber: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    address: string;
    pincode: string;
  };
  certificateType: string;
  documents: File[];
  termsAccepted: boolean;
}

const Apply: React.FC = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: '',
      mobileNumber: '',
      aadhaarNumber: '',
      dateOfBirth: '',
      gender: '',
      email: '',
      address: '',
      pincode: ''
    },
    certificateType: '',
    documents: [],
    termsAccepted: false
  });

  const steps = [
    { number: 1, title: t('personalInfo') },
    { number: 2, title: t('certificateType') },
    { number: 3, title: t('documentUpload') },
    { number: 4, title: t('reviewSubmit') }
  ];

  const certificateTypes = [
    { value: 'income', label: t('income'), processingTime: '3-4 days' },
    { value: 'caste', label: t('caste'), processingTime: '5-7 days' },
    { value: 'domicile', label: t('domicile'), processingTime: '2-3 days' },
    { value: 'birth', label: t('birth'), processingTime: '1-2 days' },
    { value: 'character', label: t('character'), processingTime: '7-10 days' },
    { value: 'other', label: t('other'), processingTime: '5-7 days' }
  ];

  const requiredDocuments = {
    income: ['Aadhaar Card', 'Bank Statement', 'Salary Slip/Income Proof'],
    caste: ['Aadhaar Card', 'Birth Certificate', 'Parent\'s Caste Certificate'],
    domicile: ['Aadhaar Card', 'Utility Bill', 'Residence Proof'],
    birth: ['Hospital Certificate', 'Parent\'s ID Proof', 'Address Proof'],
    character: ['Aadhaar Card', 'Passport Size Photo', 'Police Verification'],
    other: ['Aadhaar Card', 'Relevant Documents']
  };

  const handleInputChange = (section: keyof FormData, field: string, value: any) => {
    if (section === 'personalInfo') {
      setFormData(prev => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      const validFiles = fileArray.filter(file => 
        file.size <= 5 * 1024 * 1024 && 
        ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)
      );
      
      if (validFiles.length !== fileArray.length) {
        toast({
          title: 'Invalid Files',
          description: 'Some files were skipped. Only PDF, JPG, PNG files under 5MB are allowed.',
          variant: 'destructive'
        });
      }

      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...validFiles]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const generateApplicationId = () => {
    return 'APP' + Date.now().toString().slice(-8);
  };

  const generateQRCode = async (appId: string) => {
    try {
      const qrUrl = await QRCode.toDataURL(`https://servicetransparency.gov.in/track/${appId}`);
      setQrCodeUrl(qrUrl);
    } catch (error) {
      console.error('QR Code generation failed:', error);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const appId = generateApplicationId();
    setApplicationId(appId);
    await generateQRCode(appId);
    
    setApplicationSubmitted(true);
    setIsSubmitting(false);
    
    toast({
      title: 'Application Submitted Successfully!',
      description: `Your application ID is ${appId}`,
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return Object.values(formData.personalInfo).every(value => value.trim() !== '');
      case 2:
        return formData.certificateType !== '';
      case 3:
        return formData.documents.length > 0;
      case 4:
        return formData.termsAccepted;
      default:
        return true;
    }
  };

  if (applicationSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Application Submitted Successfully!
              </h1>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="text-lg font-semibold text-blue-900 mb-2">
                  Application ID: {applicationId}
                </p>
                <p className="text-blue-700">
                  Estimated processing time: 3-5 business days
                </p>
              </div>

              {qrCodeUrl && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center justify-center gap-2">
                    <QrCodeIcon className="h-5 w-5" />
                    QR Code for Tracking
                  </h3>
                  <div className="flex justify-center">
                    <img src={qrCodeUrl} alt="QR Code" className="w-32 h-32" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Scan this QR code to track your application
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.print()} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Receipt
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/track'}>
                  Track Application
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${currentStep >= step.number 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    w-full h-0.5 mx-4
                    ${currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Step {currentStep}: {steps[currentStep - 1].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{t('fullName')} *</Label>
                      <Input
                        id="fullName"
                        value={formData.personalInfo.fullName}
                        onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">{t('mobileNumber')} *</Label>
                      <Input
                        id="mobileNumber"
                        value={formData.personalInfo.mobileNumber}
                        onChange={(e) => handleInputChange('personalInfo', 'mobileNumber', e.target.value)}
                        placeholder="Enter mobile number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aadhaarNumber">{t('aadhaarNumber')} *</Label>
                      <Input
                        id="aadhaarNumber"
                        value={formData.personalInfo.aadhaarNumber}
                        onChange={(e) => handleInputChange('personalInfo', 'aadhaarNumber', e.target.value)}
                        placeholder="Enter Aadhaar number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">{t('dateOfBirth')} *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.personalInfo.dateOfBirth}
                        onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">{t('gender')} *</Label>
                      <Select value={formData.personalInfo.gender} onValueChange={(value) => handleInputChange('personalInfo', 'gender', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.personalInfo.email}
                        onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">{t('address')} *</Label>
                    <Textarea
                      id="address"
                      value={formData.personalInfo.address}
                      onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                      placeholder="Enter complete address"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pincode">{t('pincode')} *</Label>
                    <Input
                      id="pincode"
                      value={formData.personalInfo.pincode}
                      onChange={(e) => handleInputChange('personalInfo', 'pincode', e.target.value)}
                      placeholder="Enter pincode"
                      className="max-w-xs"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Certificate Type */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <Label>Select Certificate Type *</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {certificateTypes.map((cert) => (
                        <Card 
                          key={cert.value}
                          className={`cursor-pointer transition-all ${
                            formData.certificateType === cert.value 
                              ? 'ring-2 ring-blue-500 bg-blue-50' 
                              : 'hover:shadow-md'
                          }`}
                          onClick={() => handleInputChange('certificateType', '', cert.value)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold">{cert.label}</h3>
                                <p className="text-sm text-gray-600">Processing: {cert.processingTime}</p>
                              </div>
                              <div className={`
                                w-5 h-5 rounded-full border-2 flex items-center justify-center
                                ${formData.certificateType === cert.value 
                                  ? 'border-blue-500 bg-blue-500' 
                                  : 'border-gray-300'
                                }
                              `}>
                                {formData.certificateType === cert.value && (
                                  <Check className="h-3 w-3 text-white" />
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {formData.certificateType && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-blue-50 rounded-lg p-6"
                    >
                      <h3 className="font-semibold text-blue-900 mb-3">Required Documents:</h3>
                      <ul className="space-y-2">
                        {requiredDocuments[formData.certificateType as keyof typeof requiredDocuments]?.map((doc, index) => (
                          <li key={index} className="flex items-center text-blue-800">
                            <Check className="h-4 w-4 mr-2 text-blue-600" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Step 3: Document Upload */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Upload Documents
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Drag and drop files here or click to browse
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Select Files
                      </label>
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Supported formats: PDF, JPG, PNG (Max 5MB each)
                    </p>
                  </div>

                  {formData.documents.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="font-semibold">Uploaded Files:</h3>
                      {formData.documents.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{file.name}</p>
                            <p className="text-sm text-gray-600">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Application Summary</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Personal Information</h4>
                        <div className="space-y-1 text-sm">
                          <p><strong>Name:</strong> {formData.personalInfo.fullName}</p>
                          <p><strong>Mobile:</strong> {formData.personalInfo.mobileNumber}</p>
                          <p><strong>Email:</strong> {formData.personalInfo.email}</p>
                          <p><strong>Aadhaar:</strong> {formData.personalInfo.aadhaarNumber}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Certificate Details</h4>
                        <div className="space-y-1 text-sm">
                          <p><strong>Type:</strong> {certificateTypes.find(c => c.value === formData.certificateType)?.label}</p>
                          <p><strong>Documents:</strong> {formData.documents.length} files uploaded</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: !!checked }))}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I hereby declare that the information provided is true and correct to the best of my knowledge. 
                      I agree to the terms and conditions and privacy policy of ServiceTransparency platform.
                    </Label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 mt-8 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" />
                      {t('submit')}
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
