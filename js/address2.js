let format = s=>{
	return s.replace(/\/|，|、|电话：/g,' ').trim().replace(/\s+/g,' ').split(' ');
}
let arr =database.map(v =>{
	if(v.city && v.city.indexOf('市')==-1){
		v.city=v.city.concat('市');
	}
	if(v.county){
		v.county=v.county.replace(/营业部|外营业部|网点|一部|二部|、|省|省际|长北|际|\s+|/g,'').trim();
	}
	if(v.address){
		v.address=v.address.replace('地址：','');
	}
	if(v.phone){
		v.phone=format(String(v.phone));
	}
	return v;
})
console.table(arr);