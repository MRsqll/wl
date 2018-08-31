function magic(tag,className,content,target){
	let  a=document.createElement(tag);
	a.classList.add(className);
	a.innerHTML='<i class="left">&#xe654;</i>'+content+'<i class="right">&#xe60d;</i>';
	let b =document.querySelector(target);
	b.appendChild(a);
	return null;
}
function fn(arr){
	let k,v,o={};
	arr.forEach(item=>{
		k=item.name;
		v=item.address;
		if(!o[k]){
			o[k]=[];
		}
		o[k].push(v);
	})
	return o;
}
let ob=fn(database );


for(let name in ob){
	magic('li','address_city',name,'.body ul');
	ob[name].forEach(address=>{
		magic('li','address_address',address,'.body ul')
	})
}