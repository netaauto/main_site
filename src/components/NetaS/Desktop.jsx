import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Desktop() {






  const [anmWidth, setAnmWidth] = useState(0);
  const [topBoxOpacity, setTopBoxOpacity] = useState(1);

  useEffect(() => {
    setAnmWidth((document.querySelector('.anm').offsetWidth / 1920) * 100);

    const handleScroll = () => {
      const scrollTop = document.getElementById('scroll-box').scrollTop;
      if (isShowAdd(document.querySelector('.two'))) {
        const width = Math.min(100, scrollTop / 10);
        const height = Math.min(100, scrollTop / 10);
        if (width > anmWidth) {
          document.querySelector('.anm').style.width = width + '%';
          document.querySelector('.anm').style.height = height + '%';
        }
        setTopBoxOpacity(Math.max(0, scrollTop / 300 - 1));
      }
    };

    if (!isMobile()) {
      document.getElementById('scroll-box').addEventListener('scroll', handleScroll);
    }

   
  }, [anmWidth]);

  const isShowAdd = (node) => {
    const winH = window.innerHeight;
    const scrollTop = window.scrollY;
    const offsetTop = node.getBoundingClientRect().top + scrollTop;
    const nodeH = node.offsetHeight;

    return (scrollTop + winH > offsetTop + nodeH / 3 && offsetTop > scrollTop - nodeH / 3);
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const {data} = useSelector((state)=>state.netaS)
  const {t} = useTranslation()


  return (
    <div id="scroll-box">
     <div className="pc-s">
        <div className="pcbox">
          <img
            src="https://www.netaauto.az/files/upload/c29a208e-4ce6-4db0-a1d7-338cec3ea2af_39f11dbe-f18a-4e84-aa06-057cebaa7dc7_1 542 (1).png"
            alt=""
            className="topimg"
          />
          <div className="animate__animated animate__fadeInDown">
            <img
              src="https://www.netaauto.az/files/upload/6a3da5a7-dd49-4517-bbf0-f9fa0a2bfe00_2 (2).png"
              alt=""
              className="iconPc"
            />
            <div className="one_bt">{data[0][t("mainLang")]}</div>
          </div>
          <div className="botxt">
          {data[1][t("mainLang")]}
          </div>
        </div>
        <div className="two">
          <div className="anm" >
            <img
              src="https://www.netaauto.az/files/upload/5b9f95c2-cd7f-4269-8492-dedeac71ec41_11c6a7d1-f850-47f5-a714-feb5c6473c4b_3 (2).png"
              alt=""
              className="topimg"
            />
            <div className="topBox" style={{ opacity: topBoxOpacity }}>
              <div className="top">{data[2][t("mainLang")]}</div>
              <div className="top2">
                <div>
                {data[4][t("mainLang")]}
                </div>
                <div>{data[3][t("mainLang")]}</div>
              </div>
              <div className="content2">
                <div className="t1">
                  <div>{data[5][t("mainLang")]}</div>
                  <div>
                    4980<span>mm</span>
                  </div>
                </div>
                <div className="t1">
                  <div>{data[6][t("mainLang")]}</div>
                  <div>
                    1980<span>mm</span>
                  </div>
                </div>
                <div className="t1">
                  <div>{data[7][t("mainLang")]}</div>
                  <div>
                    2980<span>mm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tr">
          <img
            src="https://www.netaauto.az/files/upload/d2ca90d4-8f91-431b-b99f-544f486d5aa3_35cd1a04-eccf-49df-b6fc-e133d3b04107_Group 48096871.png"
            alt=""
            className="topimg"
          />
          <div
            className="contentBox dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <div className="t1Box">{data[8][t("mainLang")]}</div>
            <div className="conBox">
              <div className="content">
                <div>{data[9][t("mainLang")]}</div>
              
              </div>
              <div className="line"></div>
              <div className="content">
                <div>{data[10][t("mainLang")]}</div>
                
              </div>
              <div className="line"></div>
              <div className="content">
                <div>{data[11][t("mainLang")]}</div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="for">
          <div className="top1 dd">{data[12][t("mainLang")]}</div>
          <div className="btBox">
            <div className="box1">
              <div className="add">
                <div className="lefImg">
                  <div className="limg">
                    <div className="abox">
                      <div className="a1">{data[13][t("mainLang")]}</div>
                      <div className="a2">
                        <div className="radio"></div>
                        <div>{data[14][t("mainLang")]}</div>
                      </div>
                      <div className="a2">
                        <div className="radio"></div>
                        <div>{data[15][t("mainLang")]}</div>
                      </div>
                      <div className="a2">
                        <div className="radio"></div>
                        <div>{data[16][t("mainLang")]}</div>
                      </div>
                      <div className="a2">
                        <div className="radio"></div>
                        <div>{data[17][t("mainLang")]}</div>
                      </div>
                      <div className="a2">
                        <div className="radio"></div>
                        <div>{data[18][t("mainLang")]}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://www.netaauto.az/files/upload/cbeaa5ac-658d-4609-84cc-43f35cf1d1b3_Group 48096874.png"
                  alt=""
                  className="rimg"
                />
                <div id="front" className="front">
                {data[19][t("mainLang")]}
                </div>
                <img
                  id="fontImg"
                  src="https://www.netaauto.co//template/1/website/static/images/pc/s/67.png"
                  alt=""
                  className="fontImg"
                />
              </div>
            </div>
            <div className="box2">
              <div className="add2">
                <img
                  src="https://www.netaauto.az/files/upload/a0ac4633-571f-4feb-a475-dc633e1c00ca_Group 48096875.png"
                  alt=""
                  className="rimg"
                />
                <div className="lefImg">
                  <div className="limg">
                    <div className="bbox">
                      <div className="a1">{data[20][t("mainLang")]}</div>
                      <div className="a2">{data[21][t("mainLang")]}</div>
                      <div className="a2">{data[22][t("mainLang")]}</div>
                    </div>
                  </div>
                </div>
                <div id="front2" className="front">
                {data[20][t("mainLang")]}
                </div>
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

        <div className="fiv">
          <div className="imgBox">
            <img
              src="https://www.netaauto.az/files/upload/697d8465-085e-4bfb-93f2-13aa7ddf9aa0_s5555.jpg"
              alt=""
            />
            <div className="content1 dd">
            {data[23][t("mainLang")]}
            </div>
            <div className="content2 dd">
              <div className="t1">{data[24][t("mainLang")]}</div>
              <div className="line"></div>
              <div className="t1">{data[25][t("mainLang")]}</div>
              <div className="line"></div>
              <div className="t1">
              {data[26][t("mainLang")]}
              </div>
            </div>
          </div>
          <div className="bottomBox">
            <div className="box">
              <div className="imgbox">
                <div className="image-container">
                  <img src="https://www.netaauto.az/files/upload/14285c82-0cdd-4590-82ab-34f954635c44_6 (4).png" />
                </div>
                <div className="containerBox dd">
                  <div>{data[27][t("mainLang")]}</div>
                  <div>{data[28][t("mainLang")]}</div>
                  <div>{data[29][t("mainLang")]}</div>
                </div>
              </div>
              <div className="imgbox">
                <div className="image-container">
                  <img src="https://www.netaauto.az/files/upload/2be3d172-36fe-4b15-8d33-da920fa19a75_7 (3).png" />
                </div>
                <div className="containerBox dd">
                  <div>{data[30][t("mainLang")]}</div>
                  <div>{data[31][t("mainLang")]}</div>
                </div>
              </div>
              <div className="imgbox">
                <div className="image-container">
                  <img src="https://www.netaauto.az/files/upload/4ca905b8-d9bb-477f-b5d0-f61080073016_8 (2).png" />
                </div>
                <div className="containerBox dd">
                  <div className="t1p">
                    <div className="t1">QNX</div>
                    <div className="t2">®</div>
                  </div>
                  <div className="t2p">
                    <div className="t1">Neutrino</div>
                    <div className="t2">®</div>
                    <div className="t3">RTOS</div>
                  </div>
                </div>
              </div>
              <div className="imgbox">
                <div className="image-container">
                  <img src="https://www.netaauto.az/files/upload/c5ec0320-e385-4968-a092-3e2d5b31b8c2_9.png" />
                </div>
                <div className="containerBox dd">
                  <div>{data[32][t("mainLang")]}</div>
                  <div>{data[33][t("mainLang")]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="six">
          <div className="top dd">
          {data[34][t("mainLang")]}
          </div>
          <div className="content2 dd">
            <div className="t1">
            {data[35][t("mainLang")]}
            </div>
            <div className="line"></div>
            <div className="t1">470mm COG</div>
            <div className="line"></div>
            <div className="t1">{data[36][t("mainLang")]}</div>
          </div>
          <img src="https://www.netaauto.az/files/upload/48d7c52b-db09-4254-b5b8-a7cc2a17340a_12.png" />
        </div>

        <div className="sev">
          <img src="https://www.netaauto.az/files/upload/8c9f2b3f-b1bf-4298-93ce-888bf02c85d8_Group 48096871.jpg" />
          <div className="top dd">{data[39][t("mainLang")]}</div>
          <div className="content2 dd">
            <div className="t1">
              <div>
                3.9<span>{t("second")}</span>
              </div>
              <div>0-100 {t("k-h")}</div>
            </div>
            <div className="t1">
              <div>
                33.5<span>{t("minute")}</span>
              </div>
              <div>100-0 {t("k-h")}</div>
            </div>
            <div className="t1">
              <div>
                80<span>{t("k-h")}</span>
              </div>
              <div>{data[37][t("mainLang")]}</div>
            </div>
          </div>
          <div className="t2 dd">
            <p>{data[38][t("mainLang")]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
