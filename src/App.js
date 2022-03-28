import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import Preview from "./components/Preview";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authOperations, authSelectors } from "./redux/auth";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactView"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsLoggedIn);
  console.log(isFetchingCurrentUser);
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser ? (
        <Preview />
      ) : (
        <Container>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </Container>
      )}
    </>
  );
}
