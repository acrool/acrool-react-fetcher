

type SortOrder = 'asc' | 'desc';

export function generateSortByProperty<T>(selector: (row: T) => any, order: SortOrder = 'asc'): (a: T, b: T) => number {
    return function(a: T, b: T): number {
        const aValue = selector(a);
        const bValue = selector(b);

        if (aValue < bValue) {
            return order === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    };
}
