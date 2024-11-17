
import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  doc, getDoc,  } from "firebase/firestore";
import { db } from "../firbaseConfig";
import Desktop from "../components/NetaS/Desktop";
import Mobile from "../components/NetaS/Mobile";
import { setData } from "../components/NetaS/netaSSlice";

export default function NetaS() {
  const detectMobile = useMobileDetect();
const {data} = useSelector((state)=>state.netaS)
  const dispatch = useDispatch()


  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "neta-s"));

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
