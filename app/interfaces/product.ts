export interface Product {

	id:number,
	title:string,
	company:string,
	status:string,
	revenue:string,
	ceo:Ceo
}

export interface Ceo{
	img:string,
	name:string
}
