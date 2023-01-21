export interface ITask {
    id?: number;
    assigned: string;
    description: string;
    isDone?: boolean;
}

export type DTOTasks = ITask[];