initCounterCreate();

function initCounterCreate() {
  let counters = document.querySelectorAll('[data-name="counter-module"]');
  if (counters.length) {
    for (let counter of counters) {
      getDataCounter();
    }
  }
  
  function getDataCounter() {
    fetch(`${window.location.origin}/include/counter.php`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
    .then(response => response.json())
    .then(result => {
        afterFetchWork(result);
    });
    
    /**
     * метод преобразует значение
     * @param принимает data в формате ["117534\/36","35681\/0"]
     */
    function afterFetchWork(data) {
      
      let counterData = {};

      let saas = data[0].split('/');
      let lic = data[1].split('/');

      counterData['saasToday'] = +saas[1];
      counterData['saasTotal'] = +saas[0];
      counterData['licToday'] = +lic[1];
      counterData['licTotal'] = +lic[0];
      
      startCounter(counterData);
    };
    
    /**
       * метод устанавливает значения в html и запускает анимацию счетчика
       * @param приминаем data в формате {saasToday: 38, saasTotal: 117536, licToday: 0, licTotal: 35681}
       */
      function startCounter(data) {
        let newToday = counterData.saasToday + counterData.licToday;
        let newTotal = counterData.saasTotal + counterData.licTotal;
        
        let oldTotal = newTotal - newToday;
        let oldToday;
        if (newToday > 15) { // 15 - произвольное число, на котрое будет срабатывать анимация пересчета
          oldToday = newToday - 15;
        } else {
          oldToday = 1;
        }
        
        let todayElem = counter.querySelector('[data-name="counter-module_today"]');
        let totalElem = counter.querySelector('[data-name="counter-module_total"]');
        
        todayElem.textContent = oldToday;
        totalElem.textContent = oldTotal;
        
        let refreshToday = setInterval(function() {
          if (+todayElem.textContent > newToday) {
            clearInterval(refreshToday);
          } else {
            if (+todayElem.textContent < newToday) {
              todayElem.textContent = +todayElem.textContent + 1
            };
          }
        }, 100);
        
        let refreshTotal = setInterval(function() {
          if (+totalElem.textContent > newTotal) {
            clearInterval(refreshTotal);
          } else {
            if (+totalElem.textContent < newTotal) {
              totalElem.textContent = +totalElem.textContent + 1
            };
          }
        }, 50);
        
      };
    
  };
  
}