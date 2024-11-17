import useMobileDetect from "use-mobile-detect-hook";
import { Fragment, useEffect, useState } from "react";
import { db } from "../firbaseConfig";
import MobileInfo from "../components/Moment/MobileInfo";
import DesktopInfo from "../components/Moment/DesktopInfo";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function NetaMomentInfo() {
  const detectMobile = useMobileDetect();
  const { id } = useParams();

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await getDoc(doc(db, "blog", id));

    if (res.exists()) {
      setData(res.data());
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
            <MobileInfo data={data} />
          ) : (
            <DesktopInfo data={data} />
          )}
        </Fragment>
      )}
    </>
  );
}
