function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  let ul = document.querySelector('ul.employee-list');
  ul.appendChild(li);
}

function addNewLiOnClick() {
  console.log('addNewLiOnClick called.')
  let addButton = document.querySelector('main form input[type="submit"]');
  addButton.addEventListener('click', function(event) {
    console.log('for some reason this event is getting called twice!!');
    console.log('calling addNewElementAsLi()');
    addNewElementAsLi();
    //document.querySelector('input').value = "";
  });
}


function clearEmployeeListOnLinkClick() {
  let clearButton = document.querySelector('main a');
  clearButton.addEventListener('click', function(event) {
    let ul = document.querySelector('ul.employee-list');
    let lis = ul.querySelectorAll('li')
    for (let i = 0; i < lis.length; i++) {
      //ul.removeChild(ul.querySelector(`li:nth-child(${i})`));
      lis[i].remove();
    }
  });
}
