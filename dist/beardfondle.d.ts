declare global  {
    interface String {
        /**
         * Converts string into string representation of beardfondle 'encoding'
         */
        beard: () => string;
        /**
         * Converts 'encoded' symbols back to a string
         */
        fondle: () => string;
    }
}
/**
 * Representation of characters supported by beardfondle
 */
export declare const symbols: {
    [s: string]: string;
};
export {};
