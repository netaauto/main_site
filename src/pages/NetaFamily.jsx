import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firbaseConfig";
import Desktop from "../components/Family/Desktop.jsx";
import Mobile from "../components/Family/Mobile.jsx";
import { setData } from "../components/Family/familySlice.js";

export default function NetaFamily() {
  const detectMobile = useMobileDetect();
  const { data } = useSelector((state) => state.family);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "family"));

    if (res.exists()) {
      dispatch(setData(res.data().texts));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data && (
        <Fragment>
          {detectMobile.isMobile() ? (
            <Mobile data={data} />
          ) : (
            <Desktop data={data} />
          )}
        </Fragment>
      )}
    </>
  );
}
