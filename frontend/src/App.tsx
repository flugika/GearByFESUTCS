import React, { useEffect, useState } from 'react';
import LogoGear from './logo/gear-logo.gif';
import LogoEvent from './logo/event-logo.png';
import './App.css';
import "./popup/Modal.css";
import videoUrl from './logo/gear-logo.mp4';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, InputAdornment, styled } from '@mui/material';
import TextField from '@mui/material/TextField';

function App() {
  // Set useState
  const [StudentID, setStudentID] = React.useState<String>();
  const [PrefixName, setPrefixName] = useState<String>();
  const [FirstName, setFirstName] = useState<String>();
  const [LastName, setLastName] = useState<String>();
  const [Major, setMajor] = useState<String>();
  const [Popup, setPopup] = useState(false);
  const [Grant, setGrant] = useState<String>();
  const [Desciption1, setDesciption1] = useState<String>("");
  const [Desciption2, setDesciption2] = useState<String>("");
  const [Desciption3, setDesciption3] = useState<String>("");

  // Set URL
  const apiUrl = "http://localhost";
  const FanpageUrl = "https://www.facebook.com/Gear.sut";

  // Set function split newline \n
  function replaceWithBr1() {
    return Desciption1.replace(/\n/g, "<br />")
  }

  function replaceWithBr2() {
    return Desciption2.replace(/\n/g, "<br />")
  }

  function replaceWithBr3() {
    return Desciption3.replace(/\n/g, "<br />")
  }

  // Toggle Popup
  const togglePopup = () => {
    setPopup(!Popup);
  };

  if (Popup) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  // Set Search Button
  async function Search() {
    togglePopup()
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let res = await fetch(
      `${apiUrl}/student/${StudentID}`,
      requestOptions
    )

      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setPrefixName(res.data.PrefixName)
          setFirstName(res.data.FirstName)
          setLastName(res.data.LastName)
          setMajor("สำนักวิชา" + res.data.Major)
          setGrant("ท่านมีสิทธิ์เข้าร่วมงานสร้อยน้องคล้องเกียร์พี่ครั้งที่ 9")
          setDesciption1("สร้อยน้องคล้องเกียร์พี่ครั้งที่ 9\nณ อาคารสุรพัฒน์ 2 | เวลา 12.00 น. เป็นต้นไป")
          setDesciption2("1) กรุณานำบัตรนักศึกษาของตนเองมายืนยันตัวตนเข้างาน\n2) เริ่มลงทะเบียนเข้างาน 12.00 - 13.00 น. เท่านั้น กรุณามาให้ตรงเวลา\n3) การแต่งกาย\n> 3.1) เสื้อวิศวะสีเลือดหมู\n> 3.2) กางเกงขายาวไม่ขาด\n> 3.3) เข็มขัดตรามหาวิทยาลัย\n> 3.4) รองเท้าผ้าใบและถุงเท้า\n4) หากนำกระเป๋าเข้างานต้องมีขนาดไม่เกินกระดาษ A5 เท่านั้น")
          setDesciption3(">> หากไม่ทำตามกฎระเบียบจะไม่มีสิทธิ์เข้าร่วมงาน <<")
          return res.data;
        } else {
          Reset()
          return false;
        }
      });

    return res;
  }

  // Set Reset function
  async function Reset() {
    setStudentID("")
    setPrefixName("")
    setFirstName("")
    setLastName("")
    setMajor("")
    setStudentID("")
    setGrant("ท่านไม่มีสิทธิ์เข้าร่วมงานสร้อยน้องคล้องเกียร์พี่ครั้งที่ 9")
    setDesciption1("เกิดข้อผิดพลาด กรุณาตรวจสอบรหัสนักศึกษาให้ถูกต้อง")
    setDesciption2("")
    setDesciption3("หากมีข้อสงสัย กรุณาติดต่อที่เพจ \"ประสานงานเกียร์ มทส\"\nก่อนวันที่ 10 เมษายน 2566")
  }

  // Set Clear Button
  async function Clear() {
    Reset()
  }

  return (
    <div className='App' style={{ backgroundColor: '#141414', width: '100%', height: '100%' }}>

      {/* Container for defualt page no scroll */}
      {/* better marginTop */}
      <Container style={{ height: 40, backgroundColor: '#141414' }}></Container>

      {/* Logo */}
      <img style={{ height: 200, justifyItems: 'center' }} src={LogoGear} alt="logo" />

      {/* Grid */}
      <Grid container spacing={2} style={{ paddingLeft: '10%', paddingRight: '10%', marginTop: -50 }}>

        {/* Grid 12 */}
        <Grid item xs={12} >

          {/* Header */}
          <p style={{ color: '#DCA24E', textAlign: 'center', fontSize: 48, fontWeight: 'bold' }}>
            คณะกรรมการประสานงานนักศึกษา <br />
            สำนักวิชาวิศวกรรมศาสตร์ <br />
            มหาวิทยาลัยเทคโนโลยีสุรนารี (คปว.)
          </p>
          <br /><br />
          <Container style={{ height: 1, backgroundColor: '#FFFFFF', marginTop: -60 }}></Container>
        </Grid>

        {/* Demo Discription */}
        {/* Grid 1.5 + 9 + 1.5 */}
        <Grid item xs={1.5} ></Grid>

        <Grid item xs={9} >
          <p style={{ color: '#FFFFFF', textAlign: 'left' }}>
            <p style={{ color: '#F5D3A2', fontSize: 32, fontWeight: 'bold', marginTop: 20 }}>
              ผู้มีสิทธิ์เข้าร่วมงาน
            </p>
            <p style={{ fontSize: 24, marginTop: -25 }}>
              1) นักศึกษาสำนักวิชาวิศวกรรมศาสตร์ที่มีรหัสนักศึกษา B65XXXXX <br />
              2) นักศึกษาสำนักวิชาวิศวกรรมศาสตร์ที่ "รีรหัสนักศึกษา" จาก B65 เป็น B66 เท่านั้น <br />
            </p>
            <p style={{ color: '#F5D3A2', fontSize: 32, fontWeight: 'bold', marginTop: 20 }}>
              วิธีตรวจสอบ
            </p>
            <p style={{ fontSize: 24, marginTop: -25 }}>
              1) กรอกรหัสนักศึกษา B65XXXXX ในช่องว่าง <br />
              2) กด Search เพื่อค้นหารหัสนักศึกษา <br />
              3) กด Clear เพื่อลบข้อมูลในช่องใส่รหัสนักศึกษาและค้นหารหัสนักศึกษาอื่นต่อไป
            </p>
            <br />
            <p style={{ color: '#F5D3A2', fontSize: 18, marginTop: -25 }}>
              หมายเหตุ: นักศึกษาที่รีรหัสนักศึกษาจาก B65 เป็น B66 ต้องใช้รหัสนักศึกษา B65XXXXX ในการค้นหาเท่านั้น
            </p>
          </p>
        </Grid>

        <Grid item xs={1.5} ></Grid>

        {/* Text Field Input */}
        {/* Grid 1.33 + 4.4 + 2.4 + 2.4 + 1.4 */}
        <Grid item xs={1.33}></Grid>

        <Grid item xs={4.4}>
          <TextField
            fullWidth
            id="StudentID"
            value={StudentID}
            placeholder="กรอกรหัสนักศึกษา : B65XXXXX"
            defaultValue=""
            type="text"
            variant="outlined"
            size="small"
            autoComplete="off"
            color='warning'
            inputProps={{ style: { color: "white" } }}
            focused
            onChange={(event) => setStudentID(event.target.value)}
          />
        </Grid>

        {/* Search Button */}
        <Grid item xs={2.4} >
          <Button
            style={{ fontWeight: "bold", fontSize: "sm" }}
            color="warning"
            fullWidth
            variant="contained"
            onClick={Search}
          >Search
          </Button>
        </Grid>

        {/* Clear Button */}
        <Grid item xs={2.4} >
          <Button
            style={{ fontWeight: "bold", fontSize: "sm" }}
            value={StudentID + ""}
            color="inherit"
            fullWidth
            variant="contained"
            onClick={Clear}
          >Clear
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={1.4}></Grid>

      {/* Alert Popup */}
      {Popup && (
        <div className="modal">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="modal-content" style={{ color: '#141414' }}>
            <img style={{ height: 100, justifyItems: 'center' }} src={LogoEvent} alt="logo" />
            <p style={{ fontSize: 38, fontWeight: 'bold', marginTop: -5 }}>{Grant}</p>
            <p style={{ fontSize: 24, marginTop: -35 }}>
              {StudentID} {PrefixName}{FirstName} {LastName} <br />
              {Major}
            </p>
            <i style={{ fontSize: 30, color: '#6D6D68' }}>
              <p dangerouslySetInnerHTML={{ __html: replaceWithBr1() }} style={{ fontWeight: 'bold', marginTop: -10, color: '#141414' }} />
              <p dangerouslySetInnerHTML={{ __html: replaceWithBr2() }} style={{ fontSize: 24, textAlign: 'left', marginTop: -30 }} />
              <p dangerouslySetInnerHTML={{ __html: replaceWithBr3() }} style={{ fontSize: 24, marginTop: -30, fontWeight: 'bold' }} />
              <a style={{ fontWeight: 'bold', color: '#9A6914' }} target="_blank" href={FanpageUrl}>Facebook: ประสานงานเกียร์ มทส</a>
              <p style={{ fontSize: 24, marginTop: -5 }}>ด้วยความเคารพอย่างสูง</p>
            </i>
            <button className="close-modal" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
      <br />
      <Grid container spacing={2} style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Container style={{ height: 1, backgroundColor: '#FFFFFF', marginTop: 25 }}></Container>
      </Grid>
      <br />
      <a style={{ fontSize: 30, fontWeight: 'bold', color: '#DCA24E' }} target="_blank" href={FanpageUrl}>ประสานงานเกียร์ มทส</a>
      <Container style={{ height: 40, backgroundColor: '#141414' }}></Container>
    </div>
  );
}

export default App;
