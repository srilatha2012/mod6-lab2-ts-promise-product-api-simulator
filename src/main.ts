import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport,
    NetworkError,
    DataError
} from "./apiSimulator.js"

function handleApiCalls() :void {
     fetchProductCatalog()
     .then((products)=>{
        console.log("Product Catelog");
        console.log(products);
     })
     .then(()=>{

     })
     .catch((error) =>{
        if(error instanceof NetworkError) {
            console.error("Network error:" ,error.message);
        } else if(error instanceof DataError) {
            console.error("Data Error:",error.message);
        } else if( error instanceof Error) {
            console.error("Error:",error.message);
        } else {
            console.error("Unknown Error:", error);
        }
     })
     .finally(()=> {
        console.log("All API calls have been attempted.");
     })
}
// try {
//     fetchProductCatalog()
//         .then((products) => {
//             console.log(products);
//             const productId = products[0]?.id;
//             if (productId === undefined) {
//                 throw new Error("Product Id not found");
//             }
//             return fetchProductReviews(productId);

//         })
//         .then((reviews) => {
//             console.log(reviews);
//             if (reviews === undefined) {
//                 throw new Error("Reviews not found");
//             }
//             return fetchSalesReport();

//         })
//         .then((salesReport) => {
//             console.log(salesReport);
//         })
//         .catch((error) => {
//             console.error("An error occured", error.message);
//         });

// } catch (error) {



handleApiCalls();