import { fetchAllProducts } from "./action/pagge";
import ProdutPage from "./com/Product/page";






export default async function Home() {
  const alldata = await fetchAllProducts();
  console.log(alldata.data);
  return (
    <div>
      <h4>shopping Cart</h4>

{/* grid sm:grid-cols-4 md:grid-cols-3 lg:gols-4 gap-10 max-w-6 mx-auto  p-2 */}


      <div className="min-h-[80vh] grid sm:grid-cols-4 gap-10  p-2">
        {
          alldata && alldata.data && alldata.data.length > 0 ?
            alldata.data.map(productItem => (

              <ProdutPage item={productItem} />))
            : (
              <p>No data available</p>
            )
        }

      </div>



    </div>
  );
}
