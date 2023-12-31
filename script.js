let Students = localStorage.getItem("students")
  ? JSON.parse(localStorage.getItem("students"))
  : [
      {
        firstName: "Zaheer",
        lastName: "Raza",
        DOB: "2005-04-20",
        ID: 0,
        Age: "20",
        Dept: "SEECS",
        Address: "133 Float Avenue",
        City: "Lahore",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "zaheer@seecs.edu.pk",
        Cell: "0331-3343232",
        Room: "0",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Muhammad",
        lastName: "Haris",
        DOB: "2003-10-16",
        ID: 1,
        Age: "20",
        Dept: "SEECS",
        Address: "122 Almere Avenue",
        City: "Faisalabad",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "haris@seecs.edu.pk",
        Cell: "0343-3342355",
        Room: "1",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Aown",
        lastName: "Aamir",
        DOB: "2003-02-22",
        ID: 2,
        Age: "20",
        Dept: "SEECS",
        Address: "123 Maple Avenue",
        City: "Lahore",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "zohan@seecs.edu.pk",
        Cell: "0341-2343232",
        Room: "2",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        lastName: "Ehsan",
        firstName: "Araiz",
        DOB: "2002-01-31",
        ID: 3,
        Age: "20",
        Dept: "SEECS",
        Address: "456 Elm Street",
        City: "Karachi",
        Province: "Sindh",
        Country: "Pakistan",
        Email: "araiz@seecs.edu.pk",
        Cell: "0321-2920387",
        Room: "3",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        lastName: "Razzaq",
        firstName: "Zaviyar",
        DOB: "2005-02-02",
        ID: "4",
        Age: "18",
        Dept: "NICE",
        Address: "789 Oak Lane",
        City: "Islamabad",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "zaviyar@nice.edu.pk",
        Cell: "0337-3284958",
        Room: "4",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Arham",
        lastName: "Nayyar",
        DOB: "2004-06-19",
        ID: "5",
        Age: "19",
        Dept: "NBS",
        Address: "101 Pine Road",
        City: "Peshawar",
        Province: "KPK",
        Country: "Pakistan",
        Email: "arham@nbs.edu.pk",
        Cell: "0332-3388475",
        Room: "5",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Shazain",
        lastName: "Malik",
        DOB: "2002-02-02",
        ID: "6",
        Age: "21",
        Dept: "SMME",
        Address: "101 Pine Road",
        City: "Faislabad",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "shazain@smme.edu.pk",
        Cell: "0331-9807987",
        Room: "6",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Minal",
        lastName: "Rahat",
        DOB: "2003-04-22",
        ID: "7",
        Age: "22",
        Dept: "SNS",
        Address: "333 Birch Avenue",
        City: "Multan",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "minal@sns.edu.pk",
        Cell: "0300-9478932",
        Room: "7",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Ali",
        lastName: "Raza",
        DOB: "2004-11-15",
        ID: "8",
        Age: "20",
        Dept: "S3H",
        Address: "444 Willow Lane",
        City: "Bhawalpur",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "ali@s3h.edu.pk",
        Cell: "0302-3476906",
        Room: "8",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Mahad",
        lastName: "Khan",
        DOB: "0202-07-16",
        ID: "9",
        Age: "20",
        Dept: "IESE",
        Address: "555 Ash Street",
        City: "Sahiwal",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "mahad@iese.edu.pk",
        Cell: "0342-9756783",
        Room: "9",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Azlan",
        lastName: "Ahmed",
        DOB: "2002-12-12",
        ID: "10",
        Age: "20",
        Dept: "NBS",
        Address: "666 Chestnut Road",
        City: "Gujranwala",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "azlan@nbs.edu.pk",
        Cell: "0332-7367890",
        Room: "10",
        Floor: "1st",
        Color: "lightgreen",
      },

      {
        firstName: "Shazad",
        lastName: "Rao",
        DOB: "2005-05-22",
        ID: "11",
        Age: "18",
        Dept: "Nshs",
        Address: "777 Sycamore Court",
        City: "Sahiwal",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "shazad@nshs.edu.pk",
        Cell: "0332-3445787",
        Room: "11",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Zavian",
        lastName: "Malik",
        DOB: "2004-05-22",
        ID: "12",
        Age: "20",
        Dept: "SADA",
        Address: "888 Walnut Avenue",
        City: "Sargodha",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "zavian@sada.edu.pk",
        Cell: "0345-0980432",
        Room: "12",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Nouman",
        lastName: "Ali",
        DOB: "2003-11-06",
        ID: "13",
        Age: "19",
        Dept: "SNS",
        Address: "999 Spruce Street",
        City: "Rawa;pindi",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "nouman@sns.edu.pk",
        Cell: "0332-9283909",
        Room: "13",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Mnan",
        lastName: "Raza",
        DOB: "2002-05-23",
        ID: "14",
        Age: "19",
        Dept: "ASAB",
        Address: "111 Magnolia Lane",
        City: "Bhawalpur",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "mnan@asab.edu.pk",
        Cell: "0333-3212340",
        Room: "14",
        Floor: "1st",
        Color: "lightgreen",
      },
      {
        firstName: "Harmain",
        lastName: "Amir",
        DOB: "2004-06-10",
        ID: "15",
        Age: "20",
        Dept: "NBS",
        Address: "222 Hawthorn Road",
        City: "Gujrat",
        Province: "Punjab",
        Country: "Pakistan",
        Email: "harmain@nbs.edu.pk",
        Cell: "0332-2093840",
        Room: "15",
        Floor: "1st",
        Color: "lightgreen",
      },
    ];

let Room1 = localStorage.getItem("r1")
  ? JSON.parse(localStorage.getItem("r1"))
  : {
      Num: "1",
      Color: "buttonface",
    };
let Room2 = localStorage.getItem("r2")
  ? JSON.parse(localStorage.getItem("r2"))
  : {
      Num: "2",
      Color: "buttonface",
    };
let Room3 = localStorage.getItem("r3")
  ? JSON.parse(localStorage.getItem("r3"))
  : {
      Num: "3",
      Color: "buttonface",
    };
let Room4 = localStorage.getItem("r4")
  ? JSON.parse(localStorage.getItem("r4"))
  : {
      Num: "4",
      Color: "buttonface",
    };
let Room5 = localStorage.getItem("r5")
  ? JSON.parse(localStorage.getItem("r5"))
  : {
      Num: "5",
      Color: "buttonface",
    };
let Room6 = localStorage.getItem("r6")
  ? JSON.parse(localStorage.getItem("r6"))
  : {
      Num: "6",
      Color: "buttonface",
    };
let Room7 = localStorage.getItem("r7")
  ? JSON.parse(localStorage.getItem("r7"))
  : {
      Num: "7",
      Color: "buttonface",
    };
let Room8 = localStorage.getItem("r8")
  ? JSON.parse(localStorage.getItem("r8"))
  : {
      Num: "8",
      Color: "buttonface",
    };
let Room9 = localStorage.getItem("r9")
  ? JSON.parse(localStorage.getItem("r9"))
  : {
      Num: "9",
      Color: "buttonface",
    };
let Room10 = localStorage.getItem("r10")
  ? JSON.parse(localStorage.getItem("r10"))
  : {
      Num: "10",
      Color: "buttonface",
    };
let Room11 = localStorage.getItem("r11")
  ? JSON.parse(localStorage.getItem("r11"))
  : {
      Num: "11",
      Color: "buttonface",
    };
let Room12 = localStorage.getItem("r12")
  ? JSON.parse(localStorage.getItem("r12"))
  : {
      Num: "12",
      Color: "buttonface",
    };
let Room13 = localStorage.getItem("r13")
  ? JSON.parse(localStorage.getItem("r13"))
  : {
      Num: "13",
      Color: "buttonface",
    };
let Room14 = localStorage.getItem("r14")
  ? JSON.parse(localStorage.getItem("r14"))
  : {
      Num: "14",
      Color: "buttonface",
    };
let Room15 = localStorage.getItem("r15")
  ? JSON.parse(localStorage.getItem("r15"))
  : {
      Num: "15",
      Color: "buttonface",
    };
let Room16 = localStorage.getItem("r16")
  ? JSON.parse(localStorage.getItem("r16"))
  : {
      Num: "16",
      Color: "buttonface",
    };
let Room17 = localStorage.getItem("r17")
  ? JSON.parse(localStorage.getItem("r17"))
  : {
      Num: "17",
      Color: "buttonface",
    };
let Room18 = localStorage.getItem("r18")
  ? JSON.parse(localStorage.getItem("r18"))
  : {
      Num: "18",
      Color: "buttonface",
    };
let Room19 = localStorage.getItem("r19")
  ? JSON.parse(localStorage.getItem("r19"))
  : {
      Num: "19",
      Color: "buttonface",
    };
let Room20 = localStorage.getItem("r20")
  ? JSON.parse(localStorage.getItem("r20"))
  : {
      Num: "20",
      Color: "buttonface",
    };
let Room21 = localStorage.getItem("r21")
  ? JSON.parse(localStorage.getItem("r21"))
  : {
      Num: "21",
      Color: "buttonface",
    };
let Room22 = localStorage.getItem("r22")
  ? JSON.parse(localStorage.getItem("r22"))
  : {
      Num: "22",
      Color: "buttonface",
    };
let Room23 = localStorage.getItem("r23")
  ? JSON.parse(localStorage.getItem("r23"))
  : {
      Num: "23",
      Color: "buttonface",
    };
let Room24 = localStorage.getItem("r24")
  ? JSON.parse(localStorage.getItem("r24"))
  : {
      Num: "24",
      Color: "buttonface",
    };
let Room25 = localStorage.getItem("r25")
  ? JSON.parse(localStorage.getItem("r25"))
  : {
      Num: "25",
      Color: "buttonface",
    };

let Mess = {
  Monday: {
    Breakfast: "Omelatte",
    Lunch: "Seasonal Vegetable",
    Dinner: "Chicken Roast",
  },
  Tuesday: {
    Breakfast: "Kulcha Channa",
    Lunch: "Pakora Kari",
    Dinner: "Chicken Korma",
  },
  Wednesday: {
    Breakfast: "Bread Butter",
    Lunch: "Daal Mash",
    Dinner: "Chicken Manchurian",
  },
  Thursday: {
    Breakfast: "Aalu Bhujiya",
    Lunch: "Aalu Palak",
    Dinner: "Chicken Biryani",
  },
  Friday: {
    Breakfast: "Halwa Puri",
    Lunch: "Daal Masoor",
    Dinner: "Chicken Daleem",
  },
  Saturday: {
    Breakfast: "Khakina",
    Lunch: "Seasonal Vegetable",
    Dinner: "Potato Cutlets",
  },
  Sunday: {
    Breakfast: "Aalu Paratha",
    Lunch: "Red Beans",
    Dinner: "Chicken Pulao",
  },
};

let Laundry = {
  Saturday: "7:30am to 10:30am",
  Sunday: "OFF Day",
  Monday: "3:00pm to 8:00pm",
  Tuesday: "7:30am to 10:30am",
  Wednesday: "3:00pm to 8:00pm",
  Thursday: "7:30am to 10:30am",
  Friday: "OFF Day",
  Contact: "0321-8424803",
};

//-------------Management-Home-------------------------------
function signInM() {
  let email, password;
  email = document.querySelector(".m1").value;
  password = document.querySelector(".m2").value;

  if (email === "manager@gmail.com" && password === "123456") {
    window.location.href = "HMS(M).html";
  } else {
    document.querySelector(".invalid").innerHTML = "Invalid Credentials";
  }
}

function signInS() {
  let email, password;
  email = document.querySelector(".t1").value;
  password = document.querySelector(".t2").value;

  if (email === "student@gmail.com" && password === "123456") {
    window.location.href = "HMS(S).html";
  } else {
    document.querySelector(".invalid").innerHTML = "Invalid Credentials";
  }
}

//-------------Add Student-------------------------
function addStudentForm() {
  let fname,
    lname,
    dob,
    id,
    age,
    dept,
    address,
    city,
    province,
    country,
    code,
    email,
    cellno,
    room,
    floor;

  fname = document.querySelector(".fname").value;
  lname = document.querySelector(".lname").value;
  dob = document.querySelector(".DOB").value;
  id = document.querySelector(".id").value;
  id = Students.length + 1;
  age = document.querySelector(".age").value;
  dept = document.querySelector(".dept").value;
  address = document.querySelector(".value2").value;
  city = document.querySelector(".city").value;
  province = document.querySelector(".province").value;
  country = document.querySelector(".country").value;
  code = document.querySelector(".code").value;
  email = document.querySelector(".email").value;
  cellno = document.querySelector(".cellno").value;
  room = document.querySelector(".room").value;
  floor = document.querySelector(".floor").value;

  let newStudent = {
    firstName: fname,
    lastName: lname,
    DOB: dob,
    ID: id,
    Age: age,
    Dept: dept,
    Address: address,
    City: city,
    Province: province,
    Country: country,
    Code: code,
    Email: email,
    Cell: cellno,
    Room: room,
    Floor: floor,
    Color: "lightGreen",
  };

  if (
    fname &&
    lname &&
    dob &&
    id &&
    age &&
    dept &&
    address &&
    city &&
    province &&
    country &&
    code &&
    email &&
    cellno &&
    room &&
    floor
  ) {
    Students.push(newStudent);
    document.querySelector(".student-added").innerHTML =
      "Student Added Successfully!";
    setInterval(() => {
      document.querySelector(".student-added").innerHTML = "";
    }, 2000);
  }

  localStorage.setItem("students", JSON.stringify(Students));

  console.log(Students);

  document.querySelector(".fname").value = "";
  document.querySelector(".lname").value = "";
  document.querySelector(".DOB").value = "";
  document.querySelector(".id").value = "";
  document.querySelector(".age").value = "";
  document.querySelector(".dept").value = "";
  document.querySelector(".value2").value = "";
  document.querySelector(".city").value = "";
  document.querySelector(".province").value = "";
  document.querySelector(".country").value = "";
  document.querySelector(".code").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".cellno").value = "";
  document.querySelector(".room").value = "";
  document.querySelector(".floor").value = "";
}

// -------------------------Find Student-----------------------------------------------
function enter1() {
  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      findStudent();
    }
  });
}

function findStudent() {
  console.log(Students);

  let entered_id = document.querySelector(".find_student").value;
  // let obj;
  // let value;
  // for(i=0;i<100;i++){
  // 	value=Students[i].ID;
  // 	if(entered_id===value){
  // 		obj=Students[i];
  // 		console.log(obj);
  // 	}
  // }

  let obj = Students[entered_id];

  document.querySelector(".profile_container").innerHTML = `
	
	<div class="profile_item s1"><img class="profile_img" src="../../images/${obj.firstName}.jpg"></div>
        <div class="profile_item s2"><h1>${obj.firstName} ${obj.lastName}</h1></div>
        <div class="profile_item"><div class="head">Student ID</div><div class="info">${obj.ID}</div></div>
        <div class="profile_item"><div class="head">Date of Birth</div><div class="info">${obj.DOB}</div></div>
        <div class="profile_item"><div class="head">Age</div><div class="info">${obj.Age}</div></div>
        <div class="profile_item"><div class="head">Department</div><div class="info">${obj.Dept}</div></div>
        <div class="profile_item"><div class="head">Address</div><div class="info addresses">${obj.Address}</div></div>
        <div class="profile_item"><div class="head">City</div><div class="info">${obj.City}</div></div>
        <div class="profile_item"><div class="head">Province</div><div class="info">${obj.Province}</div></div>
        <div class="profile_item"><div class="head">Country</div><div class="info">${obj.Country}</div></div>
        <div class="profile_item"><div class="head">Email</div><div class="info email">${obj.Email}</div></div>
        <div class="profile_item"><div class="head">Phone #</div><div class="info phone">${obj.Cell}</div></div>
        <div class="profile_item"><div class="head">Room No.</div><div class="info">1</div></div>
        <div class="profile_item"><div class="head">Floor</div><div class="info">Ground</div></div>
        <div class="profile_item"><div class="head">Scholarship</div><div class="info">Not Approved</div></div>
        <div class="profile_item"><div class="head">Status</div><div class="info">Present</div></div>
 
	
	
	`;
}

// ------------------------------------------------------------------------

function getById() {
  let id;
  id = prompt("Enter Student Id", "");
}

// ------------------------------------------------------------------------
function Rooms_Content() {
  document.querySelector("body").innerHTML = `
    
	<h1 class="header">Rooms Data</h1>

	<div class="rooms-container">
		<button class="room-button r1" style="background-color:${Room1.Color};" onclick="room1();">Room 001</button>
		<button class="room-button r2" style="background-color:${Room2.Color};" onclick="room2();">Room 002</button>
		<button class="room-button r3" style="background-color:${Room3.Color};" onclick="room3();">Room 003</button>
		<button class="room-button r4" style="background-color:${Room4.Color};" onclick="room4();">Room 004</button>
		<button class="room-button r5" style="background-color:${Room5.Color};" onclick="room5();">Room 005</button>
		<button class="room-button r6" style="background-color:${Room6.Color};" onclick="room6();">Room 006</button>
		<button class="room-button r7" style="background-color:${Room7.Color};" onclick="room7();">Room 007</button>
		<button class="room-button r8" style="background-color:${Room8.Color};" onclick="room8();">Room 008</button>
		<button class="room-button r9" style="background-color:${Room9.Color};" onclick="room9();">Room 009</button>
		<button class="room-button r10" style="background-color:${Room10.Color};" onclick="room10();">Room 010</button>
		<button class="room-button r11" style="background-color:${Room11.Color};" onclick="room11();">Room 011</button>
		<button class="room-button r12" style="background-color:${Room12.Color};" onclick="room12();">Room 012</button>
		<button class="room-button r13" style="background-color:${Room13.Color};" onclick="room13();">Room 013</button>
		<button class="room-button r14" style="background-color:${Room14.Color};" onclick="room14();">Room 014</button>
		<button class="room-button r15" style="background-color:${Room15.Color};" onclick="room15();">Room 015</button>
		<button class="room-button r16" style="background-color:${Room16.Color};" onclick="room16();">Room 016</button>
		<button class="room-button r17" style="background-color:${Room17.Color};" onclick="room17();">Room 017</button>
		<button class="room-button r18" style="background-color:${Room18.Color};" onclick="room18();">Room 018</button>
		<button class="room-button r19" style="background-color:${Room19.Color};" onclick="room19();">Room 019</button>
		<button class="room-button r20" style="background-color:${Room20.Color};" onclick="room20();">Room 020</button>
		<button class="room-button r21" style="background-color:${Room21.Color};" onclick="room21();">Room 021</button>
		<button class="room-button r22" style="background-color:${Room22.Color};" onclick="room22();">Room 022</button>
		<button class="room-button r23" style="background-color:${Room23.Color};" onclick="room23();">Room 023</button>
		<button class="room-button r24" style="background-color:${Room24.Color};" onclick="room24();">Room 024</button>
		<button class="room-button r25" style="background-color:${Room25.Color};" onclick="room25();">Room 025</button>
	</div>
    `;
}

function room1() {
  r = document.querySelector(".r1").style.backgroundColor;
  if (r === "buttonface") {
    Room1.Color = "lawnGreen";
    document.querySelector(".r1").style.backgroundColor = Room1.Color;
    localStorage.setItem("r1", JSON.stringify(Room1));
  } else if (r === "lawngreen") {
    Room1.Color = "buttonFace";
    document.querySelector(".r1").style.backgroundColor = Room1.Color;
    localStorage.setItem("r1", JSON.stringify(Room1));
  }
}
function room2() {
  r = document.querySelector(".r2").style.backgroundColor;
  if (r === "buttonface") {
    Room2.Color = "lawnGreen";
    document.querySelector(".r2").style.backgroundColor = Room2.Color;
    localStorage.setItem("r2", JSON.stringify(Room2));
  } else if (r === "lawngreen") {
    Room2.Color = "buttonFace";
    document.querySelector(".r2").style.backgroundColor = Room2.Color;
    localStorage.setItem("r2", JSON.stringify(Room2));
  }
}
function room3() {
  r = document.querySelector(".r3").style.backgroundColor;
  if (r === "buttonface") {
    Room3.Color = "lawnGreen";
    document.querySelector(".r3").style.backgroundColor = Room3.Color;
    localStorage.setItem("r3", JSON.stringify(Room3));
  } else if (r === "lawngreen") {
    Room3.Color = "buttonFace";
    document.querySelector(".r3").style.backgroundColor = Room3.Color;
    localStorage.setItem("r3", JSON.stringify(Room3));
  }
}
function room4() {
  r = document.querySelector(".r4").style.backgroundColor;
  if (r === "buttonface") {
    Room4.Color = "lawnGreen";
    document.querySelector(".r4").style.backgroundColor = Room4.Color;
    localStorage.setItem("r4", JSON.stringify(Room4));
  } else if (r === "lawngreen") {
    Room4.Color = "buttonFace";
    document.querySelector(".r4").style.backgroundColor = Room4.Color;
    localStorage.setItem("r4", JSON.stringify(Room4));
  }
}
function room5() {
  r = document.querySelector(".r5").style.backgroundColor;
  if (r === "buttonface") {
    Room5.Color = "lawnGreen";
    document.querySelector(".r5").style.backgroundColor = Room5.Color;
    localStorage.setItem("r5", JSON.stringify(Room5));
  } else if (r === "lawngreen") {
    Room5.Color = "buttonFace";
    document.querySelector(".r5").style.backgroundColor = Room5.Color;
    localStorage.setItem("r5", JSON.stringify(Room5));
  }
}
function room6() {
  r = document.querySelector(".r6").style.backgroundColor;
  if (r === "buttonface") {
    Room6.Color = "lawnGreen";
    document.querySelector(".r6").style.backgroundColor = Room6.Color;
    localStorage.setItem("r6", JSON.stringify(Room6));
  } else if (r === "lawngreen") {
    Room6.Color = "buttonFace";
    document.querySelector(".r6").style.backgroundColor = Room6.Color;
    localStorage.setItem("r6", JSON.stringify(Room6));
  }
}
function room7() {
  r = document.querySelector(".r7").style.backgroundColor;
  if (r === "buttonface") {
    Room7.Color = "lawnGreen";
    document.querySelector(".r7").style.backgroundColor = Room7.Color;
    localStorage.setItem("r7", JSON.stringify(Room7));
  } else if (r === "lawngreen") {
    Room7.Color = "buttonFace";
    document.querySelector(".r7").style.backgroundColor = Room7.Color;
    localStorage.setItem("r7", JSON.stringify(Room7));
  }
}
function room8() {
  r = document.querySelector(".r8").style.backgroundColor;
  if (r === "buttonface") {
    Room8.Color = "lawnGreen";
    document.querySelector(".r8").style.backgroundColor = Room8.Color;
    localStorage.setItem("r8", JSON.stringify(Room8));
  } else if (r === "lawngreen") {
    Room8.Color = "buttonFace";
    document.querySelector(".r8").style.backgroundColor = Room8.Color;
    localStorage.setItem("r8", JSON.stringify(Room8));
  }
}
function room9() {
  r = document.querySelector(".r9").style.backgroundColor;
  if (r === "buttonface") {
    Room9.Color = "lawnGreen";
    document.querySelector(".r9").style.backgroundColor = Room9.Color;
    localStorage.setItem("r9", JSON.stringify(Room9));
  } else if (r === "lawngreen") {
    Room9.Color = "buttonFace";
    document.querySelector(".r9").style.backgroundColor = Room9.Color;
    localStorage.setItem("r9", JSON.stringify(Room9));
  }
}
function room10() {
  r = document.querySelector(".r10").style.backgroundColor;
  if (r === "buttonface") {
    Room10.Color = "lawnGreen";
    document.querySelector(".r10").style.backgroundColor = Room10.Color;
    localStorage.setItem("r10", JSON.stringify(Room10));
  } else if (r === "lawngreen") {
    Room10.Color = "buttonFace";
    document.querySelector(".r10").style.backgroundColor = Room10.Color;
    localStorage.setItem("r10", JSON.stringify(Room10));
  }
}
function room11() {
  r = document.querySelector(".r11").style.backgroundColor;
  if (r === "buttonface") {
    Room11.Color = "lawnGreen";
    document.querySelector(".r11").style.backgroundColor = Room11.Color;
    localStorage.setItem("r11", JSON.stringify(Room11));
  } else if (r === "lawngreen") {
    Room11.Color = "buttonFace";
    document.querySelector(".r11").style.backgroundColor = Room11.Color;
    localStorage.setItem("r11", JSON.stringify(Room11));
  }
}
function room12() {
  r = document.querySelector(".r12").style.backgroundColor;
  if (r === "buttonface") {
    Room12.Color = "lawnGreen";
    document.querySelector(".r12").style.backgroundColor = Room12.Color;
    localStorage.setItem("r12", JSON.stringify(Room12));
  } else if (r === "lawngreen") {
    Room12.Color = "buttonFace";
    document.querySelector(".r12").style.backgroundColor = Room12.Color;
    localStorage.setItem("r12", JSON.stringify(Room12));
  }
}
function room13() {
  r = document.querySelector(".r13").style.backgroundColor;
  if (r === "buttonface") {
    Room13.Color = "lawnGreen";
    document.querySelector(".r13").style.backgroundColor = Room13.Color;
    localStorage.setItem("r13", JSON.stringify(Room13));
  } else if (r === "lawngreen") {
    Room13.Color = "buttonFace";
    document.querySelector(".r13").style.backgroundColor = Room13.Color;
    localStorage.setItem("r13", JSON.stringify(Room13));
  }
}
function room14() {
  r = document.querySelector(".r14").style.backgroundColor;
  if (r === "buttonface") {
    Room14.Color = "lawnGreen";
    document.querySelector(".r14").style.backgroundColor = Room14.Color;
    localStorage.setItem("r14", JSON.stringify(Room14));
  } else if (r === "lawngreen") {
    Room14.Color = "buttonFace";
    document.querySelector(".r14").style.backgroundColor = Room14.Color;
    localStorage.setItem("r14", JSON.stringify(Room14));
  }
}
function room15() {
  r = document.querySelector(".r15").style.backgroundColor;
  if (r === "buttonface") {
    Room15.Color = "lawnGreen";
    document.querySelector(".r15").style.backgroundColor = Room15.Color;
    localStorage.setItem("r15", JSON.stringify(Room15));
  } else if (r === "lawngreen") {
    Room15.Color = "buttonFace";
    document.querySelector(".r15").style.backgroundColor = Room15.Color;
    localStorage.setItem("r15", JSON.stringify(Room15));
  }
}
function room16() {
  r = document.querySelector(".r16").style.backgroundColor;
  if (r === "buttonface") {
    Room16.Color = "lawnGreen";
    document.querySelector(".r16").style.backgroundColor = Room16.Color;
    localStorage.setItem("r16", JSON.stringify(Room16));
  } else if (r === "lawngreen") {
    Room16.Color = "buttonFace";
    document.querySelector(".r16").style.backgroundColor = Room16.Color;
    localStorage.setItem("r16", JSON.stringify(Room16));
  }
}
function room17() {
  r = document.querySelector(".r17").style.backgroundColor;
  if (r === "buttonface") {
    Room17.Color = "lawnGreen";
    document.querySelector(".r17").style.backgroundColor = Room17.Color;
    localStorage.setItem("r17", JSON.stringify(Room17));
  } else if (r === "lawngreen") {
    Room17.Color = "buttonFace";
    document.querySelector(".r17").style.backgroundColor = Room17.Color;
    localStorage.setItem("r17", JSON.stringify(Room17));
  }
}
function room18() {
  r = document.querySelector(".r18").style.backgroundColor;
  if (r === "buttonface") {
    Room18.Color = "lawnGreen";
    document.querySelector(".r18").style.backgroundColor = Room18.Color;
    localStorage.setItem("r18", JSON.stringify(Room18));
  } else if (r === "lawngreen") {
    Room18.Color = "buttonFace";
    document.querySelector(".r18").style.backgroundColor = Room18.Color;
    localStorage.setItem("r18", JSON.stringify(Room18));
  }
}
function room19() {
  r = document.querySelector(".r19").style.backgroundColor;
  if (r === "buttonface") {
    Room19.Color = "lawnGreen";
    document.querySelector(".r19").style.backgroundColor = Room19.Color;
    localStorage.setItem("r19", JSON.stringify(Room19));
  } else if (r === "lawngreen") {
    Room19.Color = "buttonFace";
    document.querySelector(".r19").style.backgroundColor = Room19.Color;
    localStorage.setItem("r19", JSON.stringify(Room19));
  }
}
function room20() {
  r = document.querySelector(".r20").style.backgroundColor;
  if (r === "buttonface") {
    Room20.Color = "lawnGreen";
    document.querySelector(".r20").style.backgroundColor = Room20.Color;
    localStorage.setItem("r20", JSON.stringify(Room20));
  } else if (r === "lawngreen") {
    Room20.Color = "buttonFace";
    document.querySelector(".r20").style.backgroundColor = Room20.Color;
    localStorage.setItem("r20", JSON.stringify(Room20));
  }
}
function room21() {
  r = document.querySelector(".r21").style.backgroundColor;
  if (r === "buttonface") {
    Room21.Color = "lawnGreen";
    document.querySelector(".r21").style.backgroundColor = Room21.Color;
    localStorage.setItem("r21", JSON.stringify(Room21));
  } else if (r === "lawngreen") {
    Room21.Color = "buttonFace";
    document.querySelector(".r21").style.backgroundColor = Room21.Color;
    localStorage.setItem("r21", JSON.stringify(Room21));
  }
}
function room22() {
  r = document.querySelector(".r22").style.backgroundColor;
  if (r === "buttonface") {
    Room22.Color = "lawnGreen";
    document.querySelector(".r22").style.backgroundColor = Room22.Color;
    localStorage.setItem("r22", JSON.stringify(Room22));
  } else if (r === "lawngreen") {
    Room22.Color = "buttonFace";
    document.querySelector(".r22").style.backgroundColor = Room22.Color;
    localStorage.setItem("r22", JSON.stringify(Room22));
  }
}
function room23() {
  r = document.querySelector(".r23").style.backgroundColor;
  console.log(r);
  if (r === "buttonface") {
    Room23.Color = "lawnGreen";
    document.querySelector(".r23").style.backgroundColor = Room23.Color;
    localStorage.setItem("r23", JSON.stringify(Room23));
  } else if (r === "lawngreen") {
    Room23.Color = "buttonFace";
    document.querySelector(".r23").style.backgroundColor = Room23.Color;
    localStorage.setItem("r23", JSON.stringify(Room23));
  }
}

function room24() {
  r = document.querySelector(".r24").style.backgroundColor;
  console.log(r);
  if (r === "buttonface") {
    Room24.Color = "lawnGreen";
    document.querySelector(".r24").style.backgroundColor = Room24.Color;
    localStorage.setItem("r24", JSON.stringify(Room24));
  } else if (r === "lawngreen") {
    Room24.Color = "buttonFace";
    document.querySelector(".r24").style.backgroundColor = Room24.Color;
    localStorage.setItem("r24", JSON.stringify(Room24));
  }
}
function room25() {
  r = document.querySelector(".r25").style.backgroundColor;
  if (r === "buttonface") {
    Room25.Color = "lawnGreen";
    document.querySelector(".r25").style.backgroundColor = Room25.Color;
    localStorage.setItem("r25", JSON.stringify(Room25));
  } else if (r === "lawngreen") {
    Room25.Color = "buttonFace";
    document.querySelector(".r25").style.backgroundColor = Room25.Color;
    localStorage.setItem("r25", JSON.stringify(Room25));
  }
}

// -------------------Mess Edit-----------------------------

function foodsDisplay() {
  document.body.innerHTML = `
    
  <h1 class="header">Mess System</h1>
  
  <div class="mess_container">
    <div class="mess_edit_item">Timings</div>
    <div class="mess_edit_item">Event</div>
    <div class="mess_edit_item">Monday</div>
    <div class="mess_edit_item">Tuesday</div>
    <div class="mess_edit_item">Wednesday</div>
    <div class="mess_edit_item">Thursday</div>
    <div class="mess_edit_item">Friday</div>
    <div class="mess_edit_item">Saturday</div>
    <div class="mess_edit_item">Sunday</div>
    <div class="mess_edit_item">7:30am<br />to<br />9:30am</div>
    <div class="mess_edit_item">Breakfast</div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Monday.Breakfast}" class="food b1" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Tuesday.Breakfast}" class="food b2" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Wednesday.Breakfast}" class="food b3" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Thursday.Breakfast}" class="food b4" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Friday.Breakfast}" class="food b5" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Saturday.Breakfast}" class="food b6" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Sunday.Breakfast}" class="food b7" />
    </div>
    <div class="mess_edit_item">12:45pm<br />to<br />3:00pm</div>
    <div class="mess_edit_item">Lunch</div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Monday.Lunch}" class="food l1" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Tuesday.Lunch}" class="food l2" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Wednesday.Lunch}" class="food l3" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Thursday.Lunch}" class="food l4" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Friday.Lunch}" class="food l5" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Saturday.Lunch}" class="food l6" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Sunday.Lunch}" class="food l7" />
    </div>
    <div class="mess_edit_item">7:30pm<br />to<br />9:30pm</div>
    <div class="mess_edit_item">Dinner</div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Monday.Dinner}" class="food d1" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Tuesday.Dinner}" class="food d2" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Wednesday.Dinner}" class="food d3" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Thursday.Dinner}" class="food d4" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Friday.Dinner}" class="food d5" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Saturday.Dinner}" class="food d6" />
    </div>
    <div class="mess_edit_item">
      <input type="text" value="${messData.Sunday.Dinner}" class="food d7" />
    </div>
  </div>
  <br />
  <center><button class="save" onclick="save();">Save</button></center>
  `;
}

function save() {
  Mess = {
    Monday: {
      Breakfast: document.querySelector(".b1").value,
      Lunch: document.querySelector(".l1").value,
      Dinner: document.querySelector(".d1").value,
    },
    Tuesday: {
      Breakfast: document.querySelector(".b2").value,
      Lunch: document.querySelector(".l2").value,
      Dinner: document.querySelector(".d2").value,
    },
    Wednesday: {
      Breakfast: document.querySelector(".b3").value,
      Lunch: document.querySelector(".l3").value,
      Dinner: document.querySelector(".d3").value,
    },
    Thursday: {
      Breakfast: document.querySelector(".b4").value,
      Lunch: document.querySelector(".l4").value,
      Dinner: document.querySelector(".d4").value,
    },
    Friday: {
      Breakfast: document.querySelector(".b5").value,
      Lunch: document.querySelector(".l5").value,
      Dinner: document.querySelector(".d5").value,
    },
    Saturday: {
      Breakfast: document.querySelector(".b6").value,
      Lunch: document.querySelector(".l6").value,
      Dinner: document.querySelector(".d6").value,
    },
    Sunday: {
      Breakfast: document.querySelector(".b7").value,
      Lunch: document.querySelector(".l7").value,
      Dinner: document.querySelector(".d7").value,
    },
  };

  document.querySelector(".b1").value = Mess.Monday.Breakfast;
  document.querySelector(".b2").value = Mess.Tuesday.Breakfast;
  document.querySelector(".b3").value = Mess.Wednesday.Breakfast;
  document.querySelector(".b4").value = Mess.Thursday.Breakfast;
  document.querySelector(".b5").value = Mess.Friday.Breakfast;
  document.querySelector(".b6").value = Mess.Saturday.Breakfast;
  document.querySelector(".b7").value = Mess.Sunday.Breakfast;

  document.querySelector(".l1").value = Mess.Monday.Lunch;
  document.querySelector(".l2").value = Mess.Tuesday.Lunch;
  document.querySelector(".l3").value = Mess.Wednesday.Lunch;
  document.querySelector(".l4").value = Mess.Thursday.Lunch;
  document.querySelector(".l5").value = Mess.Friday.Lunch;
  document.querySelector(".l6").value = Mess.Saturday.Lunch;
  document.querySelector(".l7").value = Mess.Sunday.Lunch;

  document.querySelector(".d1").value = Mess.Monday.Dinner;
  document.querySelector(".d2").value = Mess.Tuesday.Dinner;
  document.querySelector(".d3").value = Mess.Wednesday.Dinner;
  document.querySelector(".d4").value = Mess.Thursday.Dinner;
  document.querySelector(".d5").value = Mess.Friday.Dinner;
  document.querySelector(".d6").value = Mess.Saturday.Dinner;
  document.querySelector(".d7").value = Mess.Sunday.Dinner;

  // console.log(Mess.Monday.Breakfast);
  localStorage.setItem("score", JSON.stringify(Mess));
  return Mess;
}

let messData = localStorage.getItem("score")
  ? JSON.parse(localStorage.getItem("score"))
  : save();

function foodsStudentDisplay() {
  document.body.innerHTML = `
	
	
	<h1 class="header">Mess System</h1>

	<div class="mess_container">
		<div class="mess_display_item">Timings</div>
		<div class="mess_display_item">Event</div>
		<div class="mess_display_item">Monday</div>
		<div class="mess_display_item">Tuesday</div>
		<div class="mess_display_item">Wednesday</div>
		<div class="mess_display_item">Thursday</div>
		<div class="mess_display_item">Friday</div>
		<div class="mess_display_item">Saturday</div>
		<div class="mess_display_item">Sunday</div>
		<div class="mess_display_item">7:30am<br>to<br>9:30am</div>
		<div class="mess_display_item">Breakfast</div>
		<div class="mess_display_item one">${messData.Monday.Breakfast}</div>
		<div class="mess_display_item two">${messData.Tuesday.Breakfast}</div>
		<div class="mess_display_item three">${messData.Wednesday.Breakfast}</div>
		<div class="mess_display_item four">${messData.Thursday.Breakfast}</div>
		<div class="mess_display_item five">${messData.Friday.Breakfast}</div>
		<div class="mess_display_item six">${messData.Saturday.Breakfast}</div>
		<div class="mess_display_item seven">${messData.Sunday.Breakfast}</div>
		<div class="mess_display_item">12:43pm<br>to<br>3:00pm</div>
		<div class="mess_display_item">Lunch</div>
		<div class="mess_display_item eight">${messData.Monday.Lunch}</div>
		<div class="mess_display_item nine">${messData.Tuesday.Lunch}</div>
		<div class="mess_display_item ten">${messData.Wednesday.Lunch}</div>
		<div class="mess_display_item eleven">${messData.Thursday.Lunch}</div>
		<div class="mess_display_item twelve">${messData.Friday.Lunch}</div>
		<div class="mess_display_item thirteen">${messData.Saturday.Lunch}</div>
		<div class="mess_display_item fourteen">${messData.Sunday.Lunch}</div>
		<div class="mess_display_item">7:30pm<br>to<br>9:30pm</div>
		<div class="mess_display_item">Dinner</div>
		<div class="mess_display_item fifteen">${messData.Monday.Dinner}</div>
		<div class="mess_display_item sixteen">${messData.Tuesday.Dinner}</div>
		<div class="mess_display_item seventeen">${messData.Wednesday.Dinner}</div>
		<div class="mess_display_item eighteen">${messData.Thursday.Dinner}</div>
		<div class="mess_display_item nineteen">${messData.Friday.Dinner}</div>
		<div class="mess_display_item twenty">${messData.Saturday.Dinner}</div>
		<div class="mess_display_item twentyone">${messData.Sunday.Dinner}</div>
	</div>
      <br>
		
	
 	`;
}

// ------------------------Laundry---------------------------------

function laundryManagerDisplay() {
  document.body.innerHTML = `
 
    <h1 class="header">Laundry System</h1>

    <div class="laundry_container">
      <div class="laundry_item">
        <div class="laundry_label">Saturday</div>
        <div class="laundry_content">
          <input type="text" value="${laundryData.Saturday}" class="l_in laundry1" />
        </div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Sunday</div>
        <div class="laundry_content">
          <input type="text" value="${laundryData.Sunday}" class="l_in laundry2" />
        </div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Monday</div>
        <div class="laundry_content">
          <input type="text" value="${laundryData.Monday}" class="l_in laundry3" />
        </div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Tuesday</div>
        <div class="laundry_content">
          <input type="text" value="${laundryData.Tuesday}" class="l_in laundry4" />
        </div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Wednesday</div>
        <div class="laundry_content">
          <input type="text" value="${laundryData.Wednesday}" class="l_in laundry5" />
        </div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Thursday</div>
        <div class="laundry_content">
          <input type="text" value="${laundryData.Thursday}" class="l_in laundry6" />
        </div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Friday</div>
        <div class="laundry_content">
          <input type="text" value="${laundryData.Friday}" class="l_in laundry7" />
        </div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Contact</div>
        <div class="laundry_content">
          <input type="text" value="${laundryData.Contact}" class="l_in laundry8" />
        </div>
      </div>
    </div>
    <br><br>
    <center><button class="save" onclick="saveLaundry();">Save</button></center>
  `;
}

function saveLaundry() {
  Laundry = {
    Saturday: document.querySelector(".laundry1").value,
    Sunday: document.querySelector(".laundry2").value,
    Monday: document.querySelector(".laundry3").value,
    Tuesday: document.querySelector(".laundry4").value,
    Wednesday: document.querySelector(".laundry5").value,
    Thursday: document.querySelector(".laundry6").value,
    Friday: document.querySelector(".laundry7").value,
    Contact: document.querySelector(".laundry8").value,
  };

  document.querySelector(".laundry1").value = Laundry.Saturday;
  document.querySelector(".laundry2").value = Laundry.Sunday;
  document.querySelector(".laundry3").value = Laundry.Monday;
  document.querySelector(".laundry4").value = Laundry.Tuesday;
  document.querySelector(".laundry5").value = Laundry.Wednesday;
  document.querySelector(".laundry6").value = Laundry.Thursday;
  document.querySelector(".laundry7").value = Laundry.Friday;
  document.querySelector(".laundry8").value = Laundry.Contact;

  localStorage.setItem("laundry", JSON.stringify(Laundry));

  return Laundry;
}

let laundryData = localStorage.getItem("laundry")
  ? JSON.parse(localStorage.getItem("laundry"))
  : saveLaundry();

function laundryStudentDisplay() {
  document.body.innerHTML = `
 
    <h1 class="header">Laundry System</h1>

    <div class="laundry_container">
      <div class="laundry_item">
        <div class="laundry_label">Saturday</div>
        <div class="laundry_content">${laundryData.Saturday}</div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Sunday</div>
        <div class="laundry_content">${laundryData.Sunday}</div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Monday</div>
        <div class="laundry_content">${laundryData.Monday}</div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Tuesday</div>
        <div class="laundry_content">${laundryData.Tuesday}</div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Wednesday</div>
        <div class="laundry_content">${laundryData.Wednesday}</div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Thursday</div>
        <div class="laundry_content">${laundryData.Thursday}</div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Friday</div>
        <div class="laundry_content">${laundryData.Friday}</div>
      </div>
      <div class="laundry_item">
        <div class="laundry_label">Contact</div>
        <div class="laundry_content">${laundryData.Contact}</div>
      </div>
    </div>
  
  
  `;
}
// localStorage.clear();
