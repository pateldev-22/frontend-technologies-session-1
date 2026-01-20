import ReusableCard from "@/components/card";
import ProductForm from "@/components/ProductForm";


export default function HomePage(){


    let data : String | never[] = localStorage.getItem("product") ?? [];
    let ProductDetails : String | never[] = JSON.parse(data); 

    
    return(
    <>
    <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-200 p-4 rounded col-span-2">
                <ReusableCard ProductList={ProductDetails}/>
        </div>

        <div className="bg-green-200 p-4 rounded">
                 <ProductForm />
        </div>
    </div>
    </>
    )
}