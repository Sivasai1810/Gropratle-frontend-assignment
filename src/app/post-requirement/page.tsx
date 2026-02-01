"use client";
import { useState } from "react";
import { FormData, initialFormData } from "@/types/form";
import Step1Event from "@/components/forms/Step1Event";
import Step2HireType from "@/components/forms/Step2HireType";
import Step3Planner from "@/components/forms/Step3Planner";
import Step3Performer from "@/components/forms/Step3Performer";
import Step3Crew from "@/components/forms/Step3Crew";
import Step4Review from "@/components/forms/Step4Review";

export default function PostRequirementPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const updateFormData = (key: keyof FormData, value: any) => {
        setFormData((prev) => {
            const currentValue = prev[key];
            const newValue = typeof value === 'object' && !Array.isArray(value) && typeof currentValue === 'object'
                ? { ...currentValue, ...value }
                : value;

            return {
                ...prev,
                [key]: newValue
            };
        });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://gropratle-backend.onrender.com/api/requirements/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
            } else {
                alert("Error: " + (result.error || "Failed to submit"));
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please check if the backend is running.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="max-w-md mx-auto mt-32 px-6 text-center animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Requirement Posted</h2>
                <p className="text-gray-500 mb-10 leading-relaxed">
                    Your requirement has been submitted successfully. We'll be in touch soon.
                </p>
                <button
                    onClick={() => { setSubmitted(false); setStep(1); setFormData(initialFormData); }}
                    className="w-full py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                    Post Another
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-32 pb-24 px-6">
            <div className="max-w-lg mx-auto">
                {/* Progress indicator */}
                <div className="flex items-center gap-4 mb-12">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`h-1 flex-1 rounded-full transition-colors ${s <= step ? "bg-gray-900" : "bg-gray-100"}`}
                        />
                    ))}
                    <span className="text-xs font-medium text-gray-400 ml-2">Step {step} of 4</span>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    {step === 1 && (
                        <Step1Event
                            data={formData.eventDetails}
                            updateData={(d) => updateFormData("eventDetails", d)}
                            onNext={nextStep}
                        />
                    )}

                    {step === 2 && (
                        <Step2HireType
                            selected={formData.hireType}
                            updateHireType={(t) => updateFormData("hireType", t)}
                            onNext={nextStep}
                            onPrev={prevStep}
                        />
                    )}

                    {step === 3 && (
                        <>
                            {formData.hireType === "planner" && (
                                <Step3Planner
                                    data={formData.plannerDetails}
                                    updateData={(d) => updateFormData("plannerDetails", d)}
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                />
                            )}
                            {formData.hireType === "performer" && (
                                <Step3Performer
                                    data={formData.performerDetails}
                                    updateData={(d) => updateFormData("performerDetails", d)}
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                />
                            )}
                            {formData.hireType === "crew" && (
                                <Step3Crew
                                    data={formData.crewDetails}
                                    updateData={(d) => updateFormData("crewDetails", d)}
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                />
                            )}
                        </>
                    )}

                    {step === 4 && (
                        <Step4Review
                            data={formData}
                            onSubmit={handleSubmit}
                            onPrev={prevStep}
                            isSubmitting={isSubmitting}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
