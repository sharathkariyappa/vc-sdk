export interface VCData {
    address: string;
    vcId: string;
    credentialHash: string;
    status: string;
    createdAt: string;
    updatedAt?: string;
  }
  
  export interface IssueVCRequest {
    address: string;
  }
  
  export interface VerifyVCRequest {
    vcId: string;
    credentialHash: string;
  }
  
  export interface APIResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }
  