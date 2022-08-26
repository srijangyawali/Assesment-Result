const data = [
  { name: "Prakash Adhikari", rollNo: 352, marks: 17 },
  { name: "Somraj Giri", rollNo: 358, marks: 16 },
  { name: "Prativa Sharma", rollNo: 353, marks: 16 },
  { name: "Chandra Bd. Budha", rollNo: 342, marks: 15 },
  { name: "Sushila Regmi", rollNo: 360, marks: 15 },
  { name: "Bhumika Ghimire", rollNo: 340, marks: 14 },
  { name: "Modassir Hussain", rollNo: 349, marks: 13 },
  { name: "Ikita Basnet", rollNo: 344, marks: 15 },
  { name: "Sushmita Adhikari", rollNo: 362, marks: 16 },
  { name: "Indira Ghising", rollNo: 345, marks: 16 },
  { name: "Kabita Kumari Sah", rollNo: 347, marks: 10 },
  { name: "Nisha Aryal", rollNo: 350, marks: 13 },
  { name: "Arun Chaudhary", rollNo: 363, marks: 11 },
  { name: "Ravi Kr. Chaudhary", rollNo: 366, marks: 14 },
  { name: "Sujit Kr. Yadav", rollNo: 367, marks: 11 },
  { name: "Barsha Kandel", rollNo: 339, marks: 16 },
  { name: "Nisha Khakurel", rollNo: 351, marks: 14 },
  { name: "Ravi Raj Adhikari", rollNo: 355, marks: 16 },
  { name: "Abhay K. Shrivastav", rollNo: 338, marks: 15 },
  { name: "Dipesh Yadav", rollNo: 343, marks: 16 },
  { name: "Japendra Thapa", rollNo: 346, marks: 14 },
  { name: "Lalah Kumar Sah", rollNo: 365, marks: 12 },
  { name: "Samindra Bahadur Dhami", rollNo: 357, marks: 13 },
  {
    name: "Priyank Subedi",
    rollNo: 354,
    marks: "hmm Badey Shatir hoo... Mera result dekhne chaley",
  },
  { name: "Bibek Shrestha", rollNo: 341, marks: 17 },
  { name: "Madan Pokhrel", rollNo: 348, marks: 13 },
  { name: "Rojina Shrestha", rollNo: 356, marks: 10 },
  { name: "Suprana Thapa", rollNo: 359, marks: 15 },
  { name: "Sushma Sunar", rollNo: 361, marks: 12},
];
let setupResult = () => {
  let inputVal = document.querySelector("input").value;
  const user = data.filter((val) => {
    return val.rollNo == inputVal;
  });
  let studentName = user[0].name;
  let obtainedMarks = user[0].marks;
  document.querySelector(".outputName").innerText = studentName;
  document.querySelector(".outputMarks").innerText = obtainedMarks;
  if (studentName == "Priyank Subedi") {
    document.querySelector(".outputMarks").innerText = "LOL";
    alert(obtainedMarks);
  }
};

let isClicked = false;
let button = document.querySelector("button");
let innerContent = document.querySelector("form");
let result = document.querySelector(".result");
button.addEventListener("click", (e) => {
  e.preventDefault();
  setupResult();
  innerContent.classList.add("hideContent");
  result.classList.remove("hideContent");
});
