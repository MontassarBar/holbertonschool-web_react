import Immutable from 'immutable';

export function getListObject(array) {
    return Immutable.List(array);
}

export function addElementToList(list, element) {
    const list1 = List(list)
    return list1.push(element);
}
