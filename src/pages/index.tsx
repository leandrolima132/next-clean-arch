import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { ProductProps } from "../@core/domain/entities/product";
import { container, Registry } from "../@core/infra/container-registry";
import { ListProductUseCase } from "../@core/application/product/list-product.use-case"
type HomeProps = {
  products: ProductProps[];
};

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <div>
      <h1>Ecommerce Clean Code</h1>
      <ul>
        {products.map((product, key) => (
          <li key={key}>
            <label>Nome: </label> {product.name}|
            <Link href={`/products/${product.id}`} passHref>
              Ver
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {

  const useCase = container.get<ListProductUseCase>(Registry.ListProductsUseCase);
  const products = await useCase.execute();

  return {
    props: {
      products: products.map((product) => product.toJSON()),
    },
  };
};


// class ListProductsUseCaseFactory{

//   static create(){
//     const gateway = new ProductHttpGateway(http);
//     return new ListProductsUseCase(gateway);
//   }
// }