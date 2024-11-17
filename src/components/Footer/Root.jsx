import useMobileDetect from "use-mobile-detect-hook";
import DesktopFooter from "./Desktop";
import MobileFooter from "./Mobile";
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firbaseConfig";
import { setData } from "./footerSlice";
import { useEffect } from "react";

export default function Root() {
  const dispatch = useDispatch();
    const detectMobile = useMobileDetect();
    const fetchData = async () => {
      await getDocs(collection(db, "footerPages")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(setData(newData));
      });
    };
  
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <>
    
    {detectMobile.isMobile()? <MobileFooter /> : <DesktopFooter />}
    </>
  )
}
