export const ALL_PRODUCTS = `
query{
	allProducts {
		id
		name
		price
		status
	}
}`;

export const PRODUCT_BY_ID = `
query($id: String!){
	searchProduct(id: $id) {
		id
		name
		price
		status
	}
}`;