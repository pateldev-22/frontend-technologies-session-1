import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Product } from "@/types/products"
import { useState } from "react";

export default function ReusableCard({ProductList}:any) {
    console.log(ProductList);
    const [query, setQuery] = useState<string>("");
    const [products,setProducts] = useState<Product[]>(ProductList);

    const handleSearch = (e:any) => {
        setQuery(e.target.value);
    }
    const filteredData = products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase().trim())
    );

    const handleDelete = (name : string)=> {
    const data = localStorage.getItem("product");
        if (!data) {
            console.warn("No data found in localStorage.");
            return;
    }

    let parsed_data = JSON.parse(data);

    if (!Array.isArray(parsed_data)) {
      return;
    }
        
    console.log(parsed_data);
    
    const filtered_data = parsed_data.filter(item => item.name !== name);

    localStorage.setItem("product",JSON.stringify(filtered_data));

    }


  return (
    <>
    ProductList
    <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="w-full p-2 mb-4 bg-amber-50 hover:bg-amber-100"
    />
    

    <div>
        Total Products : {products.length}
    </div>
    <div>
        Low Stock: {products.filter((p) => p.stock < 5).length}
    </div>
    <div>
        inventory value : {products.reduce((sum,acc) => sum+acc.price*acc.stock,0)}
    </div>

    <div className="grid grid-cols-2 gap-2">
    {filteredData.map((product : Product) => (
     <ul>
        <li key={product.id}>
            
            <Card className="max-w-sm mt-20 ml-10">
            <CardHeader>
                <CardTitle className="text-black">{product.name}</CardTitle>
                <CardDescription>
                Dummy Text
                </CardDescription>
            </CardHeader>
            <CardContent>
                    <div className="text-amber-500">
                        {product.price}
                    </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 bg-red-500 rounded p-2 text-white w-full sm:w-auto">
                <button onClick={() => handleDelete(product.name)}>delete</button>
            </CardFooter>
            </Card>
        </li>
     </ul>   
    
    ))}
    </div>
    </>
  )
}
