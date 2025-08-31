import VCClient from "./client";
import { VCResolver } from "./resolver";
import { VCVerifier } from "./verifier";

export class VCSDK {
  public resolver: VCResolver;
  public verifier: VCVerifier;

  constructor(baseURL: string) {
    const client = new VCClient(baseURL);
    this.resolver = new VCResolver(client);
    this.verifier = new VCVerifier(client);
  }
}

export * from "./types";
