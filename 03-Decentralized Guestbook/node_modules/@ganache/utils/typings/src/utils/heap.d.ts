declare type Comparator<T> = (values: T[], a: number, b: number) => boolean;
export declare class Heap<T, U = any> {
    length: number;
    array: T[];
    protected less: Comparator<T>;
    protected refresher: (item: T, context: U) => void;
    /**
     * Creates a priority-queue heap where the highest priority element,
     * as determined by the `less` function, is at the tip/root of the heap.
     * To read the highest priority element without removing it call peek(). To
     * read and remove the element call `shift()`
     * @param less - the comparator function
     * @param refresher - the refresher function
     */
    constructor(less: Comparator<T>, refresher?: (item: T, context: U) => void);
    init(array: T[]): void;
    /**
     * Updates all entries by calling the Heap's `refresher` function for each
     * item in the heap and then re-sorting.
     * @param context -
     */
    /**
     * Updates all entries by calling the Heap's `refresher` function for each
     * item in the heap and then re-sorting.
     * @param context -
     */
    refresh(context: U): void;
    /**
     * Pushes a new element onto the heap
     * @param value -
     */
    push(value: T): void;
    size(): number;
    /**
     * Return the current best element. Does not remove it
     */
    peek(): T;
    clear(): void;
    /**
     * Removes and returns the element with the highest priority from the heap.
     * The complexity is O(log n) where n = this.size().
     * @returns the element with the highest priority. returns `undefined` if
     * there are no more elements in the heap.
     */
    shift(): T | undefined;
    /**
     * Removes the highest priority element from the queue, replacing it with
     * the new element. This is equivalent to, but faster than, calling
     * `replace(0, newValue);`.
     * If you call this on an empty heap (`this.size() === 0`) you may find
     * unexpected behavior.
     * @param newValue -
     */
    replaceBest(newValue: T): void;
    /**
     * Replaces the element at position `i` with the `newValue`. If the element at
     * position `i` doesn't exist, or if `i < 0` or `i > this.size()` you may
     * find unexpected behavior.
     * @param i -
     * @param newValue -
     */
    replace(i: number, newValue: T): void;
    /**
     * Removes the element at position `i`.
     * The complexity is O(log n) where n = this.size().
     * @param i - the element to remove
     */
    remove(i: number): void;
    /**
     * Removes the element with the highest priority from the heap
     * The complexity is O(log n) where n = this.size().
     * @returns `true` when there are more elements in the queue, `false` when the
     * last element was just removed. Calling `removeBest` when there are no more
     * elements in the queue will return `true`. So don't do that.
     */
    removeBest(): boolean;
    /**
     * Re-establishes the heap ordering after the element at index `i` changes
     * its value. Changing the value of the element at index `i` and then
     * calling fix is equivalent to, but faster than, calling
     * `remove(i); push(newValue);`.
     * The complexity is O(log n) where n = this.size().
     * @param i -
     */
    fix(i: number): void;
    private up;
    private down;
    /**
     * Swaps the elements in the heap
     * @param i - The first element
     * @param j - The second element
     */
    private swap;
    /**
     * Heap initialization helper for when you only know of a single item for the
     * heap.
     * @param item -
     * @param less -
     * @param refresher -
     */
    static from<T, U>(item: T, less: Comparator<T>, refresher?: (item: T, context: U) => void): Heap<T, U>;
}
export {};
//# sourceMappingURL=heap.d.ts.map