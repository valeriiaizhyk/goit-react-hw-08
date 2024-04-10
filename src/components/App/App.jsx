import { useEffect } from "react";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p>Somthing went wrong!</p>}
      {loading && <p>Loading...</p>}
      <ContactList />
      <ToastContainer />
    </>
  );
}
