import ReusableCard from "@/components/card";
import type { Product } from "@/types/products";


export default function HomePage(){
    const ProductDetails : Product[] = [
        { id: 1, name: 'mobile', price: "30000.00" },
        { id: 2, name: 'laptop', price: "250000.00" },
        { id: 3, name: 'earbuds', price: "2000.00" },
    ]

    return(
    <>
    <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-200 p-4 rounded col-span-2">
                <ReusableCard ProductList={ProductDetails}/>
        </div>

        <div className="bg-green-200 p-4 rounded">
            Component 2
        </div>
    </div>
    </>
    )
}