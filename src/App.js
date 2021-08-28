import { Provider } from "react-redux";
import LoginForm from "./Components/Forms/AuthForms/LoginForm";
import Theme from "./Theme/Theme";

import store from "./Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <LoginForm />
        </Theme>
      </Provider>
    </>
  );
}

export default App;
