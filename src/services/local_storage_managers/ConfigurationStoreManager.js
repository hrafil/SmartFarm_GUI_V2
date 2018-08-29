export default {
    //Part Config
    getConfig() {
      return getConfigFunc();
    },
    setConfigPeriodes(readPeriode, writePeriode){
        setConfigPeriodesFunc(readPeriode, writePeriode);
    },
    setApplicationGatewayUrl(applicationGatewayUrl){
        setApplicationGatewayUrlFunc(applicationGatewayUrl);
    },
    getSyncState(){
        return getSyncStateFunc();
    },
    setSyncState(newState){
        setSyncStateFunc(newState);
    },
  }

  // Part config
  function getConfigFunc(){
      var configuration = localStorage.getItem('syncConfiguration')
      if (configuration !== null){
          return JSON.parse(configuration)
      }
      else
      {
        var defaultConfiguration = {
            configuration:{
                readPeriode: 30,
                writePeriode: 10,
                applicationGatewayUrl: "http://localhost:6221/smartfarm/0-1/"
            }
        }
        localStorage.setItem('syncConfiguration', JSON.stringify(defaultConfiguration));
        return defaultConfiguration;
    }
  }

  function setConfigPeriodesFunc(readPeriode, writePeriode){
    var currConfig = getConfigFunc();
    currConfig.configuration.readPeriode = readPeriode;
    currConfig.configuration.writePeriode = writePeriode;
    localStorage.setItem('syncConfiguration', JSON.stringify(currConfig));
  }

  function setApplicationGatewayUrlFunc(applicationGatewayUrl){
    var currConfig = getConfigFunc();
    currConfig.configuration.applicationGatewayUrl = applicationGatewayUrl;
    localStorage.setItem('syncConfiguration', JSON.stringify(currConfig));
  }

  function getSyncStateFunc(){
    var currState = localStorage.getItem('syncState')
    if (currState !== null){
        return JSON.parse(currState)
    }
    else
    {
      var defaultState = 0
      localStorage.setItem('syncState', JSON.stringify(defaultState));
      return defaultState;
    }
  }

  function setSyncStateFunc(newState){
    localStorage.setItem('syncState', JSON.stringify(newState));
  }
