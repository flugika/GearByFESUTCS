import React, { useState } from 'react';
import LogoGear from './logo/gear-logo.gif';
import LogoEvent from './logo/event-logo.png';
import LogoFacebook from './logo/facebook-logo.png';
import './App.css';
import "./popup/Modal.css";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box, Button, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';

function App() {
  // Set useState
  const [StudentID, setStudentID] = React.useState<String>("");
  const [PrefixName, setPrefixName] = useState<String>();
  const [FirstName, setFirstName] = useState<String>();
  const [LastName, setLastName] = useState<String>();
  const [Popup, setPopup] = useState(false);
  const [Grant, setGrant] = useState<String>();
  const [Desciption1, setDesciption1] = useState<String>("");
  const [Desciption2, setDesciption2] = useState<String>("");
  const [Desciption3, setDesciption3] = useState<String>("");

  // Set URL
  const apiUrl = "https://gear-fesutcs-api.herokuapp.com";
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
  async function Submit() {
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
        console.log(res[0])
        if (res[0]) {
          setPrefixName(res[0].PREFIXNAME)
          setFirstName(res[0].STUDENTNAME)
          setLastName(res[0].STUDENTSURNAME)
          setGrant("ท่านมีสิทธิ์เข้าร่วมงานสร้อยน้องคล้องเกียร์พี่ครั้งที่ 9")
          setDesciption1("ณ อาคารเฉลิมพระเกียรติ 80 พรรษา | เวลา 12.00 น. เป็นต้นไป")
          setDesciption2("1) กรุณานำบัตรนักศึกษาของตนเองมาเพื่อยืนยันตัวตนเข้างาน\n2) การแต่งกาย\n > 2.1) เสื้อวิศวะ สีเลือดหมู\n > 2.2) กางเกงขายาว ไม่ขาด ไม่มีลวดลาย สีสุภาพ\n > 2.3) เข็มขัดตรามหาวิทยาลัย\n > 2.4) สวมรองเท้าผ้าใบและถุงเท้า\n > 2.5) สามารถใส่ปลอกแขนได้ สี ดำ กรม เทา ขาว\n > 2.6) ไม่อนุญาตให้ใส่เสื้อแขนยาวเข้าร่วมงาน\n > 2.7) ไม่อนุญาตให้ใส่หมวกเข้าร่วมงาน\n > 2.8) หากนำกระเป๋าเข้างาน ต้องมีขนาดไม่เกินกระดาษ A5 (A4 พับครึ่ง)\n3) เริ่มลงทะเบียนเข้างาน 12:00 - 13:00 น. เท่านั้น กรุณามาให้ตรงเวลา")
          setDesciption3(">> หากไม่ทำตามกฎระเบียบกำหนดการจะไม่มีสิทธิ์ได้เข้ารับเกียร์ <<")
          return res[0].data;
        } else {
          Clear()
          return false;
        }
      });
    togglePopup()

    return res;
  }

  // Set Clear function
  async function Clear() {
    setStudentID("")
    setPrefixName("")
    setFirstName("")
    setLastName("")
    setGrant("ท่านไม่มีสิทธิ์เข้าร่วมงานสร้อยน้องคล้องเกียร์พี่ครั้งที่ 9")
    setDesciption1("เกิดข้อผิดพลาด กรุณาตรวจสอบรหัสนักศึกษาให้ถูกต้อง")
    setDesciption2("")
    setDesciption3("หากมีข้อสงสัย กรุณาติดต่อที่เพจ \"ประสานงานเกียร์ มทส\"\nก่อนวันที่ 29 เมษายน 2566")
  }

  return (
    <div className='App' style={{ backgroundColor: '#141414', width: '100%', height: '100%', minWidth: '400px' }}>

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

        <Grid item xs={12} style={{ display: "flex", justifyContent: "center", color: '#FFFFFF', textAlign: 'left', margin: "0 28px" }}>
          <Box>
            <p style={{ color: '#F5D3A2', fontSize: 32, fontWeight: 'bold', marginTop: 20 }}>
              ผู้มีสิทธิ์เข้าร่วมงาน
            </p>
            <p style={{ fontSize: 24, marginTop: -25 }}>
              นักศึกษาสำนักวิชาวิศวกรรมศาสตร์ที่มีรหัสนักศึกษา B65XXXXX เท่านั้น <br />
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
          </Box>
        </Grid>

        {/* Text Field Input */}
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
            style={{ fontWeight: "bold" }}
            color="warning"
            fullWidth
            variant="contained"
            onClick={Submit}
            sx={{ borderRadius: "12px" }}
          >
            Search
          </Button>
        </Grid>

        {/* Clear Button */}
        <Grid item xs={2.4} >
          <Button
            style={{ fontWeight: "bold" }}
            value={StudentID + ""}
            color="inherit"
            fullWidth
            variant="contained"
            onClick={Clear}
            sx={{ borderRadius: "12px" }}
          >
            Clear
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
            <Divider></Divider>
            <p style={{ fontSize: 38, fontWeight: 'bold', marginTop: 10 }}>{Grant}</p>
            <p style={{ fontSize: 28, marginTop: -35, marginBottom: 20 }}>
              {StudentID.toLocaleUpperCase()} {PrefixName}{FirstName} {LastName} <br />
            </p>
            <Divider></Divider>
            <i style={{ fontSize: 30, color: '#6D6D68' }}>
              <p dangerouslySetInnerHTML={{ __html: replaceWithBr1() }} style={{ fontWeight: 'bold', marginTop: 0, color: '#141414' }} />
              <p dangerouslySetInnerHTML={{ __html: replaceWithBr2() }} style={{ fontSize: 24, textAlign: 'left', marginTop: -20 }} />
              <p dangerouslySetInnerHTML={{ __html: replaceWithBr3() }} style={{ fontSize: 22, marginTop: -2, fontWeight: 'bold', color: '#EE871B' }} />
              <a style={{ fontWeight: 'bold', color: '#9A6914' }} target="_blank" href={FanpageUrl}>Facebook: ประสานงานเกียร์ มทส</a>
              <p style={{ fontSize: 24, marginTop: -5 }}>ด้วยความเคารพอย่างสูง</p>
            </i>
            <button className="close-modal" onClick={togglePopup} style={{ fontSize: "16px" }}>
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
      <br />

      <a style={{ fontSize: 30, fontWeight: 'bold', color: '#DCA24E', display: 'flex', alignItems: 'center', justifyContent: 'center' }} target="_blank" href={FanpageUrl}>
        <img style={{ height: 40, justifyItems: 'center', marginRight: '20px' }} src={LogoFacebook} alt="logo" />
        ประสานงานเกียร์ มทส
      </a>

      <Container style={{ height: 40, backgroundColor: '#141414' }}></Container>
    </div>
  );
}

export default App;
