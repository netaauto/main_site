
import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  doc, getDoc,  } from "firebase/firestore";
import { db } from "../firbaseConfig";
import Desktop from "../components/NetaV/Desktop";
import Mobile from "../components/NetaV/Mobile";
import { setData } from "../components/NetaV/netaVSlice";

export default function NetaV() {
  const detectMobile = useMobileDetect();
const {data} = useSelector((state)=>state.netaV)
  const dispatch = useDispatch()


  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "neta-v"));

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
