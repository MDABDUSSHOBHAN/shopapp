

"use server";

export async function fetchAllProducts() {
    try {
        const result = await fetch('https://dummyjson.com/products', {
            method: 'GET',
            cache: 'no-store'
        });

        // Parse the response
        const data = await result.json();

        return {
            success: true,
            data: data?.products,
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            message: 'An error occurred! Please try again.'
        };
    }


}


// This is for details page of product 

export async function fetchProductDetails(currentProcutID) {

    try{
        const result = await fetch(`https://dummyjson.com/products/${currentProcutID}`, {
            method: 'GET',
            cache: 'no-store'
        });

        // Parse the response
        const data = await result.json();

        return data;

    }catch(e){
        console.log(e);
        return {
            success: false,
            message: 'An error occurred! Please try again.'
        };
    }
    
}

export async function loginAction(){

     


}

export async function logoutAction(){


}