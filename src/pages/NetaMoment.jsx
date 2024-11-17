
import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import Desktop from "../components/Moment/Desktop";
import Mobile from "../components/Moment/Mobile";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firbaseConfig";
import { setData } from "../components/Moment/momentSlice";

export default function NetaMoment() {
  const detectMobile = useMobileDetect();
const {data} = useSelector((state)=>state.moment)
  const dispatch = useDispatch()


  const fetchData = async () => {
    await getDocs(collection(db, "blog"))
           .then((querySnapshot)=>{              
               const newData = querySnapshot.docs
                   .map((doc) => ({...doc.data(), id:doc.id }));

                   dispatch(setData(newData))
               
           })
}

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
