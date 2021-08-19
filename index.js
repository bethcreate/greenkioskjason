function createNode(element){
    return document.createElement(element);
}
function append(parent,el){
    return parent.appendChild(el);
}
const product = document.getElementById("products");
let url="http://localhost:5000/products";
fetch(url)
.then((res) => res.json())
.then(data => {
    return data.map(item=>{
        let li=createNode("li");
        li.innerHTML = item.name;
        append(product,li);
})
.catch(error => console.log(error))
  })
.catch(function(error) {
  console.log(error);
});
const vegList = document.getElementById("vegList");
let url1="http://localhost:5000/products/vegetables";
fetch(url1)
.then((res) => res.json())
.then(data => {
    return data.map(item=>{
        let li=createNode("li");
        li.innerHTML = item.name;
        append(vegList,li);
})
.catch(error => console.log(error))
  })
.catch(function(error) {
  console.log(error);
});
const fruList = document.getElementById("fruList");
let url2="http://localhost:5000/products/fruits";
fetch(url2)
.then((res) => res.json())
.then(data => {
    return data.map(item=>{
        let li=createNode("li");
        li.innerHTML = item.name;
        append(fruList,li);
})
.catch(error => console.log(error))
  })
.catch(function(error) {
  console.log(error);
});