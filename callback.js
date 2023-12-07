const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies
function getAllCookies() {
  console.log(cookies);
}

  // Progression 2: using setTimeout() 
  setTimeout(getAllCookies, 1000);


//Progression 3: Create a function to creat cookies
function createCookie(newCookie, callback) {
  setTimeout(() => {
    cookies.push(newCookie);
    console.log("New cookie created:", newCookie);
    if (typeof callback === "function") {
      callback(); 
    }
  }, 2000);
}

// Progression 5: calling function
createCookie(newCookie, getAllCookies);
