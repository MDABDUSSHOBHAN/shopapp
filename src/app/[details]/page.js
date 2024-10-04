import AddToCartButton from "@/components/ui/Add-to-cart";
import { fetchProductDetails } from "../action/pagge";

 async function ProductDetails({params}){
    const getProductDetails = await fetchProductDetails(params.details)

    console.log(getProductDetails,'getProduct');
    return (
        <div className=" max-w-6xl mx-auto p-2">
            <div className="p-6">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                   <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">

                    <img
                    
                    src={getProductDetails?. thumbnail}
                    alt={getProductDetails?.title}
                    className="w-4/5 rounded object-cover"
                    
                    
                    />
                    <hr className="border-black border-2  py-0"/>
                    <div className="flex flex-wrap gap-5 justify-center mx-auto">
                        {
                            getProductDetails?.images.map((imageItem)=>(

                                <img
                                
                                src={imageItem}
                                alt={imageItem}
                                className="w-24 cursour-pointer"
                                
                                
                                />
                            ))
                        }

                    </div>
                   </div>
                   <div className="lg:col-span-2">
                    <h2 className="text-gray-900 text-sm">{getProductDetails?.title}</h2>
                    <p className="mt-5 text-orange-600 font-bold text-2xl">${getProductDetails?.price}</p>
                    <h3 className="text-justify font-bold text-gray-800">
                        {getProductDetails?.description}
                    </h3>
                    <AddToCartButton  productItem = {getProductDetails}/> 
                   </div>
                </div>

            </div>
           


        </div>
    )
}
export default ProductDetails;