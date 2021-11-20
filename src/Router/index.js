import { Switch, Route } from "react-router-dom";

import * as routes from "../constants/routes";

//import pages
import CreateProductPage from "../Pages/Products/CreateProductPage";
import ProductsListPage from "../Pages/Products/ProductsListPage";
import NewCategoryPage from "../Pages/Products/NewCategoryPage";
import CategoriesListPage from "../Pages/Products/CategoriesListPage";
import NewSalePage from "../Pages/Sales/NewSalePage";

export default function AppRouter(props) {
  return (
    <Switch>
      <Route exact path={routes.NEW_PRODUCT} component={CreateProductPage} />
      <Route exact path={routes.PRODUCTS_LIST} component={ProductsListPage} />
      <Route exact path={routes.NEW_CATEGORY} component={NewCategoryPage} />
      <Route
        exact
        path={routes.PRODUCTS_CATEGORIES}
        component={CategoriesListPage}
      />
      <Route exact path={routes.NEW_SALE} component={NewSalePage} />
    </Switch>
  );
}
