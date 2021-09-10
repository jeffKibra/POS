import { Switch, Route } from "react-router-dom";

import * as routes from "../constants/routes";

//import pages
import CreateProductPage from "../Pages/Products/CreateProductPage";

export default function AppRouter(props) {
  return (
    <Switch>
      <Route exact path={routes.CREATE_PRODUCT} component={CreateProductPage} />
    </Switch>
  );
}
