import ModelSlider from "./ModelSlider";
import Img1 from "../../assets/images/neta-u/1.png";
import Img2 from "../../assets/images/neta-u/2.png";
import ModelColorSelectSlider from './ModelColorSelectSlider'
import Image1 from '../../assets/images/neta-u/Image1.png'
import Image2 from '../../assets/images/neta-u/Image2.png'
import Image3 from '../../assets/images/neta-u/Image3.png'
import Image4 from '../../assets/images/neta-u/Image4.png'
import Color1 from '../../assets/images/neta-u/Color1.png'
import Color2 from '../../assets/images/neta-u/Color2.png'
import Color3 from '../../assets/images/neta-u/Color3.png'
import Color4 from '../../assets/images/neta-u/Color4.png'
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Desktop() {

  const {data} = useSelector((state)=>state.netaU)
  const {t} = useTranslation()


  return (
    <div className="pc-u">
      <div className="dom11" style={{ height: "100vh" }}>
        <div className="dom11_min">
          <div className="min_color">
            <div className="topFirst">
              <img
                src="https://www.netaauto.az/files/upload/a58bc6f7-6539-42c0-9cbb-19185e36aecb_001.1.jpg"
                alt=""
                className="oneImg"
              />
              <img
                src="https://www.netaauto.az/files/upload/85c706b9-e667-4b92-b9f1-39110670041a_Neta U-II (4).png"
                alt=""
                className="wenziImg"
              />
              <div className="topFirstText">{data[0][t("mainLang")]}</div>
              <div className="botxt"></div>
            </div>
            <div className="botxt">
            {data[1][t("mainLang")]}
            </div>
          </div>
        </div>
      </div>
      <div className="threeLunbo-u">
        <div
          className="threeTopTItle-u dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          {data[2][t("mainLang")]}
        </div>
        <div
          className="threeTopDetail-u dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          <p>{data[3][t("mainLang")]}</p>
        </div>

        <div className="threeBottom-u">
          <div className="slider">
            <ModelSlider images={[Img1, Img2]} data={data} />
          </div>
        </div>
      </div>
      <div className="sixTextImg">
        <img
          src="https://www.netaauto.az/files/upload/432ff6b9-33b7-44a9-9a61-a105bb64e0ef_哪吒U大内饰(中控副驾侧).jpg"
          alt=""
        />
        <div
          className="dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          <div className="t1">{data[8][t("mainLang")]}</div>
          <div className="t2">{data[9][t("mainLang")]}</div>
          <div className="t3">
            <div className="radio"></div>
            <div className="t33">{data[10][t("mainLang")]}</div>
          </div>
          <div className="t4">
            <div className="radio"></div>
            <div className="t44">
            {data[11][t("mainLang")]}
            {data[12][t("mainLang")]}
            </div>
          </div>
          <div className="t5">
            <div className="radio"></div>
            <div className="t33">{data[13][t("mainLang")]}
</div>
          </div>
        </div>
      </div>

      <div className="fourImgText">
        <div className="fourImg">
          <img
            src="https://www.netaauto.az/files/upload/11df8344-7fd2-4bb1-ad3f-60ba8ccac5bb_哪吒U正车尾.png"
            alt=""
            className="fourImg-add hvr-grow"
          />
        </div>
        <div
          className="fourDetailLi dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          <div className="fourDetail">
            <span>{data[14][t("mainLang")]}</span>
          </div>
          <div className="tabulation">
            <ul>
              <li>
                <div className="radio"></div>
                {data[15][t("mainLang")]}
              </li>
              <li>
                <div className="radio"></div>
                {data[16][t("mainLang")]}
              </li>
              <li>
                <div className="radio"></div>
                {data[17][t("mainLang")]}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fiveImgText">
      <div className="fiveLeftText dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="fourDetail">
          <span>{data[18][t("mainLang")]}</span>
          <span>{data[19][t("mainLang")]}</span>
        </div>
        <div className="fiveTextLeft">
          <div className="fiveTextLeftTOP">
            <span className="unit">{data[20][t("mainLang")]}</span>
            <div className="numbersLeft">
              <span className="numbers">4549</span>
              <span className="units">mm</span>
            </div>
          </div>
          <div className="fiveTextLeftTOPD">
            <span className="unit">{data[21][t("mainLang")]}</span>
            <div className="numbersLeft">
              <span className="numbers">2770</span>
              <span className="units">mm</span>
            </div>
          </div>
          <div className="fiveTextLeftTOPD">
            <span className="unit">{data[22][t("mainLang")]}</span>
            <div className="numbersLeft">
              <span className="numbers">1628</span>
              <span className="units">mm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fiveRightImg">
        <img 
          src="https://www.netaauto.az/files/upload/bb7399ce-ae70-4883-99aa-dab0b76957fc_21.jpg" 
          alt="" 
          className="fiveRightImg-add hvr-grow" 
        />
      </div>
    </div>


<ModelColorSelectSlider images={[Image1,Image2,Image3,Image4]} paginationLogos={[Color1,Color2,Color3,Color4]} title={<span className="imgTextS-u">{data[36][t("mainLang")]}</span>} />

<div className="pinkBox">
      <img 
        src="https://www.netaauto.az/files/upload/012b77fe-ec2f-474d-84a8-7c52706fe944_08.jpg" 
        alt="" 
        className="pink" 
      />
      <div className="fiveTwo-m-u dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="five-info">
          <div className="fiv-top-m">
            9.5<span>{t("second")}</span>
          </div>
          <div className="fivebot-m">0-100{t("k-h")}</div>
        </div>
        <div className="vertical-bar-m"></div>
        <div className="five-info">
          <div className="fiv-top-m">
            501<span>km</span>
          </div>
          <div className="fivebot-m">{data[23][t("mainLang")]}</div>
        </div>
      </div>
    </div>


    <div className="for">
      <div className="btBox">
        <div className="box1">
          <div className="add">
            <div className="lefImg">
              <div className="limg">
                <div className="imgadd">{data[24][t("mainLang")]}</div>
                <div className="imga2">
                {data[25][t("mainLang")]}
                </div>
              </div>
            </div>
            <img 
              src="https://www.netaauto.az/files/upload/0c86d85f-eaf0-4b70-b74c-b2757b0be913_04946157-f5a1-4b1b-9576-3b0e5d6bbbd8_Group 48096874.png" 
              alt="" 
              className="rimg" 
            />
            <div id="front" className="front">

            {data[26][t("mainLang")]}
            </div>
            <img 
              id="fontImg" 
              src="https://www.netaauto.co//template/1/website/static/images/pc/s/67.png" 
              alt="" 
              className="fontImg" 
            />
          </div>
        </div>
        <div className="box2 n1-box2-x">
          <div className="add2 n1-add-x">
            <img 
              src="https://www.netaauto.az/files/upload/4383b7ad-facf-4833-8cd6-23508486ffd1_哪吒U内饰(中控主驾侧)_3000.jpg" 
              alt="" 
              className="rimg" 
            />
            <div className="lefImg">
              <div className="limg">
                <div className="imgadd">
                  <div className="a1">{data[27][t("mainLang")]}</div>
                  <div className="a2">
                  {data[28][t("mainLang")]}<br/>
                  {data[29][t("mainLang")]} <br/>
                  {data[30][t("mainLang")]}
                  </div>
                </div>
              </div>
            </div>
            <div id="front2" className="front">{data[31][t("mainLang")]}</div>
            <img 
              id="fontImg2" 
              src="https://www.netaauto.co//template/1/website/static/images/pc/s/67.png" 
              alt="" 
              className="fontImg" 
            />
          </div>
        </div>
      </div>
    </div>

    <div className="sixTextImg-add-ak">
      <img 
        src="https://www.netaauto.az/files/upload/bd49cb51-c7c8-48e2-b950-b7a81a36370f_nine.jpg" 
        alt="" 
      />
      <div className="btTbox dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="aut1">{data[32][t("mainLang")]}</div>
        <div className="aut2"></div>
        <div className="aut3">{data[33][t("mainLang")]}</div>
      </div>
    </div>

    <div className="botBox">
      <img 
        src="https://www.netaauto.az/files/upload/e66b596f-bbde-44ae-9323-67330f7f3722_15.jpg" 
        alt="" 
        className="i1" 
      />
      <div className="t1 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      {data[34][t("mainLang")]}
      </div>
      <div className="t2 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <p>{data[35][t("mainLang")]}</p>
      </div>
    </div>
    </div>
  );
}


