import type { ExecutionResult, TracingMessage, TracingStep } from "@nomicfoundation/edr";
import { MessageTrace } from "./message-trace";
/**
 * Consumes the incoming VM trace events, until an error occurs, to keep track
 * of the last top level message trace/error.
 */
export declare class VMTracer {
    tracingSteps: TracingStep[];
    private _messageTraces;
    private _lastError;
    private _maxPrecompileNumber;
    constructor();
    getLastTopLevelMessageTrace(): MessageTrace | undefined;
    getLastError(): Error | undefined;
    private _shouldKeepTracing;
    addBeforeMessage(message: TracingMessage): void;
    addStep(step: TracingStep): void;
    addAfterMessage(result: ExecutionResult): void;
}
//# sourceMappingURL=vm-tracer.d.ts.map