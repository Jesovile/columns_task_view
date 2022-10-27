export default function filter(filterParams, tasks) {
    let result = tasks;
    if (filterParams?.title) {
        result = filterByTitle(filterParams.title, result);
    }
    return result;
}

function filterByTitle(query, tasks) {
    return tasks.filter((item) => item.title && item.title.indexOf(query) !== -1)
}