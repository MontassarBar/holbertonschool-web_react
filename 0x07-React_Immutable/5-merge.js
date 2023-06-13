import { List, Map } from 'immutable';

export default function concatElements(page1, page2) {
    return List(page1).concat(List(page2));
}

export default function mergeElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);
    return map1.merge(map2);
}
