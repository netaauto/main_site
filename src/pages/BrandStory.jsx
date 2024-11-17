
import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firbaseConfig";
import Desktop from "../components/BrandStory/Desktop";
import Mobile from "../components/BrandStory/Mobile";
import { setData } from "../components/BrandStory/brandStorySlice";

export default function BrandStory() {
  const detectMobile = useMobileDetect();
const {data} = useSelector((state)=>state.brandStory)
  const dispatch = useDispatch()


  const fetchData = async () => {
    const res = await getDoc(doc(db, "pages", "brandstory"));

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
