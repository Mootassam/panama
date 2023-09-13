import React from "react";
import "./DetaillBinance.css";
function DetaillBinance(props) {
  return (
    <div className="detaill__binance">
      <div className="detaill__header">
        <div className="detaill__left"></div>
        <div className="detaill__right">
          <div className="detaill__battery">
            <div className="binancedetaill__cover"></div>
            <div className="binancedetaill__border"> </div>
          </div>
          <span className="detaill__time">19:22</span>
        </div>
      </div>
      <div className="detaill__subheader">
        <div>
          <img src="/DetaillBinance/back.png" alt="" width={20} />
        </div>
        <div className="title__subheader">Detalle de Retiro</div>
        <div>
          <img src="/DetaillBinance/logout.png" alt="" width={14} />
        </div>
      </div>
      <div className="detaillbinance__content">
        <div className="detaillbinance__amount">
          <div className="monto">Monto</div>
          <div className="binances__amount">
            <div className="amount__">{props.amount}</div>
            <div className="currency">USDT</div>
          </div>
        </div>
        <div className="detaillbinance__completed">
          <div>
            <img src="/DetaillBinance/completed.png" alt="" width={13} />
          </div>
          <div className="completed__text">Completed</div>
        </div>

        <div className="detaill__completed">
          <span>Criptomonedas transferidas desde Binance. Comunícate con</span>
          <span>
            la plataforma del destinatario para obtener el recibo de la
          </span>
          <span>transacción.</span>
        </div>
        <div className="detaill__yellow">¿Por qué no ha llegado mi retiro?</div>
        <div className="bar">
          <img src="/DetaillBinance/bar.png" alt="" />
        </div>
      </div>
      <div className="other__detail">
        <div>
          <div className="other__left">Confirmaciones</div>
          <div className="other__first"> 30 / 1</div>
        </div>
        <div className="red__space">
          <div className="other__left">Red</div>
          <div className="other__first">TRX</div>
        </div>
        <div className="retiro__space">
          <div className="other__left">Billetera de retiro</div>
          <div className="other__second">Billetera de fondos</div>
        </div>
        <div className="direcion__space">
          <div className="other__left">Dirección</div>
          <div className="direction__row">
            <div className="direction__column">
              <span>TVKMGh1QR6onCmTPu1YmCn</span>
              <span>HK4c3CLgZ×W6</span>
              <label htmlFor="">Guardar dirección</label>
            </div>
            <div>
              <img src="/DetaillBinance/copy.png" alt="" width={16} />
            </div>
          </div>
        </div>
        <div className="txid__space">
          <div className="other__left">Txid</div>
          <div className="txid__detail">
            <div className="txid__left">
              <span>e63af7c2062fc69149db25e4414</span>
              <span>5ec73f6b3d9efa054d4c5bf47bc</span>
              <span>b07fb10d64</span>
            </div>
            <div className="txid__right">
              <img src="/DetaillBinance/copy.png" alt="" width={16} />
            </div>
          </div>
        </div>
        <div className="red__space">
          <div className="other__left">Comisión de la red</div>
          <div className="usdt__class">1 USDT</div>
        </div>
        <div className="date__space">
          <div className="other__left">Fecha</div>
          <div className="date__"> 2023-09-12 19:19:15</div>
        </div>
      </div>
      <div className="down__box">
        <div>
          <img src="/DetaillBinance/logo.png" alt="" width={27} />
        </div>
        <div className="box__detail">
          <span>Habilita el retiro en un solo paso para retirar</span>
          <span>fácilmente a las direcciones incluidas en la</span>
          <span>lista blanca</span>
        </div>
        <div>
          <img src="/DetaillBinance/next.png" alt="" width={12} />
        </div>
      </div>
      <div className="detaill__footer">

      <img src="/DetaillBinance/mobile.png" alt="" width={168} />
      </div>
    </div>
  );
}

export default DetaillBinance;
