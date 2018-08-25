import axios from 'axios'
const DEBUG = true;

export default {
  syncListFarmObject() {
    if (DEBUG){
      localStorage.setItem('farmObjectNoValuesList', JSON.stringify(getListFarmObject().itemList))
    }
    else{
      return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    }
  },
}


function getListFarmObject(){
  if (DEBUG){
    const farmObjects = {
      "itemList": [
        {
          "name": "ST1_RE",
          "desc": "Teplota venkovní",
          "functional_conditions": "Vázano na ST1_SIM",
          "data_type": "REAL",
          "measurement": "",
          "measurement_units": "",
          "is_settable": true,
          "awid": "1",
          "object_value_id": "5b4fa841c9b40b395cf6b36d",
          "sys": {
            "cts": "2018-07-18T20:51:14.018Z",
            "mts": "2018-07-18T20:51:14.018Z",
            "rev": 0
          },
          "id": "5b4fa842c9b40b395cf6b36e"
        },
        {
          "name": "ST1_SIM",
          "desc": "Simulace",
          "functional_conditions": "ll",
          "data_type": "BOOL",
          "measurement": "",
          "measurement_units": "",
          "is_settable": true,
          "awid": "1",
          "object_value_id": "5b535e146980d121407529b3",
          "sys": {
            "cts": "2018-07-21T16:23:48.617Z",
            "mts": "2018-07-21T16:23:48.617Z",
            "rev": 0
          },
          "id": "5b535e146980d121407529b4"
        },
        {
          "name": "VIB1_AC",
          "desc": "Automat ruka vibrolista",
          "functional_conditions": "ll",
          "data_type": "BOOL",
          "measurement": "",
          "measurement_units": "",
          "is_settable": true,
          "awid": "1",
          "object_value_id": "5b4fab0c8b3b95243c8f4c28",
          "sys": {
            "cts": "2018-07-18T21:03:08.873Z",
            "mts": "2018-07-18T21:03:08.873Z",
            "rev": 0
          },
          "id": "5b4fab0c8b3b95243c8f4c29"
        },
        {
          "name": "limit_ventilator",
          "desc": "Ventilator limitní",
          "functional_conditions": "haaa",
          "data_type": "BOOL",
          "measurement": "",
          "measurement_units": "",
          "is_settable": true,
          "awid": "1",
          "object_value_id": "5b50e944406de00b7c688896",
          "sys": {
            "cts": "2018-07-19T19:40:52.657Z",
            "mts": "2018-07-19T19:41:12.989Z",
            "rev": 2
          },
          "id": "5b50e944406de00b7c688897"
        }
      ],
      "pageInfo": {
        "pageIndex": 0,
        "pageSize": 100,
        "total": 4
      },
      "uuAppErrorMap": {}
    };
    return farmObjects;
  }
  else{
    console.log("Not implemented;")
  }
}
