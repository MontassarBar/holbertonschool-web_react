import { Map } from 'immutable';

const mergeDeeplyElements = (page1, page2) => Map(page1).merge(Map(page2));

export default mergeDeeplyElements;
