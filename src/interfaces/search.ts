export interface IFilterOptions {
    toggle: boolean;
    sortBy: string;
    onSortByChange: (sort: string) => void;
    orderBy: string;
    onOrderByChange: (order: string) => void;
};