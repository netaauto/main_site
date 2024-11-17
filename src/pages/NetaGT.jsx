
import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  doc, getDoc,  } from "firebase/firestore";
import { db } from "../firbaseConfig";
import Desktop from "../components/NetaGT/Desktop";
import Mobile from "../components/NetaGT/Mobile";
import { setData } from "../components//NetaGT/netaGtSlice";

export default function NetaGT() {
  const detectMobile = useMobileDetect();
const {data} = useSelector((state)=>state.netaGt)
  const dispatch = useDispatch()


  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "neta-gt"));

    if (res.exists()) {
      dispatch(setData(res.data().texts))
    }

  };


useEffect(()=>{
 fetchData();
}, [])


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
