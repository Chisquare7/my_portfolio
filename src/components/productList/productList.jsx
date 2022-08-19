import "./productList.css";
import Product from "../product/product";
import { products } from "../../data";

const ProductList = () => {
	return (
		<div className="product_list">
			<div className="list_texts">
				<h1 className="list_title">Create, Code & Build. It's Code_Chi</h1>
				<p className="list_desc">
					Lama is a creative portfolio that your work has been waiting for.
					Beautiful homes, stunning portfolio styles & a whole lot more awaits
					inside.
				</p>
			</div>
			<div className="all_list">
				{products.map((item) => (
					<Product key={item.id} img={item.img} link={item.link} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
