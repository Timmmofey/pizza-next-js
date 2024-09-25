import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard id={1} imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif" name="Чизбургер-пицца" price={450}/> */}
              <ProductGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 2,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 3,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 4,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 5,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 6,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 7,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 8,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 9,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 12,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 13,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 14,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 15,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 16,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 17,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                  {
                    id: 18,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 450 }],
                    price: 550,
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
