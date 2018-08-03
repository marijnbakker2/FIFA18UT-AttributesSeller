(function(){
    const APP_NAME = 'FIFA18 UT Attributes seller';

    log('Initializing...');

    window.addEventListener('keydown', function(ev) {

        const keyCode = ev.keyCode;

        switch (keyCode) {
            case 192 /* '`' */: // Set this to your own preference
              perform();
            case 49 /* '1' */: // Set this to your own preference
              perform();
            default:
                break;
        }
    });

    function perform(){
      // Starts listening for changes of the error element, reloads the page on error to prevent ban
      mutationObserver.observe(document.getElementById('NotificationLayer'), {
        childList: true,
      });

      // Ask user for number of times the algorithm needs te be ran
      var length = prompt("Enter the number of attributes that need to be sold in a row. Make sure to have selected an attribute already. PLEASE NOTE: The algoritm will continue with the next set of attributes if you enter a number that exceeds the current attribute.");
      log(`Amount entered: ${length}`);
      // Sell the attributes
      sellAttributes(length);
    }

    // Add mutation observer
    var mutationObserver = new MutationObserver(function(mutations) {
      location.reload();
      observer.disconnect();
    });

    function touchElement(element){
      element.dispatchEvent(new MouseEvent('mousedown'));
      element.dispatchEvent(new MouseEvent('mouseup'));
    }

    function sellAttributes(length){
      log('Script started initiating selling.')
      var l = parseInt(length)+1;
      var t = 4000;

      for (var i = 1; i < l; i++) {
        // Set time for each iteration
        var time = t*i;

        // Add timeout to selling the attribute to prevent bot detection
        setTimeout(function(){
          sellItem();
        }, time);

        if (i % 10 == 0){
          t = 4000;
        }
      }

      log('Script successfully initiated, will continue selling untill desired number is reached.');
    }

    function sellItem(){
      // Get quicksell button from page
      var quicksellButton = document.getElementsByClassName("DetailPanel")[0].childNodes[1].lastChild;
      // Click quicksell button
      touchElement(quicksellButton);

      setTimeout(function(){
        // Get OK button from page
        var okButton = document.getElementsByClassName('btn-flat')[1];
        // Click OK button
        touchElement(okButton);
      }, 650);
    }

    /**
     * Logs a message to the console with app information.
     *
     * @param {string} message
     * @param {boolean} isError
     */
    function log(message, isError) {
        // Default to info.
        let logFunction = console.info;

        if (isError) {
            logFunction = console.error;
        }

        logFunction(`${APP_NAME}: ${message}`)
    }

    /**
     * Simulates a tap/click on an element.
     *
     * @param {HTMLElement} element
     */
    function tapElement(element) {
        sendTouchEvent(element, 'touchstart');
        sendTouchEvent(element, 'touchend');
    }

    /**
     * Dispatches a touch event on the element.
     */
    function sendTouchEvent(element, eventType) {
        const touchObj = new Touch({
          identifier: 'Keyboard shortcuts should be supported natively without an extension!',
          target: element,
          clientX: 0,
          clientY: 0,
          radiusX: 2.5,
          radiusY: 2.5,
          rotationAngle: 10,
          force: 0.5
        });

        const touchEvent = new TouchEvent(eventType, {
          cancelable: true,
          bubbles: true,
          touches: [touchObj],
          targetTouches: [touchObj],
          changedTouches: [touchObj],
          shiftKey: true
        });

        element.dispatchEvent(touchEvent);
      }
})();
