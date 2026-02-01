"use client";

import { HireType } from "@/types/form";

interface Step2Props {
    selected: HireType;
    updateHireType: (type: HireType) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Step2HireType({ selected, updateHireType, onNext, onPrev }: Step2Props) {
    const options: { value: HireType; label: string; description: string }[] = [
        { value: "planner", label: "Event Planner", description: "Planning and coordination." },
        { value: "performer", label: "Performer", description: "DJs, bands, and solo artists." },
        { value: "crew", label: "Technical Crew", description: "Sound, light, and photography." },
    ];

    return (
        <div className="space-y-10">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Service Type</h2>
                <p className="text-gray-500 text-sm">Who do you want to hire for this event?</p>
            </div>

            <div className="space-y-4">
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => updateHireType(option.value)}
                        className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all ${selected === option.value
                                ? "border-gray-900 bg-gray-50"
                                : "border-gray-100 hover:border-gray-200"
                            }`}
                    >
                        <div className="text-left">
                            <p className="font-semibold text-gray-900">{option.label}</p>
                            <p className="text-sm text-gray-400">{option.description}</p>
                        </div>
                        {selected === option.value && (
                            <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </button>
                ))}
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
                    disabled={!selected}
                    className="flex-1 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors disabled:opacity-20"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
