const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

  // Progression 2: using setTimeout() - use 1000 units for time parameter
  function getAllCookies() {
    setTimeout(() => {
      console.log("All cookies:", cookies);
    }, 1000);
  }
//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter
  function createCookie(newCookie) {
    setTimeout(() => {
      cookies.push(newCookie);
      console.log("New cookie created:", newCookie);
    }, 2000);
  }
// Progression 4: calling functions
getAllCookies();
createCookie(newCookie);