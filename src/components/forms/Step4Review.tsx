"use client";

import { FormData } from "@/types/form";

interface Step4Props {
    data: FormData;
    onSubmit: () => void;
    onPrev: () => void;
    isSubmitting: boolean;
}

export default function Step4Review({ data, onSubmit, onPrev, isSubmitting }: Step4Props) {
    const { eventDetails, hireType, plannerDetails, performerDetails, crewDetails } = data;

    return (
        <div className="space-y-10">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Review</h2>
                <p className="text-gray-500 text-sm">One last look before we post it.</p>
            </div>

            <div className="space-y-6">
                <div className="pb-6 border-b-2 border-gray-50">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Event Basics</p>
                    <div className="grid grid-cols-2 gap-y-6 text-sm">
                        <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Name</p><p className="font-bold text-gray-900 text-base">{eventDetails.name}</p></div>
                        <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Type</p><p className="font-bold text-gray-900 text-base">{eventDetails.type}</p></div>
                        <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Date</p><p className="font-bold text-gray-900 text-base">{eventDetails.startDate}</p></div>
                        <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Location</p><p className="font-bold text-gray-900 text-base">{eventDetails.location}</p></div>
                    </div>
                </div>

                <div className="pb-6 border-b-2 border-gray-50">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Requirement: {hireType?.toUpperCase()}</p>
                    {hireType === "planner" && (
                        <div className="grid grid-cols-2 gap-y-6 text-sm">
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Budget</p><p className="font-bold text-gray-900 text-base">${plannerDetails.budget.toLocaleString()}</p></div>
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Service</p><p className="font-bold text-gray-900 text-base">{plannerDetails.planningType}</p></div>
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Level</p><p className="font-bold text-gray-900 text-base">{plannerDetails.experienceLevel}</p></div>
                        </div>
                    )}
                    {hireType === "performer" && (
                        <div className="grid grid-cols-2 gap-y-6 text-sm">
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Category</p><p className="font-bold text-gray-900 text-base">{performerDetails.category}</p></div>
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Genre</p><p className="font-bold text-gray-900 text-base">{performerDetails.genre}</p></div>
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Duration</p><p className="font-bold text-gray-900 text-base">{performerDetails.durationHours} hours</p></div>
                        </div>
                    )}
                    {hireType === "crew" && (
                        <div className="grid grid-cols-2 gap-y-6 text-sm">
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Type</p><p className="font-bold text-gray-900 text-base">{crewDetails.crewType}</p></div>
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Quantity</p><p className="font-bold text-gray-900 text-base">{crewDetails.quantity}</p></div>
                            <div><p className="text-gray-500 font-bold uppercase text-[10px] mb-1">Equipment</p><p className="font-bold text-gray-900 text-base">{crewDetails.equipmentRequired ? "Included" : "Required"}</p></div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={onPrev}
                    disabled={isSubmitting}
                    className="flex-1 py-4 text-gray-500 font-medium hover:text-gray-900 transition-colors disabled:opacity-20"
                >
                    Back
                </button>
                <button
                    onClick={onSubmit}
                    disabled={isSubmitting}
                    className="flex-1 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors disabled:opacity-20 flex items-center justify-center gap-2"
                >
                    {isSubmitting ? "Posting..." : "Confirm & Post"}
                </button>
            </div>
        </div>
    );
}
