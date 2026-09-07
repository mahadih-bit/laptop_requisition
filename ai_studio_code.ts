import { z } from "zod";

export const WorkloadItemSchema = z.object({
  category: z.string(),
  software: z.string(),
  isSelected: z.boolean().default(false),
  userJustification: z.string().optional(),
  misValidation: z.enum(["Pending", "Recommended", "Not Recommended"]).default("Pending"),
});

export const RequisitionSchema = z.object({
  // Part A
  requisitionType: z.enum(["Upgrade", "Replacement", "New"]),
  requisitionDate: z.string(),
  justification: z.string().min(10, "Please provide a detailed justification"),
  
  // Requester Info
  requesterName: z.string(),
  requesterId: z.string(),
  department: z.string(),
  designation: z.string(),
  email: z.string().email(),
  contactNumber: z.string(),
  
  // User Details
  userName: z.string(),
  userId: z.string(),
  userDept: z.string(),
  userDesignation: z.string(),
  dateOfJoining: z.string(),
  dateOfRequirement: z.string(),
  quantity: z.number().min(1),
  budgetHead: z.string(),
  jobSummary: z.string(),
  proposedModel: z.string().optional(),

  // Part B
  workloads: z.array(WorkloadItemSchema),
  entitlementTier: z.enum(["Economic User", "Basic User", "Advanced User", "Super User"]).optional(),
  misRemarks: z.string().optional(),

  // Workflow
  status: z.enum(["Draft", "Pending HOD Approval", "Pending People Team", "Pending MIS Review", "Approved", "Rejected"]),
  currentStep: z.number().default(1),
});

export type RequisitionFormData = z.infer<typeof RequisitionSchema>;