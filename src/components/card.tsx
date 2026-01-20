import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Product } from "@/types/products"


export default function ReusableCard({ProductList}:any) {
    console.log(ProductList);
  return (
    <>
    <div className="grid grid-cols-2 gap-2">

    {ProductList.map((product : Product) => (
    <Card className="max-w-sm mt-20 ml-10">
      <CardHeader>
        <CardTitle className="text-black">{product.name}</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
            <div className="text-amber-500">
                {product.price}
            </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
    </Card>
    ))}
    </div>
    </>
  )
}
