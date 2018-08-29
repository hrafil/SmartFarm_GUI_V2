export default {
  //Part ListFarmObject
  getListFarmObject() {
    return getListFarmObjectFunc();
  },
  setListFarmObject(listFarmObject) {
    return setListFarmObjectFunc(listFarmObject);
  }
}

function getListFarmObjectFunc() {
  var listObjects = localStorage.getItem('listFarmObject');
  if (listObjects !== null) {
    return JSON.parse(listObjects)
  }
  else {
    var defaultListObjects = {"itemList": []};
    localStorage.setItem('listFarmObject', JSON.stringify(defaultListObjects));
    return defaultListObjects;
  }
}

function setListFarmObjectFunc(listFarmObject) {
  localStorage.setItem('listFarmObject', JSON.stringify(listFarmObject));
}
