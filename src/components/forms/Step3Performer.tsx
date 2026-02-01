"use client";

import { PerformerDetails } from "@/types/form";

interface Step3Props {
    data: PerformerDetails;
    updateData: (data: Partial<PerformerDetails>) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Step3Performer({ data, updateData, onNext, onPrev }: Step3Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        updateData({ [name]: name === "durationHours" ? Number(value) : value });
    };

    const isComplete = data.category && data.genre && data.durationHours > 0;

    return (
        <div className="space-y-10">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Performer Details</h2>
                <p className="text-gray-500 text-sm">Tell us about the talent you're looking for.</p>
            </div>

            <div className="space-y-8">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Category</label>
                    <select
                        name="category"
                        value={data.category}
                        onChange={handleChange}
                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900"
                    >
                        <option value="">Select category...</option>
                        <option value="Singer">Singer</option>
                        <option value="DJ">DJ</option>
                        <option value="Dancer">Dancer</option>
                        <option value="Band">Band</option>
                        <option value="Comedian">Comedian</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Genre / Style</label>
                    <input
                        name="genre"
                        value={data.genre}
                        onChange={handleChange}
                        placeholder="e.g. Pop, Jazz, Electronic"
                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900 placeholder:text-gray-400"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Duration (Hours)</label>
                    <input
                        type="number"
                        name="durationHours"
                        value={data.durationHours || ""}
                        onChange={handleChange}
                        placeholder="3"
                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900 placeholder:text-gray-400"
                    />
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
