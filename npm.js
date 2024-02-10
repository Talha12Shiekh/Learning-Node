import figlet from "figlet"

figlet("                      Talha         shiekh 😎", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});