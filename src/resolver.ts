import VCClient from "./client";
import type { VCData } from "./types";
import type { APIResponse } from "./types";

export class VCResolver {
  private client: VCClient;

  constructor(client: VCClient) {
    this.client = client;
  }

  // Get VC by wallet address
  async getVCByAddress(address: string): Promise<VCData[]> {
    const res = await this.client.instance.get<APIResponse<VCData[]>>(
      `/vc/${address}`
    );
    return res.data.data || [];
  }

  // Get VC by VC ID
  async getVCById(vcId: string): Promise<VCData | null> {
    const res = await this.client.instance.get<APIResponse<VCData>>(
      `/vc/id/${vcId}`
    );
    return res.data.data || null;
  }
}
