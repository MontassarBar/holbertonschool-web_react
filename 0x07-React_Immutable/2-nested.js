import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
    const nested = fromJS(object);
    return nested.getIn([...array]);
}

export default accessImmutableObject;
