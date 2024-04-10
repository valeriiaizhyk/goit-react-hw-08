import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrap}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};
