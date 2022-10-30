import { withDelayPromise } from './../utils/withDelayPromise';

export async function getTasks(count) {
    const result = [];
    return await new Promise((resolve) => {
        for (let i = 0; i < count; i++) {
            result.push(new Task(i));
        }
        resolve(result)
    })
        .then(result => withDelayPromise(2000)(result))
}

const TASK_STATUSES = [
    'OPEN',
    'IN_PROGRESS',
    'CLOSED',
];

class Task {
    constructor(i) {
        this.id = `Task_${i}`;
        this.title = `Task Title ${i}`;
        this.createDate = new Date(2022, i % 12, i % 29);
        this.status = TASK_STATUSES[i % TASK_STATUSES.length];
    }
}