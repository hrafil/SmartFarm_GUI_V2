export default {
  //Part DashboardObjectManager
  getDashboardExcludedFarmObjects() {
    return getDashboardExcludedFarmObjectsFunc();
  },
  setDashboardExcludedFarmObjects(excludedObjects) {
    setDashboardExcludedFarmObjectsFunc(excludedObjects);
  },
  getDashboardIncludedFarmObjects() {
    return getDashboardIncludedFarmObjectsFunc();
  },
  setDashboardIncludedFarmObjects(includedObjects) {
    setDashboardIncludedFarmObjectsFunc(includedObjects);
  },
  getDashboardManagementObjects() {
    return getDashboardManagementObjectsFunc();
  },
  setDashboardManagementObjects(managementObjects) {
    setDashboardManagementObjectsFunc(managementObjects)
  }
}

// Dashboard config
function getDashboardExcludedFarmObjectsFunc() {
  var excludedObjects = localStorage.getItem('dashboardExcludedObjects');
  if (excludedObjects !== null) {
    return JSON.parse(excludedObjects)
  } else {
    var defaultExcludedObjects = [];
    localStorage.setItem('dashboardExcludedObjects', JSON.stringify(defaultExcludedObjects));
    return defaultExcludedObjects;
  }
}

function setDashboardExcludedFarmObjectsFunc(excludedObjects) {
  localStorage.setItem('dashboardExcludedObjects', JSON.stringify(excludedObjects));
}

function getDashboardIncludedFarmObjectsFunc() {
  var includedObjects = localStorage.getItem('dashboardIncludedObjects');
  if (includedObjects !== null) {
    return JSON.parse(includedObjects)
  } else {
    var defaultIncludedObjects = [];
    localStorage.setItem('dashboardIncludedObjects', JSON.stringify(defaultIncludedObjects));
    return defaultIncludedObjects;
  }
}

function setDashboardIncludedFarmObjectsFunc(includedObjects) {
  localStorage.setItem('dashboardIncludedObjects', JSON.stringify(includedObjects));
}

// Dashboard management

function getDashboardManagementObjectsFunc() {
  var managementObjects = localStorage.getItem('dashboardManagementObjects');
  if (managementObjects !== null) {
    return JSON.parse(managementObjects)
  } else {
    var defaultManagementObjects = [];
    localStorage.setItem('dashboardManagementObjects', JSON.stringify(defaultManagementObjects));
    return defaultManagementObjects;
  }
}

function setDashboardManagementObjectsFunc(managementObjects) {
  localStorage.setItem('dashboardManagementObjects', JSON.stringify(managementObjects));
}
