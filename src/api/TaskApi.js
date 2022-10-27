export function getTasks (count) {
    return new Promise((res,rej) => {
        const result = [];
        for (let i=0; i<count; i++) {
            result.push(new Task(i));
        }
        setTimeout(() => {
            res(result);
        }, 2000);
    })
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
        this.createDate = new Date(2022, i%12, i%29);
        this.status = TASK_STATUSES[i % TASK_STATUSES.length];
    }
}