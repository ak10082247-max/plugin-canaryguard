import type { SanitizeResult } from '../types.js';
export declare const sanitizeAction: {
    name: string;
    similes: string[];
    description: string;
    validate: (_runtime: any, message: any) => Promise<boolean>;
    handler: (_runtime: any, message: any, _state?: any, options?: {
        strictMode?: boolean;
        content?: string;
    }, callback?: (response: {
        text: string;
        data?: SanitizeResult;
    }) => void) => Promise<SanitizeResult>;
    examples: {
        user: string;
        content: {
            text: string;
        };
    }[][];
};
//# sourceMappingURL=sanitize.d.ts.map