"use strict"
// const api = require('growatt');

import growatt from './node_modules/growatt';

const api = growatt

const user="gogarbank"
const password="Catherine0810"
const options={}

async function send() {
  const growatt = new api({})
  let login = await growatt.login(user,password).catch(e => {console.log(e)})
  console.log('login:',login)
  let getAllPlantData = await growatt.getAllPlantData(options).catch(e => {console.log(e)})
  console.log('getAllPlatData:',JSON.stringify(getAllPlantData,null,' '));
  let logout = await growatt.logout().catch(e => {console.log(e)})
  console.log('logout:',logout)
}

send()

// module.exports = {send: send}
