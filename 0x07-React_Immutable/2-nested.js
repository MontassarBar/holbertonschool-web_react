import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    if (!object || !array || !array.length) return undefined;

    const nested = fromJS(object);
    return nested.getIn([...array]);
}
