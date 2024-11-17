import { Fragment } from "react";
import Mobile from "../components/UserManual/Mobile";
import Desktop from "../components/UserManual/Desktop";
import useMobileDetect from "use-mobile-detect-hook";
import '../assets/style/manual.css'

export default function UserManual() {
  const detectMobile = useMobileDetect();

  return (
    <Fragment>{detectMobile.isMobile() ? <Mobile /> : <Desktop />}</Fragment>
  );
}
