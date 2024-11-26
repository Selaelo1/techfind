/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Plus, X } from "lucide-react";

const profileSchema = z.object({
  hourlyRate: z.number().min(1, "Hourly rate is required"),
  bio: z.string().min(100, "Bio must be at least 100 characters"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  qualifications: z
    .array(
      z.object({
        title: z.string().min(1, "Title is required"),
        institution: z.string().min(1, "Institution is required"),
        year: z.number().min(1900).max(new Date().getFullYear()),
        certificateUrl: z.string().url().optional(),
      })
    )
    .min(1, "At least one qualification is required"),
});

type ProfileForm = z.infer<typeof profileSchema>;

const CreateProfile = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = React.useState<string[]>([]);
  const [newSkill, setNewSkill] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      skills: [],
      qualifications: [
        { title: "", institution: "", year: new Date().getFullYear() },
      ],
    },
  });

  const qualifications = watch("qualifications");

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const addQualification = () => {
    const currentQualifications = watch("qualifications");
    if (currentQualifications.length < 5) {
      const newQualifications = [
        ...currentQualifications,
        { title: "", institution: "", year: new Date().getFullYear() },
      ];
      // Here you would update the form with the new qualifications array
    }
  };

  const onSubmit = async (data: ProfileForm) => {
    try {
      // Here you would typically make an API call to create the profile
      console.log("Profile data:", data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Profile creation error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Create Your Professional Profile
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 bg-white p-8 rounded-lg shadow"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hourly Rate (USD)
            </label>
            <div className="mt-1">
              <input
                type="number"
                {...register("hourlyRate", { valueAsNumber: true })}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              />
              {errors.hourlyRate && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.hourlyRate.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Professional Bio
            </label>
            <div className="mt-1">
              <textarea
                {...register("bio")}
                rows={4}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              />
              {errors.bio && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.bio.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <div className="mt-1">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  placeholder="Add a skill"
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Qualifications
            </label>
            {qualifications.map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-4 mb-4 p-4 border border-gray-200 rounded-md"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    {...register(`qualifications.${index}.title`)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Institution
                  </label>
                  <input
                    {...register(`qualifications.${index}.institution`)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Year
                  </label>
                  <input
                    type="number"
                    {...register(`qualifications.${index}.year`, {
                      valueAsNumber: true,
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Certificate URL (optional)
                  </label>
                  <input
                    type="url"
                    {...register(`qualifications.${index}.certificateUrl`)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addQualification}
              className="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Qualification
            </button>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
