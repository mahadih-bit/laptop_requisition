import { CheckCircle2, Clock, UserCheck } from "lucide-react";

const ApprovalStep = ({ title, role, status, date }: any) => (
  <div className="flex items-start gap-4 p-4 border rounded-xl bg-white">
    <div className={`mt-1 ${status === 'Approved' ? 'text-green-500' : 'text-slate-300'}`}>
      {status === 'Approved' ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
          status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-xs text-slate-500">{role}</p>
      {date && <p className="text-[10px] text-slate-400 mt-1 italic">Timestamp: {date}</p>}
    </div>
  </div>
);

export default function PartCApproval() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800">Approval Workflow & Audit Trail</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <ApprovalStep 
          title="Mahadi Hasan" 
          role="Prepared by (Requester)" 
          status="Approved" 
          date={new Date().toLocaleString()} 
        />
        <ApprovalStep 
          title="Pending Review" 
          role="Approved by (HOD / HOB)" 
          status="Pending" 
        />
        <ApprovalStep 
          title="Pending Review" 
          role="Verified by (People Team)" 
          status="Pending" 
        />
        <ApprovalStep 
          title="Pending Review" 
          role="Checked by (MIS Evaluator)" 
          status="Pending" 
        />
      </div>
      
      <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
        <p className="text-xs text-slate-500 text-center">
          Note: Final approval is subject to budget availability and MIS technical validation.
        </p>
      </div>
    </div>
  );
}
