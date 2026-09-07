export const WORKLOAD_CATEGORIES = [
  { category: "Basic Operation", software: "MS Office, Web Apps, Email" },
  { category: "Data Analysis & BI", software: "PowerBI, Tableau, Advanced Excel" },
  { category: "Graphic Design", software: "Adobe Creative Suite, Illustrator" },
  { category: "Software Development", software: "VS Code, Docker, IntelliJ, SQL" },
  { category: "UX/UI Design", software: "Figma, Sketch, Adobe XD" },
  { category: "Data Science/ML", software: "Python, R, GPU Compute, Jupyter" },
  { category: "Finance & Audit", software: "SAP, ERP, Audit Tools" },
  { category: "Field Service", software: "Port Data Entry, Mobile Sync" },
];

export const INITIAL_DATA: any = {
  requisitionType: "New",
  requisitionDate: new Date().toISOString().split('T')[0],
  requesterName: "Mahadi Hasan",
  requesterId: "30733",
  department: "People Team",
  designation: "Assistant Manager",
  email: "mahadi.hasan@enterprise.com",
  contactNumber: "+88017XXXXXXXX",
  userName: "Mahadi Hasan",
  userId: "30733",
  userDept: "People Team",
  userDesignation: "Assistant Manager",
  dateOfJoining: "2022-01-15",
  dateOfRequirement: "",
  quantity: 1,
  budgetHead: "Human Resources - OPEX",
  jobSummary: "",
  workloads: WORKLOAD_CATEGORIES.map(w => ({ ...w, isSelected: false, userJustification: "", misValidation: "Pending" })),
  status: "Draft",
  currentStep: 1
};