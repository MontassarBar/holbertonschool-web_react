import $ from "jquery";
import _ from 'lodash';
import './body.css'

$('<button>Click here to get started</button>').appendTo('body');
$("<p id='count'></p>").appendTo('body');

let count = 0;
function updateCounter() {
count++;
$('#count').text(`${count} clicks on the button`);
}
$('button').on('click', _.debounce(updateCounter, 500));
