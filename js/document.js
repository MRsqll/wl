 function magic(tag,className,content,target){
	let li=document.createElement(tag);
	li.classList.add(className);
	li.innerHTML =content;
	let ul=document.querySelector(target);
	ul.appendChild(li);
	return null;
}

function shuzi(arr){
	let o = [];
	for(let j=0;j<arr.length;j++){
		k=arr[j].city;
		v=arr[j].county;
		if(!o[k]){
			o[k]=[];
		}
			o[k].push(v);
	}
    return o;	
}


let g = shuzi(database);
for(let city in g){
	magic('div','city',city,'.body_header')
	g[city].forEach(county =>{
		magic('div','item_list',county,'.body_header')
	}) 
}
