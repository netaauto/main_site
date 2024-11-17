import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { db } from "../firbaseConfig";
import Spinner from "../assets/images/spinner.gif";
import S from "../assets/images/test-drive/neta-s.png";
import U from "../assets/images/test-drive/neta-u.png";
import V from "../assets/images/test-drive/neta-v.png";
import { useMask } from "@react-input/mask";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GT from "../assets/images/test-drive/neta-gt.png";
export default function TestDrive() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedCar, setSelectedCar] = useState(null);
  const [texts, setTexts] = useState(null);
  const inputRef = useMask({
    mask: "+994 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const fetchData = async () => {
    setIsLoading(true);
    const res = await getDoc(doc(db, "mainCategories", "models"));

    if (res.exists()) {
      setCars(res.data().pages);
    }

    setIsLoading(false);
  };

  const fetchDataForTexts = async () => {
    setIsLoading(true);
    const res = await getDoc(doc(db, "test-drive", "translate"));

    if (res.exists()) {
      setTexts(res.data().texts);
      console.log(res.data().texts);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchDataForTexts();
  }, []);

  const isPhoneNumberValid = () => {
    const phoneRegex = /^\+994 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const date2 = new Date(date);

    const day = date2.getUTCDate();
    const month = date2.getUTCMonth() + 1;
    const year = date2.getUTCFullYear();
    
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    
    // İstenen formatta tarih oluşturma
    const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;



    const date3 = new Date();
  
    const day1 = date3.getDate();
    const month1 = date3.getMonth() + 1;
    const year1 = date3.getFullYear();
    const hours1 = date3.getHours();
    const minutes1 = date3.getMinutes();
    const seconds1 = date3.getSeconds();
  
    const formattedDay1 = day1 < 10 ? `0${day1}` : day1;
    const formattedMonth1 = month1 < 10 ? `0${month1}` : month1;
    const formattedHours1 = hours1 < 10 ? `0${hours1}` : hours1;
    const formattedMinutes1 = minutes1 < 10 ? `0${minutes1}` : minutes1;
    const formattedSeconds1 = seconds1 < 10 ? `0${seconds1}` : seconds1;
  
    const formattedDate2 = `${formattedDay1}.${formattedMonth1}.${year1} ${formattedHours1}:${formattedMinutes1}:${formattedSeconds1}`;

    try {
      const docRef = await addDoc(collection(db, "test-drive-queries"), {
        carName: selectedCar.name,
        fullName,
        phoneNumber,
        date: formattedDate,
        sendDate:formattedDate2,
        read: false,
      });

        setSelectedCar(null);
        setFullName("");
        setPhoneNumber("");
        setDate(null);
        toast.success(t("successTestDrive"), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });


    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error(t("errorTestDrive"), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
  };

  return (
    <Wrapper>
   <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      {isLoading ? (
        <LoadingWrapper>
          <img src={Spinner} alt="Spinner" width={30} />
        </LoadingWrapper>
      ) : (
        <TestDriveWrapper>
          {texts && (
            <>
              <h2>{t("mainLang") === "az" ? texts[0]?.az : texts[0]?.en}</h2>
              <p>{t("mainLang") === "az" ? texts[1]?.az : texts[1]?.en}</p>
            </>
          )}

          <form onSubmit={handleSubmit}>
            <Left>
              {cars &&
                cars.map((car) => {
                  const img =
                    car.id === 2 ? S : car.id === 3 ? U : car.id === 4 ? V : GT;
                  if (car.visible) {
                    return (
                      <CarImgItem
                        $border={selectedCar?.id === car.id}
                        key={car.id}
                        onClick={() =>
                          setSelectedCar({ id: car.id, name: car.nameAz })
                        }
                      >
                        <img src={img} alt="Car" />
                        <span>
                          {t("mainLang") === "az" ? car.nameAz : car.nameEng}
                        </span>
                      </CarImgItem>
                    );
                  }
                })}
            </Left>

            <Right>
              <div className="form-item">
                <label htmlFor="name">{t("name")}</label>
                <input
                  type="text"
                  id="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="form-item phone">
                <label htmlFor="phonenumber">{t("phonenumber")}</label>
                <input
                  type="text"
                  id="phonenumber"
                  ref={inputRef}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="form-item">
                <label htmlFor="date">{t("date")}</label>
                <DatePicker id="date" value={date} onChange={setDate} />
              </div>

              <input
                type="submit"
                value={t("saveForTestDrive")}
                disabled={
                  !fullName || !isPhoneNumberValid() || !date || !selectedCar
                }
              />

{ (!fullName || !isPhoneNumberValid() || !date || !selectedCar) &&  <span className="warning">{t("requiredMessageForTestDrive")}</span> }
              
            </Right>
          </form>
        </TestDriveWrapper>
      )}
    </Wrapper>
  );
}

const CarImgItem = styled.div`
  border-radius: 12px;
  border: 1px solid #e9e9e9;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box !important;
  gap: 12px;
  padding: 12px;

  border: ${({ $border }) =>
    $border ? "1px solid #000" : "1px solid #E9E9E9"};
  &:hover {
    cursor: pointer;
    border: 1px solid #000;
  }
  img {
    width: 200px;
  }

  @media (max-width: 568px) {
    img {
      width: 100px;
    }
  }
  span {
    color: #818181;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 24.05px;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 12px;
  column-gap: 24px;
  @media (max-width: 992px) {
    width: 100%;
    grid-template-columns: 1fr;
    margin-bottom: 36px;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  img {
    width: 100px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const TestDriveWrapper = styled.div`
  width: 70vw;
  display: flex;
  gap: 24px;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #e9e9e9;
  margin-top: 5vw;
  background-color: #fff;
  padding: 48px;
  .warning{
    color: red;
    font-size: 12px;
  }

  @media (max-width: 1280px) {
    width: 90vw;
  }

  form {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    flex-direction: row;

    margin-top: 48px;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 36px;
      justify-content: center;
      align-items: center;

    }
  }

  .form-item {
    border-radius: 12px;
    border: 1px solid #e9e9e9;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3px 16px;
    @media (max-width: 768px) {
      padding: 8px 16px;
      input {
        font-size: 24px;
      }
    }
    select,
    input {
      border: none;
      outline: none;
      height: 30px;

      &:nth-child(1)::before {
        content: "+994";
        display: inline-block;
        margin-right: 5px; /* Gerekirse */
      }
    }

    label {
      color: #818181;

      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 24.05px; /* 185% */
    }
  }

  input[type="submit"] {
    grid-column: 1/3;
    border-radius: 16px;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    height: 56px;
    color: #fff;

    font-size: 15px;
    font-weight: 500;
    line-height: 27.75px; /* 185% */

    &:hover {
      background: #1a1919;
      cursor: pointer;
    }
    &:disabled {
      cursor: not-allowed;
      background: #6b6b6b;
      border: 1px solid #6b6b6b;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    margin-top: 80px;
  }
`;
