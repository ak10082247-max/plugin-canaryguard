import { sanitizeAction } from './actions/sanitize.js';
import { canaryGuardEvaluator } from './evaluators/security.js';
import { canaryGuardProvider } from './providers/status.js';

export * from './types.js';
export * from './engine/rules.js';
export * from './actions/sanitize.js';
export * from './evaluators/security.js';
export * from './providers/status.js';

export const canaryGuardPlugin = {
  name: 'canaryguard',
  description: 'Deterministic prompt injection defense, Unicode scrubber, and wallet drain firewall for ElizaOS agents on Base.',
  actions: [sanitizeAction],
  evaluators: [canaryGuardEvaluator],
  providers: [canaryGuardProvider],
};

export default canaryGuardPlugin;
