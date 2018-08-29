export default {
  //Part ListFarmObject
  getListFarmObject() {
    return getListFarmObjectFunc();
  },
  setListFarmObject(listFarmObject) {
    return setListFarmObjectFunc(listFarmObject);
  },
  // Part ListFarmObjectValue
  getListFarmObjectWithValue(){
    return getListFarmObjectWithValueFunc();
  },
  setListFarmObjectWithValue(listFarmObjectValue){
    setListFarmObjectWithValueFunc(listFarmObjectValue);
  }
}

function getListFarmObjectFunc() {
  var listObjects = localStorage.getItem('listFarmObject');
  if (listObjects !== null) {
    return JSON.parse(listObjects)
  }
  else {
    var defaultListObjects = [];
    localStorage.setItem('listFarmObject', JSON.stringify(defaultListObjects));
    return defaultListObjects;
  }
}

function setListFarmObjectFunc(listFarmObject) {
  localStorage.setItem('listFarmObject', JSON.stringify(listFarmObject));
}

function getListFarmObjectWithValueFunc() {
  var listObjectsValues = localStorage.getItem('listFarmObjectValues');
  if (listObjectsValues !== null) {
    return JSON.parse(listObjectsValues)
  }
  else {
    var defaultListObjectsValues = [];
    localStorage.setItem('listFarmObjectValues', JSON.stringify(defaultListObjectsValues));
    return defaultListObjectsValues;
  }
}

function setListFarmObjectWithValueFunc(listFarmObjectValue) {
  localStorage.setItem('listFarmObjectValues', JSON.stringify(listFarmObjectValue));
}
