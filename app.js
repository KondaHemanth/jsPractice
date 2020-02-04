//document.querySelector('li').style.background = 'yellow';

//const items = document.getElementsByClassName('collection-item');

//console.log(items[0]);
//items[0].style.color = 'red';


function add(){
  var task = document.forms['task-form']['task'].value;
  //console.log(task);

  var elem = document.createElement('li');
  elem.className = "collection-item";
  var node = document.createTextNode(task);


  var cross = document.createElement('a');
  cross.className = 'delete-item secondary-content';
  cross.innerHTML = '<i class="fa fa-remove"></i>';

  elem.appendChild(node);
  elem.appendChild(cross);

  var lists = document.getElementsByClassName('collection');
  //console.log(lists);
  var list = lists[0];

  list.appendChild(elem);
}
