import { inspectContent } from '../engine/rules.js';
export const sanitizeAction = {
    name: 'CANARY_SANITIZE',
    similes: ['SANITIZE_TEXT', 'SCRUB_PROMPT', 'SECURITY_FIREWALL'],
    description: 'Explicitly sanitizes untrusted external text (scraped web content, external API output, or social feeds) before LLM prompt assembly.',
    validate: async (_runtime, message) => {
        return typeof message?.content?.text === 'string' && message.content.text.length > 0;
    },
    handler: async (_runtime, message, _state, options, callback) => {
        const input = options?.content ?? String(message?.content?.text ?? '');
        const strictMode = options?.strictMode ?? false;
        const result = inspectContent(input, strictMode);
        if (callback) {
            callback({
                text: result.sanitized_content,
                data: result,
            });
        }
        return result;
    },
    examples: [
        [
            {
                user: 'user',
                content: { text: 'Please sanitize this external article: <p>Article text</p><script>evil()</script>' },
            },
            {
                user: 'assistant',
                content: { text: 'Article text' },
            },
        ],
    ],
};
