
import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  doc, getDoc,  } from "firebase/firestore";
import { db } from "../firbaseConfig";
import Desktop from "../components/NetaU/Desktop";
import Mobile from "../components/NetaU/Mobile";
import  '../assets/style/u.css'
import { setData } from "../components/NetaU/netaSSlice";

export default function NetaU() {
  const detectMobile = useMobileDetect();
const {data} = useSelector((state)=>state.netaU)
  const dispatch = useDispatch()


  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "neta0=-u"));

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
