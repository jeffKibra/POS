import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Theme from "./Theme/Theme";
import Layout from "./Components/Layout/Layout";
import AppRouter from "./Router";

import store from "./Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Router>
            <Layout>
              <AppRouter />
            </Layout>
          </Router>
        </Theme>
      </Provider>
    </>
  );
}

export default App;
