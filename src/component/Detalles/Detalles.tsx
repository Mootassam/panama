import React from "react";
import "./Detalles.css";
function Detalles(props) {
  return (
    <div className="app__detalles">
      <div className="detalles__header">
        <div className="detalles__left">
          <div className="detalles__time">13:25</div>
        </div>
        <div className="detalless__right"></div>
      </div>
      <div className="detalles__subheader">
        <div></div>
        <div className="subheader__text">Detalles</div>
        <div></div>
      </div>

      <div className="detalles__content">
        <div className="detalles__logo">
          <img src="/Detalles/circle.png" alt="" width={44} />
        </div>
        <div className="detalles__exito">Con éxito</div>
        <div className="exito__date">6 de sep de 2023 08:36 +0400</div>

        <div className="detalles__white">
          <div className="first__detalles">
            <div className="detalles__detail">Details</div>
            <div className="detalles__detaillright">
              <span>Send</span>
              <span className="usdt__detalles">
                - 100 USDT <img src="/Detalles/usdt.png" alt="" width={25} />
              </span>
              <div className="bar__usdt">
                <img src="/Detalles/bar.png" alt="" width={239} />
              </div>
              <div className="">
                <span>Tron</span>
              </div>
              <div className="bar__usdt">
                <img src="/Detalles/bar.png" alt="" width={239} />
              </div>
            </div>
          </div>
          <div className="second__detalles">
            <div className="second__detalles__title">
              Recom pensa para los mineros
            </div>
            <div>- 27.6009 TRX</div>
          </div>
        </div>
        <div className="detalles__white2">
          <div className="detalles__from">
            <div>From</div>
            <div className="full__address">TW3MMqhPjGTLZ48SGZ8NezH1ftGpca <br /> Qkgo</div>
          </div>
          <div className="detalles__To">
            <div>To</div>
            <div>TWoy8YBKNTokyxkuFYuMyPaZyGYBUHc <br /> d47</div>
          </div>
        </div>
        <div className="detalles__white3"></div>
      </div>
      <div className="detalles__bottom"></div>
    </div>
  );
}

export default Detalles;
