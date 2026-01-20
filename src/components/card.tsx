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
    const handleSearch = (e:any) => {
        setQuery(e.target.value);
    }
    const filteredData = ProductList.filter((item:any) =>
    item.toLowerCase().includes(query.toLowerCase().trim())
    );

    const handleDelete = (name : String)=> {
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
        style={{
          width: "100%",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    

          {filteredData}

    <div className="grid grid-cols-2 gap-2">
    {ProductList.map((product : Product) => (
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
            <CardFooter className="flex-col gap-2">
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
