type Product = {
    id: number;
    name: string;
    price: number;
}

type ProductReview = {
    productId: number;
    reviewer: string;
    rating: number;
    comment: string;
}

type SalesReport = {
    totalSales: number;
    unitSold: number;
    averagePrice: number;
}

//custom error for request/Network related failures
export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

//custom error for invalid or missing data
export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError"
    }
}

//Mock product catalog data
const products: Product[] = [
    { id: 100, name: "Laptop", price: 1200 },
    { id: 101, name: "Headphone", price: 300 },
    { id: 102, name: "Keyboard", price: 250 },
    { id: 103, name: "Mouse", price: 10 }
]

//Mock review data linked to products by product id
const productReviewList: ProductReview[] = [
    { productId: 100, reviewer: "John", rating: 4, comment: "nice product" },
    { productId: 100, reviewer: "karan", rating: 5, comment: "great product" },
    { productId: 101, reviewer: "swara", rating: 4, comment: "amazing product" },
    { productId: 102, reviewer: "seeta", rating: 5, comment: "good product" },
    { productId: 103, reviewer: "geeta", rating: 5, comment: "great product" }
]

//Mock sales report data
const productSalesReport: SalesReport =
    { totalSales: 200, unitSold: 20, averagePrice: 150 }

//Simulate fetching the product catalog asynchronously  
export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        //console.log("hi");
        setTimeout(() => {
            //simulate network failures
            if (Math.random() >= 0.8) {
                reject(new NetworkError("Failed to fetch product catalog"));
                return;
            }
            if (products.length === 0) {
                reject(new DataError("product catalog is empty"));
                return;
            }
            resolve(products);
        }, 1000);
    });
}


//Simulate fetching the product reviews by product id asynchronously 
export function fetchProductReviews(productId: number)
    : Promise<ProductReview[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //simulate network failures
            if (Math.random() >= 0.8) {
                reject(new NetworkError("Failed to fetch product reviews"));
                return;
            }
            if (productReviewList.length === 0) {
                reject(new DataError("Product Reviews are empty"));
                return;
            }
            const productReviewsList = productReviewList.filter(item => item.productId === productId);
            if (productReviewsList.length === 0) {
                reject(new DataError("Product Reviews not found for Product Id:" + productId));
                return;
            }
            resolve(productReviewsList);

        }, 1500)
    });
}


//Simulate fetching sales report data 
export function fetchSalesReport(): Promise<SalesReport> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //simulate network failures
            if (Math.random() >= 0.8) {
                reject(new NetworkError("Failed to fetch sales report"));
                return;
            }
            if (productSalesReport.totalSales < 0 ||
                productSalesReport.unitSold < 0 ||
                productSalesReport.averagePrice < 0) {
                reject(new DataError("Sales report contains invalid data"));
                return;
            }
            resolve(productSalesReport);

        }, 1000)

    });
}

