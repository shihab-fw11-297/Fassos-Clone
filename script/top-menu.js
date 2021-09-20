    var open = document.getElementById("login")
    var opens = document.getElementById("reg")
    var close = document.getElementById("body")
    // console.log(close)
    // console.log(open)
    open.addEventListener("click", function () {
      document.getElementById("containers2").style.display = "none"
      document.body.classList.add("popup-active");
    })

    opens.addEventListener("click", function () {
      document.getElementById("containers1").style.display = "none"
      document.body.classList.add("popup2-active");
    })



    function submitForm(event) {
      var flage = false;
      var  arr_login=[];
      var number = document.getElementById("num").value;
      document.getElementById("num").value="";
      let info = localStorage.getItem("info");
      info = JSON.parse(info);
      for (key in info) {
        if (info[key].numbers == number) {
        arr_login.push(info[key]);
        
          flage = true;
          alert("Login sucessfully");
          event.preventDefault();
          window.location.href = './Collections.html'
        }
      }
      let loggedData = localStorage.setItem("loggedData",JSON.stringify(arr_login));
      console.log(loggedData);
      if (flage == false) {
        alert("Number Not Found! Please Register First");
        event.preventDefault();
        window.location.href = "./signup.html"
      }
      else {
       // window.location.href = "./signup.html"
      }
    }
    // let info = localStorage.getItem("info");
    // info = JSON.parse(info);
    // var btn = document.getElementById("btn")
    // btn.addEventListener("click", loged)
