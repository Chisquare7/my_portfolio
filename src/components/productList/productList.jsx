import "./productList.css";
import Product from "../product/product";
import { products } from "../../data";

const ProductList = () => {
	return (
		<div className="product_list">
			<div className="list_texts">
				<h1 className="list_title">Create, Code & Build. It's Code_Chi</h1>
				<p className="list_desc">
					Code_Chi is a creative portfolio with a collection of websites and web
					applications. Beautiful and Immersive websites and web apps & a whole
					lot more awaits as you check them out.
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
