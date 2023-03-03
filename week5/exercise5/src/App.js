import React, { Component, useState } from "react";
import "./App.css";
import Box from "./Component/Box"

function App() {

  return (
    
    <div className="bg">
      <h1>โหวตอาหาร</h1>
      <Box
        type="อาหารคาว"
        title="Salmon"
        data="ปลาเป็นสุดยอดในด้านคุณค่าทางอาหารและคุณประโยชน์ต่อสุขภาพปลาได้ชื่อว่าเป็นโปรตีนย่อยง่ายมากๆอยู่แล้ว โดยเฉพาะปลาแซลมอนที่อุดมไปด้วยกรดไขมันโอเมก้า-3 (Omega- 3 fatty acid) ช่วยบำรุงสมองและระบบเลือดแถมยังป้องกันโรคต่างๆอีกมากมาย และยังเป็นแหล่งโปรตีนสูง เต็มไปด้วย วิตามินบี12 สรรพคุณสุดยอดไม่พอ รสชาติยังอร่อยอีกด้วย"
        img="https://i.pinimg.com/564x/fc/9f/cb/fc9fcbc444dfe4dd77888605bad73976.jpg"
      />

      <Box
        type="อาหารหวาน"
        title="Pudding"
        data="พุดดิ้ง (Pudding) เป็นอาหารที่จัดอยู่ในพวกขนม (Dessert) หรือจานของหวานในสหรัฐอเมริกา พุดดิ้งมักจะหมายถึงขนมประเภททำจากไข่ไก่ที่ออกมาในรูปคล้ายสังขยา (Custard) มีส่วนผสมของนม น้ำตาล แป้งอเนกประสงค์ และน้ำมันพืชหรือเนย "
        img="https://i.pinimg.com/564x/b9/a2/74/b9a2747a335a6584674ec136d8a304f9.jpg"
      />
    </div>
  );
}

export default App;
