export interface EventDetails {
    name: string;
    type: string;
    startDate: string;
    endDate?: string;
    location: string;
    venue?: string;
}

export interface PlannerDetails {
    budget: number;
    planningType: string;
    experienceLevel: string;
}

export interface PerformerDetails {
    category: string;
    genre: string;
    durationHours: number;
}

export interface CrewDetails {
    crewType: string;
    quantity: number;
    equipmentRequired: boolean;
}

export type HireType = "planner" | "performer" | "crew" | "";

export interface FormData {
    eventDetails: EventDetails;
    hireType: HireType;
    plannerDetails: PlannerDetails;
    performerDetails: PerformerDetails;
    crewDetails: CrewDetails;
}

export const initialFormData: FormData = {
    eventDetails: {
        name: "",
        type: "",
        startDate: "",
        endDate: "",
        location: "",
        venue: "",
    },
    hireType: "",
    plannerDetails: {
        budget: 0,
        planningType: "",
        experienceLevel: "",
    },
    performerDetails: {
        category: "",
        genre: "",
        durationHours: 0,
    },
    crewDetails: {
        crewType: "",
        quantity: 1,
        equipmentRequired: false,
    },
};
