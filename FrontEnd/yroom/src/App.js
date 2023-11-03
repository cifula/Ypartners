/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [ reservation, setReservation ] = useState({date: new Date(), time: "", length: "", name: ""});
  const [ list, setList ] = useState("");

  const onChangeDateHandle = async(date) => {
    setReservation({...reservation, date: date});
    getList(date);
  }

  const getList = async(date) => {
    try {
      const response = await axios.get("http://localhost:8080/getlist", {params: {date: JSON.stringify(date)}});
      
      const responseList = response.data.map(time => {
        return parseInt(time.split('T')[1].split(':')[0]);
      })

      setList(responseList);
    } catch(error) {
      console.log("error: ", error);
    }
  }


  const onClickTimeHandle = (e) => {
    const timeValue = parseInt(e.target.textContent.slice(0, 2), 10);
    setReservation({...reservation, time: timeValue});
  }

  const onChangeInputHandle = (e) => {
    const { name, value } = e.target;
    setReservation({...reservation, [name]: value});
  }
  
  const onClickSubmitHandle = async () => {
    const option = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      const response = await axios.post("http://localhost:8080/reservation", JSON.stringify(reservation), option);
      window.alert("예약되었습니다.");
      getList(reservation.date);
      
    } catch(error) {
      window.alert(error.response.data.errorData.error);
    }

  }

  return (
    <div css={s.container}>
      <main css={s.mainContainer}>
        <header css={s.header}>
          <h1>회의실 예약</h1>
          <t>YRoom</t>
          <t css={s.smallfont}>(최대 인원: 30명, 이용금액: 시간당 5만원)</t>
        </header>
        <div css={s.reservationContianer}>
          <div css={s.reservationBox}>
            <div>
              날짜 선택:
              <DatePicker selected={reservation.date} onChange={(date) => onChangeDateHandle(date)} />
            </div>
            <div>
              시작 시간 선택: {reservation.time}:00
              <table css={s.table} style={{"border-bottom": "1px solid #000000"}}>
                <tbody>
                  <tr>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>00:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>01:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>02:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>03:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>04:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>05:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>06:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>07:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>08:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>09:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>10:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>11:00</td>
                  </tr>
                  <tr>
                    <td css={s.thAndTd}>{list.includes(0) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(1) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(2) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(3) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(4) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(5) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(6) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(7) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(8) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(9) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(10) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(11) ? "예약불가" : "예약가능"}</td>
                  </tr>
                </tbody>
              </table>

              <table css={s.table}>
                <tbody>
                  <tr>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>12:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>13:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>14:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>15:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>16:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>17:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>18:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>19:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>20:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>21:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>22:00</td>
                    <td onClick={onClickTimeHandle} css={s.thAndTd}>23:00</td>
                  </tr>
                  <tr>
                    <td css={s.thAndTd}>{list.includes(12) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(13) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(14) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(15) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(16) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(17) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(18) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(19) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(20) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(21) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(22) ? "예약불가" : "예약가능"}</td>
                    <td css={s.thAndTd}>{list.includes(23) ? "예약불가" : "예약가능"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              이용시간: 
              <input onChange={onChangeInputHandle} name="length" type="number" min='1' max='24'></input>
              시간
            </div>
            <div>
              예약자명:
              <input onChange={onChangeInputHandle} name="name" type="text"></input>
            </div>
            <button onClick={onClickSubmitHandle}>제출</button>
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;
