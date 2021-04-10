"use strict";
// Same old bcrypt that we've used before
const faker = require("faker");
const { User } = require("../models");

const imageUrls = [
  "https://images.unsplash.com/photo-1531857475897-48f2102b7566?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MXwxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1521136492500-e18f107709f7?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MnwxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258M3wxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NHwxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NXwxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NnwxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1490990813269-10586274747f?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258N3wxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1481669624812-c47721341026?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258OHwxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1477925518023-22b33cbd802c?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258OXwxOTA3Mjd8fHx8fDJ8fDE2MTgwOTI5ODc&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1475296204602-08d15839e95f?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1474152042542-1e794677a34b?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTF8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1473674887131-e28696a84ed6?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTJ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1473269712320-f24ce5aa6e5d?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTN8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1471253387723-35c53c9f97ca?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTR8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1471256547321-c2d70718ba9c?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTV8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1471113082645-fde63c139087?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTZ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTd8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1470549813517-2fa741d25c92?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTh8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MTl8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1469533802599-76ee5be68f7d?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MjB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1467164616789-ce7ae65ab4c9?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MjF8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1467189267171-910e6c7a4370?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MjJ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MjN8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1467189484883-c40a85b9e708?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MjR8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1466027575040-12134f1397fa?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MjV8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MjZ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Mjd8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1464411335145-a52ac26409ad?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Mjh8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Mjl8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MzB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1464374288807-174911d4adb9?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MzF8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MzJ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MzN8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1463424591693-a7c7ed4e3342?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MzR8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1463569482774-e63b918040ff?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MzV8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1463569643904-4fbae71ed917?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258MzZ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1462450806522-59ae61ea99fa?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Mzd8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1462618521524-07d259ab774a?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Mzh8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1455853828816-0c301a011711?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Mzl8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1447699080189-1506569a2c4d?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1421167418805-7f170a738eb4?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDF8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1443131307017-4097c8ac7763?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDJ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDN8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1453487021979-5b739b2849f4?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDR8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1417533366444-43834ad6b3bb?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDV8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/reserve/tHTHup3YTN6XsLwf43vY_IMG_8003.jpg?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDZ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1448293065296-c7e2e5b76ae9?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDd8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDh8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1433538534219-56b38a74c4c3?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NDl8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1462349953611-c1e14d9899b3?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1461555806864-d8b528023e7c?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTF8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1460819739742-50e4486578f5?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTJ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTN8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTR8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1424593463432-4104fa2c015a?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTV8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1433155805822-ffc337821a5b?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTZ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1436327266874-c2e4e1ac7a97?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTd8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1437208909905-4cbcabed73be?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTh8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1447279506476-3faec8071eee?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NTl8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NjB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1452415005154-c06158558480?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NjF8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NjJ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NjN8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1457280468258-28589fb67a93?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NjR8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1457347876270-97799484c564?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NjV8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1460400355256-e87506dcec4f?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NjZ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1460400408855-36abd76648b9?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Njd8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1458917524587-d3236cc8c2c8?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Njh8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Njl8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1421494756418-72f0f89c6bfd?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NzB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1448935852404-7a38bb46f5b3?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NzF8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/24/Tea-Time.png?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NzJ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/31/RpgvvtYAQeqAIs1knERU_vegetables.jpg?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NzN8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1418479631014-8cbf89db3431?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NzR8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1455560460927-c48345dd421d?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NzV8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1453549652105-8469be06d67c?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258NzZ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1441861539200-6208cf4a122f?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Nzd8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1437750769465-301382cdf094?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Nzh8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258Nzl8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1453179592584-e2587867cfff?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1444952483853-7c36e902e722?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODF8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1431250620804-78b175d2fada?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODJ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1458672584924-ed089c687402?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODN8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1458938354258-3e66eb36eb7b?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODR8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/34/rcaNUh3pQ9GD8w7Iy8qE__DSC0940.jpg?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODV8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/44/E5KMvPp9SsCnqmEGUwAS_2014-08-10%2012.56.40%201.jpg?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODZ8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/44/Y51aFguqRcGTgsYRYBXV_20140104_085932.jpg?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODd8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/reserve/YFdIoUsRJCAehcoUnQaS_Straw.jpg?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODh8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258ODl8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
  "https://images.unsplash.com/reserve/oMRKkMc4RSq7N91OZl0O_IMG_8309.jpg?ixid=MnwyMjIxNDF8MHwxfGNvbGxlY3Rpb258OTB8MTkwNzI3fHx8fHwyfHwxNjE4MDkyOTg3&ixlib=rb-1.2.1",
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let stories = [];
    const numUsers = await User.count();

    const numNewStories = 90;

    for (let i = 0; i < numNewStories; i++) {
      let newStory = {
        title: faker.lorem.words(),
        imageSrc: imageUrls[i],
        content: faker.lorem.paragraphs(),
        userId: Math.floor(Math.random() * (numUsers - 1) + 1),
        createdAt: faker.date.past(),
        updatedAt: new Date(),
      };
      stories.push(newStory);
    }
    return queryInterface.bulkInsert("Stories", stories, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stories", null, {});
  },
};
