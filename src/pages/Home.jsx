
import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import Desktop from "../components/Home/Desktop";
import Mobile from "../components/Home/Mobile";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firbaseConfig";
import { setData } from "../components/Home/homeSlice";

export default function Home() {
  const detectMobile = useMobileDetect();
const {data} = useSelector((state)=>state.home)
  const dispatch = useDispatch()


  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "home"));

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
