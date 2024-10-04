"use client"

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useRouter } from "next/navigation";

  
export default function ProdutPage({item}){

  const router = useRouter();
  console.log(router);


    return <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
          <img
          
          src={item?. thumbnail}
          alt="image Not Found"
          className="h-full w-full object-cover object-top"
          
          
          />


        </div>
        <div className="p-6">
          <CardTitle className="text-lg font-bold text-gray-900">
          {item?.title}

          </CardTitle>
          <div className="mt-4 flex justify-between gap-2 items-center">
  <p className="text-lg font-extrabold text-gray-800">
  ${item?.price}
  </p>
  <Button onClick={() => router.push(`/${item?.id}`)}>Details</Button>
</div>

              
        </div>
      </CardContent>
    </Card>
}