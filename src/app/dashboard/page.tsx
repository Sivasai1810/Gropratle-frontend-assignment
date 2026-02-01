"use client";

import { useEffect, useState, useRef } from "react";
import { FormData } from "@/types/form";
import { io, Socket } from "socket.io-client";

interface Requirement extends FormData {
    _id: string;
    createdAt: string;
}

export default function DashboardPage() {
    const [requirements, setRequirements] = useState<Requirement[]>([]);
    const [loading, setLoading] = useState(true);
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        // Initial fetch
        fetch("https://gropratle-backend.onrender.com/api/requirements/all")
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    setRequirements(res.data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch requirements:", err);
                setLoading(false);
            });

        // Socket.io connection
        socketRef.current = io("http://localhost:5001");

        socketRef.current.on("requirementCreated", (newRequirement: Requirement) => {
            setRequirements((prev) => [{ ...newRequirement, isNew: true } as any, ...prev]);
        });

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    if (loading) {
        return (
            <div className="max-w-5xl mx-auto px-6 pt-32 text-center">
                <p className="text-gray-500">Loading requirements...</p>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Requirements Dashboard</h1>
                        <p className="text-gray-500">Manage and view all your posted event requirements in real-time.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Live Connect</span>
                    </div>
                </div>

                {requirements.length === 0 ? (
                    <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-2xl">
                        <p className="text-gray-400">No requirements found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {requirements.map((req: any) => (
                            <div key={req._id} className={`p-8 border border-gray-100 rounded-2xl hover:border-gray-200 transition-all ${req.isNew ? 'animate-in fade-in slide-in-from-top-4 duration-1000 border-green-200 bg-green-50/10' : ''}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-3 py-1 bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.1em] rounded-full">
                                                {req.hireType}
                                            </span>
                                            {req.isNew && (
                                                <span className="px-3 py-1 bg-green-500 text-white text-[10px] font-black uppercase tracking-[0.1em] rounded-full animate-pulse">
                                                    Real-Time
                                                </span>
                                            )}
                                            <span className="text-xs font-bold text-gray-500">
                                                Posted on {new Date(req.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">{req.eventDetails.name}</h2>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <p className="text-[13px] font-bold text-gray-900 uppercase tracking-wider">{req.eventDetails.location}</p>
                                        <p className="text-[13px] font-medium text-gray-400 mt-1">{req.eventDetails.type} &bull; {req.eventDetails.startDate}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                                    {req.hireType === "planner" && (
                                        <>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Budget</p>
                                                <p className="text-lg font-bold text-gray-900">${req.plannerDetails.budget.toLocaleString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Service Type</p>
                                                <p className="text-lg font-bold text-gray-900">{req.plannerDetails.planningType}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Experience</p>
                                                <p className="text-lg font-bold text-gray-900">{req.plannerDetails.experienceLevel}</p>
                                            </div>
                                        </>
                                    )}
                                    {req.hireType === "performer" && (
                                        <>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Category</p>
                                                <p className="text-lg font-bold text-gray-900">{req.performerDetails.category}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Genre</p>
                                                <p className="text-lg font-bold text-gray-900">{req.performerDetails.genre}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Duration</p>
                                                <p className="text-lg font-bold text-gray-900">{req.performerDetails.durationHours} Hours</p>
                                            </div>
                                        </>
                                    )}
                                    {req.hireType === "crew" && (
                                        <>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Crew Type</p>
                                                <p className="text-lg font-bold text-gray-900">{req.crewDetails.crewType}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Quantity</p>
                                                <p className="text-lg font-bold text-gray-900">{req.crewDetails.quantity}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 leading-none">Equipment</p>
                                                <p className="text-lg font-bold text-gray-900">{req.crewDetails.equipmentRequired ? "Included" : "Required"}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
