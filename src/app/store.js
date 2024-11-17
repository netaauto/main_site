import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../components/Header/headerSlice";
import homeSlice from "../components/Home/homeSlice";
import serviceSlice from "../components/Service/serviceSlice";
import momentSlice from "../components/Moment/momentSlice";
import brandStorySlice from "../components/BrandStory/brandStorySlice";
import joinusSlice from "../components/JoinUs/joinusSlice";
import cooperationSlice from "../components/Cooparation/cooperationSlice";
import contactUsSlice from "../components/ContactUs/contactUsSlice";
import familySlice from "../components/Family/familySlice";
import footerSlice from "../components/Footer/footerSlice";
import calculatorSlice from "../components/Calculator/calculatorSlice";
import netaGtSlice from "../components/NetaGT/netaGtSlice";
import netaSSlice from "../components/NetaS/netaSSlice";
import  netaVSlice  from "../components/NetaV/netaVSlice";
import netaUSlice  from "../components/NetaU/netaSSlice";

export const store = configureStore({
  reducer: {
    header: headerSlice,
    home: homeSlice,
    service: serviceSlice,
    moment: momentSlice,
    brandStory: brandStorySlice,
    joinUs: joinusSlice,
    cooperation: cooperationSlice,
    contactUs: contactUsSlice,
    family:familySlice,
    footer:footerSlice,
    calculator:calculatorSlice,
    netaGt:netaGtSlice,
    netaS:netaSSlice,
    netaV:netaVSlice,
    netaU:netaUSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
