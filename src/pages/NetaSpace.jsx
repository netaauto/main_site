import useMobileDetect from "use-mobile-detect-hook";
import Mobile from "../components/Space/Mobile";
import Desktop from "../components/Space/Desktop";

export default function NetaSpace() {
  const detectMobile = useMobileDetect();





  return <>{detectMobile.isMobile() ? <Mobile /> : <Desktop />}</>;
}
