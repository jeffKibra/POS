import { Switch, Route } from "react-router-dom";

import * as routes from "../constants/routes";

//import pages
import CreateProductPage from "../Pages/Products/CreateProductPage";
import ProductsListPage from "../Pages/Products/ProductsListPage";

export default function AppRouter(props) {
  return (
    <Switch>
      <Route exact path={routes.CREATE_PRODUCT} component={CreateProductPage} />
      <Route exact path={routes.PRODUCTS_LIST} component={ProductsListPage} />
    </Switch>
  );
}
