import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport,
    NetworkError,
    DataError
} from "./apiSimulator.js"

function handleApiCalls(): void {

    //Step:1 fetch product catalog
    fetchProductCatalog()
        .then((products) => {
            console.log("Product Catelog");
            console.log(products);

            // Step2: for each product, fetch it reviews 
            const reviewPromises = products.map((product) => {
                return fetchProductReviews(product.id).then((reviews) => {
                    return {
                        product,
                        reviews
                    };
                });
            });
            //wait until all review api calls are completed
            return Promise.all(reviewPromises);

        })
        .then((productReviewData) => {
            console.log("product reviews");

            //Display reviews based on product id
            productReviewData.forEach((item) => {
                console.log(`Reviews for Item ${item.product.name}`);
                console.log(item.reviews);
            });

            //Step 3: fetch the sales report after product and reviews    
            return fetchSalesReport();
        })
        .then((salesReport) => {
            console.log("Sales Report");
            console.log(salesReport);
        })
        //Step 4: handle errors from any API call
        .catch((error) => {
            if (error instanceof NetworkError) {
                console.error("Network error:", error.message);
            } else if (error instanceof DataError) {
                console.error("Data Error:", error.message);
            } else if (error instanceof Error) {
                console.error("Error:", error.message);
            } else {
                console.error("Unknown Error:", error);
            }
        })

        //Step 5: Whether the api calls are succeeed or fail
        .finally(() => {
            console.log("All API calls have been attempted.");
        })
}
handleApiCalls();