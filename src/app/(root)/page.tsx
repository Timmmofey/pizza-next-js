import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/lib/find-pizzas";


export default async function Home({searchParams} : {searchParams: GetSearchParams}) {
  // const categories = await prisma.category.findMany({
  //     include: {
  //         products: {
  //             include: {
  //                 ingredients: true,  
  //                 items: true
  //             }
  //         }
  //     }
  // })

  const categories = await findPizzas(searchParams)

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)}/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense> <Filters /> </Suspense>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) => (
                  category.products.length > 0 && (
                    <ProductGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )) 
                )
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
