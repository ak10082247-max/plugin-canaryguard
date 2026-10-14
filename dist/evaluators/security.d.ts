import type { SanitizeResult } from '../types.js';
export declare const canaryGuardEvaluator: {
    name: string;
    similes: string[];
    description: string;
    validate: (_runtime: any, message: any) => Promise<boolean>;
    handler: (_runtime: any, message: any, state?: any) => Promise<SanitizeResult>;
    examples: {
        context: string;
        messages: {
            user: string;
            content: {
                text: string;
            };
        }[];
        outcome: string;
    }[];
};
//# sourceMappingURL=security.d.ts.map