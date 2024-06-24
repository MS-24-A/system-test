export const LOGIN =  `
mutation login($credentials:Login!) {
    login(credentials:$credentials){
        username
        token
        type
    }
}`;

export const CREATE_PRODUCT = `
mutation createProduct($product:ProductInput!) {
    createProduct(product: $product) {
        error
        message
        product {
            id
            name
            price
            status
        }
    }
}
`

export const UPDATE_PRODUCT = `
mutation updateProduct($product:ProductInput!) {
    updateProduct(product: $product) {
        error
        message
        product {
            id
            name
            price
            status
        }
    }
}
`

export const DELETE_PRODUCT = `
mutation deleteProduct($id:String!) {
    deleteProduct(id: $id) {
        error
        message
        product {
            id
            name
            price
            status
        }
    }
}
`