import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firbaseConfig";
import Desktop from "../components/Cooparation/Desktop";
import Mobile from "../components/Cooparation/Mobile";
import { setData } from "../components/Cooparation/cooperationSlice";

export default function InvestmentCooperation() {
  const detectMobile = useMobileDetect();
  const { data } = useSelector((state) => state.cooperation);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "cooperation"));

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
