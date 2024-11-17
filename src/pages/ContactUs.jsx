import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firbaseConfig";
import Desktop from "../components/ContactUs/Desktop";
import Mobile from "../components/ContactUs/Mobile";
import { setData } from "../components/ContactUs/contactUsSlice.js";

export default function ContactUs() {
  const detectMobile = useMobileDetect();
  const { data } = useSelector((state) => state.contactUs);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "contact"));

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
