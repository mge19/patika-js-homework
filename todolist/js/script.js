let items=JSON.parse(localStorage.getItem("items"));
let list=document.getElementById("list");
if(!items){items=[];}
else
{
    for(let i=0;i<items.length;i++){limaker(items[i]);}
}
function newElement() 
{
    let task=document.getElementById("task");
    if(task.value.length==0){$('#liveToastFail').toast('show');}
    else
    {
        limaker(task.value);
        items.push(task.value);
        localStorage.setItem("items",JSON.stringify(items));
        $('#liveToastSuccess').toast('show');
    }
}
function limaker(val)
{
    list.innerHTML+=`<li onclick="done(this)"> ${val} <button type="button" class="ml-2 mt-2 close" onclick="delete_element(this)" data-dismiss="toast" aria-label="Close">
    <span aria-hidden="true">&times;</span></button></li>`;
}
function delete_element(e)
{
    let index=[...e.parentNode.parentNode.children].indexOf(e.parentNode);
    items.splice(index,1);
    localStorage.setItem("items",JSON.stringify(items));
    list.removeChild(e.parentNode);
}
function done(e)
{
    e.style.backgroundColor="MidnightBlue";
    e.style.textDecoration="line-through";
    e.style.color="white";
    e.innerHTML=`<svg style="fill:white;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
  </svg>`+e.innerHTML;
}