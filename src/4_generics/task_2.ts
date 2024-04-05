interface IWithID {
    id: number
}

type SortDirection = 'descending' | 'ascending';

const sortById = <T extends IWithID>(array: Array<T>, sortDirection: SortDirection): Array<T> => {
    return [...array].sort((a, b) => {
        if(sortDirection === 'ascending') return a.id - b.id;
        if(sortDirection === 'descending') return b.id - a.id;
        return 0;
    })
}

const a = [
    {id: 1, name: 'Ivan'},
    {id: 110, name: 'Ivan2'},
    {id: 20, name: 'Ivan3'},
    {id: 2, name: 'Ivan4'},
    {id: 116, name: 'Ivan4'},
]

const b = sortById(a, 'descending');

console.log(sortById(a, 'ascending'));

export {};