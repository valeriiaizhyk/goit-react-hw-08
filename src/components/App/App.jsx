import { Suspense, lazy } from "react";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const Registration = lazy(() =>
  import("../../pages/Registration/Registration")
);
const Login = lazy(() => import("../../pages/Login/Login"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
export default function App() {
  // const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster />
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p>Somthing went wrong!</p>}
      {loading && <p>Loading...</p>}
      <ContactList />
      <ToastContainer /> */}
    </>
  );
}
