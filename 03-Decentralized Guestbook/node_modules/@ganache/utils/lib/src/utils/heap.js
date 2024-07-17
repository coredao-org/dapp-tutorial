"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
class Heap {
    /**
     * Creates a priority-queue heap where the highest priority element,
     * as determined by the `less` function, is at the tip/root of the heap.
     * To read the highest priority element without removing it call peek(). To
     * read and remove the element call `shift()`
     * @param less - the comparator function
     * @param refresher - the refresher function
     */
    constructor(less, refresher) {
        this.length = 0;
        this.array = [];
        this.less = less;
        this.refresher = refresher;
    }
    init(array) {
        this.array = array;
        const length = (this.length = array.length);
        for (let i = ((length / 2) | 0) - 1; i >= 0;) {
            this.down(i--, length);
        }
    }
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
    refresh(context) {
        const length = this.length;
        const mid = (length / 2) | 0;
        for (let i = mid; i < length; i++) {
            this.refresher(this.array[i], context);
        }
        for (let i = mid - 1; i >= 0;) {
            this.refresher(this.array[i], context);
            this.down(i--, length);
        }
    }
    /**
     * Pushes a new element onto the heap
     * @param value -
     */
    push(value) {
        const i = this.length++;
        this.array[i] = value;
        this.up(i);
    }
    size() {
        return this.length;
    }
    /**
     * Return the current best element. Does not remove it
     */
    peek() {
        return this.array[0];
    }
    clear() {
        this.length = this.array.length = 0;
    }
    /**
     * Removes and returns the element with the highest priority from the heap.
     * The complexity is O(log n) where n = this.size().
     * @returns the element with the highest priority. returns `undefined` if
     * there are no more elements in the heap.
     */
    shift() {
        const length = this.length;
        // if we are empty or about to be empty...
        if (length <= 1) {
            if (length === 0)
                return;
            const element = this.array[0];
            // finally, clear the array
            this.clear();
            return element;
        }
        // otherwise...
        // remember the best element
        const array = this.array;
        const best = array[0];
        const newLength = (this.length = length - 1);
        // put our last element at the start of the heap
        array[0] = array[newLength];
        // then sort from the new first element to the second to last element
        this.down(0, newLength);
        return best;
    }
    /**
     * Removes the highest priority element from the queue, replacing it with
     * the new element. This is equivalent to, but faster than, calling
     * `replace(0, newValue);`.
     * If you call this on an empty heap (`this.size() === 0`) you may find
     * unexpected behavior.
     * @param newValue -
     */
    replaceBest(newValue) {
        this.array[0] = newValue;
        this.down(0, this.length);
    }
    /**
     * Replaces the element at position `i` with the `newValue`. If the element at
     * position `i` doesn't exist, or if `i < 0` or `i > this.size()` you may
     * find unexpected behavior.
     * @param i -
     * @param newValue -
     */
    replace(i, newValue) {
        this.array[i] = newValue;
        this.fix(i);
    }
    /**
     * Removes the element at position `i`.
     * The complexity is O(log n) where n = this.size().
     * @param i - the element to remove
     */
    remove(i) {
        const newLength = --this.length;
        if (newLength !== i) {
            this.swap(i, newLength);
            if (!this.down(i, newLength)) {
                this.up(i);
            }
        }
    }
    /**
     * Removes the element with the highest priority from the heap
     * The complexity is O(log n) where n = this.size().
     * @returns `true` when there are more elements in the queue, `false` when the
     * last element was just removed. Calling `removeBest` when there are no more
     * elements in the queue will return `true`. So don't do that.
     */
    removeBest() {
        const array = this.array;
        const length = this.length;
        if (length === 1) {
            // finally, clear the array
            this.length = array.length = 0;
            return false;
        }
        const newLength = --this.length;
        // put our last element at the start of the heap
        array[0] = array[newLength];
        // then sort from the new first element to the second to last element
        this.down(0, newLength);
        return true;
    }
    /**
     * Re-establishes the heap ordering after the element at index `i` changes
     * its value. Changing the value of the element at index `i` and then
     * calling fix is equivalent to, but faster than, calling
     * `remove(i); push(newValue);`.
     * The complexity is O(log n) where n = this.size().
     * @param i -
     */
    fix(i) {
        if (!this.down(i, this.length)) {
            this.up(i);
        }
    }
    up(j) {
        const less = this.less.bind(null, this.array);
        for (let i; (i = ((j - 1) / 2) | 0), i !== j && less(j, i); j = i) {
            this.swap(i, j);
        }
    }
    down(i0, l) {
        const less = this.less.bind(null, this.array);
        let i = i0;
        for (let j1; (j1 = 2 * i + 1) < l;) {
            let j = j1; // left child
            let j2 = j1 + 1;
            if (j2 < l && less(j2, j1)) {
                j = j2; // = 2 * i + 2  // right child
            }
            if (!less(j, i)) {
                break;
            }
            this.swap(i, j);
            i = j;
        }
        return i > i0;
    }
    /**
     * Swaps the elements in the heap
     * @param i - The first element
     * @param j - The second element
     */
    swap(i, j) {
        const array = this.array;
        const first = array[i];
        array[i] = array[j];
        array[j] = first;
    }
    /**
     * Heap initialization helper for when you only know of a single item for the
     * heap.
     * @param item -
     * @param less -
     * @param refresher -
     */
    static from(item, less, refresher) {
        const heap = new Heap(less, refresher);
        heap.array = [item];
        heap.length = 1;
        return heap;
    }
}
exports.Heap = Heap;
//# sourceMappingURL=heap.js.map