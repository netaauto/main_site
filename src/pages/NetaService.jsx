
import useMobileDetect from "use-mobile-detect-hook";
import {  Fragment, useEffect } from "react";
import Desktop from "../components/Service/Desktop";
import Mobile from "../components/Service/Mobile";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firbaseConfig";
import { setData } from "../components/Service/serviceSlice";

export default function NetaService() {
  const detectMobile = useMobileDetect();
const {data} = useSelector((state)=>state.service)
  const dispatch = useDispatch()


  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "service"));

    if (res.exists()) {
      dispatch(setData(res.data().texts))
    }

  };

useEffect(()=>{
 fetchData();
}, [])


  return (
    <>    {data && <Fragment>
      {detectMobile.isMobile() ? <Mobile /> : <Desktop />}
      </Fragment>}
      </>

  );
}
