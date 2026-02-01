"use client";

import { CrewDetails } from "@/types/form";

interface Step3Props {
  data: CrewDetails;
  updateData: (data: Partial<CrewDetails>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step3Crew({ data, updateData, onNext, onPrev }: Step3Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : (name === "quantity" ? Number(value) : value);
    updateData({ [name]: val });
  };

  const isComplete = data.crewType && data.quantity > 0;

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Crew Details</h2>
        <p className="text-gray-500 text-sm">Specify the technical support required.</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Crew Type</label>
          <select
            name="crewType"
            value={data.crewType}
            onChange={handleChange}
            className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900"
          >
            <option value="">Select type...</option>
            <option value="Sound">Sound</option>
            <option value="Lighting">Lighting</option>
            <option value="Photography">Photography</option>
            <option value="Videography">Videography</option>
            <option value="Stage Management">Stage Management</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={data.quantity || ""}
            onChange={handleChange}
            placeholder="1"
            className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors text-xl font-semibold text-gray-900 placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-3 pt-4">
          <input
            type="checkbox"
            id="equipmentRequired"
            name="equipmentRequired"
            checked={data.equipmentRequired}
            onChange={handleChange}
            className="w-6 h-6 rounded border-gray-200 text-gray-900 focus:ring-0 cursor-pointer"
          />
          <label htmlFor="equipmentRequired" className="text-sm font-bold text-gray-700 cursor-pointer">
            Crew must provide equipment
          </label>
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
