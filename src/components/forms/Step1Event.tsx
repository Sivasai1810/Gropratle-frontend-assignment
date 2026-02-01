"use client";

import { EventDetails } from "@/types/form";

interface Step1Props {
    data: EventDetails;
    updateData: (data: Partial<EventDetails>) => void;
    onNext: () => void;
}

export default function Step1Event({ data, updateData, onNext }: Step1Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        updateData({ [name]: value });
    };

    const isComplete = data.name && data.type && data.startDate && data.location;

    return (
        <div className="space-y-10">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Event Basics</h2>
                <p className="text-gray-500 text-sm">Tell us about your event to get started.</p>
            </div>

            <div className="space-y-6">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Event Name</label>
                    <input
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="e.g. Smith & Co. Gala"
                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900 placeholder:text-gray-400"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Event Type</label>
                        <select
                            name="type"
                            value={data.type}
                            onChange={handleChange}
                            className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900"
                        >
                            <option value="">Select type...</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Concert">Concert</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            value={data.startDate}
                            onChange={handleChange}
                            className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Location</label>
                    <input
                        name="location"
                        value={data.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900 placeholder:text-gray-400"
                    />
                </div>
            </div>

            <button
                onClick={onNext}
                disabled={!isComplete}
                className="w-full py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
                Continue
            </button>
        </div>
    );
}
