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
  let ul = document.querySelector('ul .employee-list');
  ul.appendChild(li);
}
