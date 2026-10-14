export * from './types.js';
export * from './engine/rules.js';
export * from './actions/sanitize.js';
export * from './evaluators/security.js';
export * from './providers/status.js';
export declare const canaryGuardPlugin: {
    name: string;
    description: string;
    actions: {
        name: string;
        similes: string[];
        description: string;
        validate: (_runtime: any, message: any) => Promise<boolean>;
        handler: (_runtime: any, message: any, _state?: any, options?: {
            strictMode?: boolean;
            content?: string;
        }, callback?: (response: {
            text: string;
            data?: import("./types.js").SanitizeResult;
        }) => void) => Promise<import("./types.js").SanitizeResult>;
        examples: {
            user: string;
            content: {
                text: string;
            };
        }[][];
    }[];
    evaluators: {
        name: string;
        similes: string[];
        description: string;
        validate: (_runtime: any, message: any) => Promise<boolean>;
        handler: (_runtime: any, message: any, state?: any) => Promise<import("./types.js").SanitizeResult>;
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
    }[];
    providers: {
        get: (_runtime: any, _message: any, state?: any) => Promise<string>;
    }[];
};
export default canaryGuardPlugin;
//# sourceMappingURL=index.d.ts.map