import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Clock, DollarSign, Calendar, Users } from 'lucide-react';
import { useAuthStore } from '../../lib/store';

const bidSchema = z.object({
  amount: z.number().min(1, 'Bid amount is required'),
  estimatedDuration: z.number().min(1, 'Estimated duration is required'),
  proposal: z.string().min(100, 'Proposal must be at least 100 characters'),
});

type BidForm = z.infer<typeof bidSchema>;

const ProjectDetails = () => {
  const { id } = useParams();
  const { user } = useAuthStore();
  const [showBidForm, setShowBidForm] = React.useState(false);

  // Mock project data (replace with API call)
  const project = {
    id,
    title: 'E-commerce Platform Development',
    description: 'Looking for a skilled developer to build a modern e-commerce platform using React and Node.js...',
    budget: { min: 2000, max: 5000 },
    deadline: '2024-04-30',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    status: 'open',
    createdAt: '2024-03-15',
    clientName: 'Tech Solutions Inc.',
    bids: [
      { id: '1', amount: 3500, freelancerName: 'John Doe', status: 'pending' },
      { id: '2', amount: 4000, freelancerName: 'Jane Smith', status: 'pending' },
    ],
  };

  const { register, handleSubmit, formState: { errors } } = useForm<BidForm>({
    resolver: zodResolver(bidSchema),
  });

  const onSubmitBid = async (data: BidForm) => {
    try {
      console.log('Bid data:', data);
      setShowBidForm(false);
      // Here you would make an API call to submit the bid
    } catch (error) {
      console.error('Bid submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Project Header */}
          <div className="bg-black text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Posted {new Date(project.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Budget: ${project.budget.min} - ${project.budget.max}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Deadline: {new Date(project.deadline).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                {project.bids.length} Proposals
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Project Details */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Project Description</h2>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <h3 className="font-semibold mb-2">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bid Section */}
            {user?.role === 'freelancer' && (
              <div className="border-t pt-6">
                {!showBidForm ? (
                  <button
                    onClick={() => setShowBidForm(true)}
                    className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900"
                  >
                    Submit Proposal
                  </button>
                ) : (
                  <form onSubmit={handleSubmit(onSubmitBid)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Bid Amount (USD)
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          {...register('amount', { valueAsNumber: true })}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                        />
                        {errors.amount && (
                          <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Estimated Duration (days)
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          {...register('estimatedDuration', { valueAsNumber: true })}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                        />
                        {errors.estimatedDuration && (
                          <p className="mt-1 text-sm text-red-600">{errors.estimatedDuration.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Proposal
                      </label>
                      <div className="mt-1">
                        <textarea
                          {...register('proposal')}
                          rows={6}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                          placeholder="Describe how you'll approach this project..."
                        />
                        {errors.proposal && (
                          <p className="mt-1 text-sm text-red-600">{errors.proposal.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900"
                      >
                        Submit Bid
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowBidForm(false)}
                        className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Existing Bids */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Submitted Proposals</h2>
              <div className="space-y-4">
                {project.bids.map((bid) => (
                  <div
                    key={bid.id}
                    className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{bid.freelancerName}</h3>
                        <p className="text-gray-600">Bid Amount: ${bid.amount}</p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {bid.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;