// let data = [
// 	{city:'大同市',county:'大同市营业部'},
// 	{city:'忻州市',county:'忻州市营业部'},
// 	{city:'太原市',county:'太原市营业部'},
// 	{city:'太原市',county:'小店区营业部'},

// ]

function f(arr){
	let k,v,o ={};

	for(let j=0;j<arr.length;j++){
		k=arr[j].city;
		v=arr[j].county;
		if(!o[k]){
			o[k]=[];
		}
			o[k].push([v]);
	}
	
	// arr.forEach(item => {
	// 	let k,v,o={};
	// 	for(let j=0;j<item.length;j++){
	// 		k=item.city;
	// 		v=item.county;
	// 		if(!o[k]){
	// 			o[k]=[];
	// 		}
	// 		o[k].push(o[v]);
	// 	}
		
	// 	return o;
	// })
	return o

	
}
let i=f(database);//调用database.js
for(let key in i){
	console.log('市:',key);
	i[key].forEach(v => console.log('县:',v));
}


//145分钟  2：25
let time= num => {return  parseInt(num /60) + ":" +  num % 60};
let a=time(145);
console.log(a);