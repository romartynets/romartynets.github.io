var name,time,place,event,euro,dollar,usd,eur,a,b,c;
name= prompt("Name:"); 
time= prompt("Time:");
place= prompt("Place:");
event= prompt("Event:");
document.write(name+" has a "+event+" "+time+" "+place+".");
euro= prompt("Euros:");
dollar= prompt("Dollars:");
usd=27.006;
eur=31.822;
a=eur*euro;
b=dollar*usd;
c=eur/usd;
alert(euro+" euros are equal "+a+" grns, "+dollar+" dollars are equal "+b+" grns, one euro is equal "+c+" dollars.");



