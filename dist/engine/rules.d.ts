import type { CryptoAddressFinding, SanitizeResult } from '../types.js';
export declare function matchesWalletCommand(value: string): boolean;
export declare function commandThreats(value: string): string[];
export declare function extractAddresses(value: string): CryptoAddressFinding[];
export declare function neutralizeCommandsInPlace(value: string): string;
export declare function inspectContent(content: string, strictMode?: boolean): SanitizeResult;
//# sourceMappingURL=rules.d.ts.map