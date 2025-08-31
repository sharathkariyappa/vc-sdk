import VCClient from "./client";
import type { APIResponse, VerifyVCRequest } from "./types";

export class VCVerifier {
  private client: VCClient;

  constructor(client: VCClient) {
    this.client = client;
  }

  // Verify VC with its ID and hash
  async verifyVC(vcId: string, credentialHash: string): Promise<boolean> {
    const res = await this.client.instance.post<APIResponse<boolean>>(
      `/vc/verify`,
      { vcId, credentialHash } as VerifyVCRequest
    );
    return res.data.success;
  }
}
