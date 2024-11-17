import { collection, getDocs } from "firebase/firestore";
import  { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { db } from "../firbaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../components/Calculator/calculatorSlice";
import Spinner from "../assets/images/spinner.gif";
export default function Calculator() {
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.calculator);
  const [price, setPrice] = useState("");
  const [percent, setPercent] = useState("");
  const [month, setMonth] = useState("");
  const [downPayment, setDownPayment] = useState(0); // "İlkin ödəniş"
  const [monthlyPayment, setMonthlyPayment] = useState(0); //"Aylıq ödəniş"
  const [creditMonth, setCreditMonth] = useState(0); // "Kredit müddəti (ay)
  const [isLoading, setIsLoading] = useState(false);
  const calculate = (e) => {
    e.preventDefault();
    setDownPayment((price * percent) / 100);
    setCreditMonth(month);

    const r = 0.008333;
    const P = price - (price * percent) / 100;
    const n = month;
    const M = (P * (r * (1 + r) ** n)) / ((1 + r) ** n - 1);
    setMonthlyPayment(M.toFixed(2));
  };

  const dispatch = useDispatch();

  const fetchData = async () => {
    setIsLoading(true)
    await getDocs(collection(db, "calculator")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setData(newData));
      setPrice(newData[0].price);
      setMonth(60);
      setPercent(20);
      setIsLoading(false)
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingWrapper>
          <img src={Spinner} alt="Spinner"  width={30}/>
        </LoadingWrapper>
      ) : (
        <CalculatorWrapper $display={monthlyPayment ? "flex" : "none"}>
          <Left>
            <h2>{t("creditCalculatorTitle")}</h2>
            <p>{t("calculatorDescription")}</p>

            <form action="" onSubmit={calculate}>
              <div className="form-item">
                <label htmlFor="model">{t("selectModel")}</label>
                <select
                  id="model"
                  onChange={(e) => setPrice(+e.target.value)}
                  defaultValue={data.length && data[0].price}
                >
                  {data.length &&
                    data.map((e, index) => {
                      return (
                        <option key={e.id} value={e.price}>
                          {e.name}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="form-item">
                <label htmlFor="price">{t("price")}</label>
                <input type="text" id="price" readOnly value={price} />
              </div>

              <div className="form-item">
                <label htmlFor="model">{t("downPayment")}</label>
                <select
                  id="model"
                  defaultValue={20}

                  onChange={(e) => setPercent(+e.target.value)}
                >
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                </select>
              </div>

              <div className="form-item">
                <label htmlFor="model">{t("creditMonth")}</label>
                <select
                  id="model"
                  defaultValue={60}
                  onChange={(e) => setMonth(+e.target.value)}
                >
                  <option value="12">12 </option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                  <option value="60">60</option>
                </select>
              </div>

              <input type="submit" value={t("calculate")} />
            </form>
          </Left>
          <Right
            $display={monthlyPayment ? "flex" : "none"}
            className="animate__fadeInRight animate__animated animate__faster"
          >
            <Item>
              <>{t("downPayment")}</>
              <span> {downPayment} azn</span>
            </Item>

            <Item>
              <>{t("creditMonth")}</>
              <span> {creditMonth}</span>
            </Item>

            <Item>
              <>{t("monthlyPayment")}</>
              <span> {monthlyPayment} azn</span>
            </Item>
          </Right>
        </CalculatorWrapper>
      )}
    </Wrapper>
  );
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
    color: #fff;
  span {
    color: #fff;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 33.3px; /* 185% */
  }
`;

const Right = styled.div`
  width: 30%;
  border-left: 1px solid #e9e9e9;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${(props) => props.$display};
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  padding: 0 50px;
  border-radius: 0 16px 16px 0;

  @media (max-width: 992px) {
    width: 100%;
    padding-block: 24px;
  }
`;

const Left = styled.div`
  width: 70%;
  padding: 61px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 992px) {
    width: 100%;
    padding: 8px;
    gap: 8px;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      margin: 24px 0;
    }
  }

  .form-item:nth-of-type(2) {
    background-color: #f6f6f6;
    &:hover {
      cursor: not-allowed;
    }
    input {
      background-color: #f6f6f6;
      cursor: not-allowed;
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
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  img{
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

const CalculatorWrapper = styled.div`
  width: 70vw;
  display: flex;
  border-radius: 16px;
  border: 1px solid #e9e9e9;
  margin-top: 100px;
  justify-content: ${(props) =>
    props.$display !== "none" ? "space-between" : "center"};

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    height: 100%;
    margin-top: 80px;
  }
`;
