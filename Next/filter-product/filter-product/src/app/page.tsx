import FilterComponent from "@/components/filter/FilterComponent";
import ProductList from "@/components/productList/productList";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <MantineProvider>
      <div>
        <FilterComponent/>
        <ProductList />
      </div>b ++++++++++++++++
    </MantineProvider>
  );
}
