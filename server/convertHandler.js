

function ConvertHandler() {

    this.getNum = (input) => {
      // sample input input=4gal || 1/2km || 5.4/3lbs || kg
      const result = input.trim().match(/(^[\d]+[/.]?[\d]+[/.]?[\d]*)|([\d.]+)/gi);
        return result && result.length === 1 ? parseFloat(eval(result[0]).toFixed(5)) : 1;
    };
  
    this.getUnit = (input) => {
      const result = input.trim().match(/[a-zA-Z]+$/gi);
      const units = ['gal', 'lbs', 'mi', 'l', 'kg', 'km'];
      return result && units.includes(result[0].toLowerCase()) ? result[0].toLowerCase() : null;
    };
  
    this.getReturnUnit = (initUnit) => {
        const unitsEquivalency = {
          gal: 'l',
          lbs: 'kg',
          mi: 'km',
          l: 'gal',
          kg: 'lbs',
          km: 'mi'
      };
    
      return initUnit ? unitsEquivalency[initUnit] : null;
    };
  
    this.spellOutUnit = unit => {
        const spellUnits = {
          gal: 'gallons',
          lbs: 'pounts',
          mi: 'milles',
          l: 'liters',
          kg: 'kilograms',
          km: 'kilometers'      
      };
      
      return spellUnits[unit] || null;
    };
  
    this.convert = (initNum, initUnit) => {
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      var result;
      switch (initUnit){
        case 'gal':
          result = initNum * galToL;
          break;
          
        case 'lbs':
          result =  initNum * lbsToKg;
          break;
          
        case 'mi':
          result =  initNum * miToKm;
           break; 
          
        case 'l':
          result =  initNum / galToL;
          break;
          
        case 'kg':
          result =  initNum / lbsToKg;
          break;
          
        case 'km':
          result = initNum / miToKm;
          break;
          
        default:
          null;
      }
      
      return result ? parseFloat(result.toFixed(5)) : null;
    };
  

    this.toString = (initNum, initUnit, returnNum, returnUnit) => {
        return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    }
  
  }
  
  module.exports = ConvertHandler;
  