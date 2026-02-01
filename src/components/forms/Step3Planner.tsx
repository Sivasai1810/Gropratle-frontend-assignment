"use client";

import { PlannerDetails } from "@/types/form";

interface Step3Props {
    data: PlannerDetails;
    updateData: (data: Partial<PlannerDetails>) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Step3Planner({ data, updateData, onNext, onPrev }: Step3Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        updateData({ [name]: name === "budget" ? Number(value) : value });
    };

    const isComplete = data.budget > 0 && data.planningType && data.experienceLevel;

    return (
        <div className="space-y-10">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Planner Details</h2>
                <p className="text-gray-500 text-sm">Provide specific requirements for planning.</p>
            </div>

            <div className="space-y-8">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Estimated Budget ($)</label>
                    <input
                        type="number"
                        name="budget"
                        value={data.budget || ""}
                        onChange={handleChange}
                        placeholder="5000"
                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900 placeholder:text-gray-400"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Planning Type</label>
                    <select
                        name="planningType"
                        value={data.planningType}
                        onChange={handleChange}
                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900"
                    >
                        <option value="">Select type...</option>
                        <option value="Full Planning">Full Planning</option>
                        <option value="Partial Planning">Partial Planning</option>
                        <option value="Day-of Coordination">Day-of Coordination</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Experience Level</label>
                    <select
                        name="experienceLevel"
                        value={data.experienceLevel}
                        onChange={handleChange}
                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900"
                    >
                        <option value="">Select level...</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="5+ Years Experience">5+ Years Experience</option>
                        <option value="Expert / Luxury">Expert / Luxury</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={onPrev}
                    className="flex-1 py-4 text-gray-500 font-medium hover:text-gray-900 transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    disabled={!isComplete}
                    className="flex-1 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors disabled:opacity-20"
                >
                    Review
                </button>
            </div>
        </div>
    );
}
