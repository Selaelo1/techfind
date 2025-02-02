import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Building2, Users, Briefcase, ArrowRight, ArrowLeft } from 'lucide-react';

const companySchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  companySize: z.enum(['1-10', '11-50', '51-200', '201-500', '500+']),
  industry: z.string().min(1, 'Please select an industry'),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
});

const hiringSchema = z.object({
  hiringNeeds: z.array(z.string()).min(1, 'Select at least one hiring need'),
  projectTypes: z.array(z.string()).min(1, 'Select at least one project type'),
  budgetRange: z.enum(['<5k', '5k-20k', '20k-50k', '50k-100k', '100k+']),
});

type CompanyForm = z.infer<typeof companySchema>;
type HiringForm = z.infer<typeof hiringSchema>;

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'E-commerce',
  'Manufacturing',
  'Media',
  'Other',
];

const hiringNeeds = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'DevOps',
  'Data Science',
  'Cybersecurity',
  'Cloud Architecture',
];

const projectTypes = [
  'Full-time',
  'Part-time',
  'Project-based',
  'Contract',
];

const OnboardingStep = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
    {children}
  </div>
);

const EmployerOnboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CompanyForm & HiringForm>({
    companyName: '',
    companySize: '1-10',
    industry: '',
    website: '',
    hiringNeeds: [],
    projectTypes: [],
    budgetRange: '<5k',
  });

  const companyForm = useForm<CompanyForm>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      companyName: formData.companyName,
      companySize: formData.companySize,
      industry: formData.industry,
      website: formData.website,
    },
  });

  const hiringForm = useForm<HiringForm>({
    resolver: zodResolver(hiringSchema),
    defaultValues: {
      hiringNeeds: formData.hiringNeeds,
      projectTypes: formData.projectTypes,
      budgetRange: formData.budgetRange,
    },
  });

  const handleCompanySubmit = (data: CompanyForm) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleHiringSubmit = async (data: HiringForm) => {
    const finalData = { ...formData, ...data };
    try {
      // Here you would typically make an API call to save the data
      console.log('Submitting data:', finalData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving onboarding data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className={`h-1 ${step >= 1 ? 'bg-black' : 'bg-gray-200'}`} />
            </div>
            <div className="flex-1">
              <div className={`h-1 ${step >= 2 ? 'bg-black' : 'bg-gray-200'}`} />
            </div>
          </div>
        </div>

        {step === 1 && (
          <OnboardingStep>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-6 w-6 text-gray-400" />
              <h2 className="text-2xl font-bold">Company Details</h2>
            </div>

            <form onSubmit={companyForm.handleSubmit(handleCompanySubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  {...companyForm.register('companyName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
                {companyForm.formState.errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {companyForm.formState.errors.companyName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Size
                </label>
                <select
                  {...companyForm.register('companySize')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                >
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Industry
                </label>
                <select
                  {...companyForm.register('industry')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                >
                  <option value="">Select an industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                {companyForm.formState.errors.industry && (
                  <p className="mt-1 text-sm text-red-600">
                    {companyForm.formState.errors.industry.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Website (Optional)
                </label>
                <input
                  type="url"
                  {...companyForm.register('website')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="https://example.com"
                />
                {companyForm.formState.errors.website && (
                  <p className="mt-1 text-sm text-red-600">
                    {companyForm.formState.errors.website.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </OnboardingStep>
        )}

        {step === 2 && (
          <OnboardingStep>
            <div className="flex items-center space-x-2 mb-6">
              <Briefcase className="h-6 w-6 text-gray-400" />
              <h2 className="text-2xl font-bold">Hiring Preferences</h2>
            </div>

            <form onSubmit={hiringForm.handleSubmit(handleHiringSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What type of talent are you looking for?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {hiringNeeds.map((need) => (
                    <label key={need} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={need}
                        {...hiringForm.register('hiringNeeds')}
                        className="rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">{need}</span>
                    </label>
                  ))}
                </div>
                {hiringForm.formState.errors.hiringNeeds && (
                  <p className="mt-1 text-sm text-red-600">
                    {hiringForm.formState.errors.hiringNeeds.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What type of engagement are you looking for?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {projectTypes.map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={type}
                        {...hiringForm.register('projectTypes')}
                        className="rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
                {hiringForm.formState.errors.projectTypes && (
                  <p className="mt-1 text-sm text-red-600">
                    {hiringForm.formState.errors.projectTypes.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  What's your typical project budget range?
                </label>
                <select
                  {...hiringForm.register('budgetRange')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                >
                  <option value="<5k">Less than $5,000</option>
                  <option value="5k-20k">$5,000 - $20,000</option>
                  <option value="20k-50k">$20,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Complete Setup
                  <Users className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </OnboardingStep>
        )}
      </div>
    </div>
  );
};

export default EmployerOnboarding;