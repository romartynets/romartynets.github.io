var name,time,place,event,euro,dollar,usd,eur,a,b,c,znach;
znach=/^[а-яА-Яa-zA-Z]+$/;
name= prompt("Name:");
while(1){
  if(znach.test(name))
  {
    break
  }
  alert("Enter name");
  name= prompt("Name:");  
       }

time= prompt("Time:");
while(1){
  if (/\d/.test(time) && time>0 && time<=24)
  {
    break
  }
  alert("Enter time(0-24):");
  time= prompt("Time:");
      }

place= prompt("Place:");
event= prompt("Event:");
console.log(name+" has a "+event+" at "+time+" in "+place+".");
euro= prompt("Euros:");
while (1) {
  if (euro > '0' || !euro < '9')
  {break}
    alert("Enter numbers");
    euro= prompt("Euros:");
  }
  
dollar= prompt("Dollars:");
while (1) 
  {
    if (dollar > '0' || dollar < '9')
    {
      break
    }
    alert("Enter numbers");
    dollar= prompt("Dollars:");
  }
usd=27.006;
eur=31.822;
a=eur*euro;
b=dollar*usd;
c=eur/usd;
alert(euro+" euros are equal "+a+" grns, "+dollar+" dollars are equal "+b+" grns, one euro is equal "+c+" dollars.");






