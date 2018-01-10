class Casino{
    constructor(number,initial_amount){
        this.number=number;
        this.initial_amount=initial_amount; 
        this.money=0;
    }
    allmoney()
    {
        var Allmoney=this.money;
        console.log(this.money);
        for(i=0;i<d.number;i++)
        {
            console.log(Allmoney);
            console.log(s[i].money);
            Allmoney+=s[i].money;
        }
        alert(Allmoney);
    }
    numberSlotMahines( )
    {
    }
    AddNewMachine()
    {   
        s[d.number]=new SlotMachine(s[most_money].money/2);
        search_most_money();
        s[d.number].lucky=false;
        d.number+=1;
        s[most_money].money=s[most_money].money/2;
        
    }
    removeMachine(RemoveNumber)
    {
        d.number-=1;
        var splitMoney=s[RemoveNumber].money/d.number;
        var j;
        for(j=0;j<d.number+1;j++)
        { 
            s[j].money+=splitMoney;
        } 
        for(i=RemoveNumber;i<d.number;i++)
        {
            s[i]=s[i+1];
        }
        s[d.number]=undefined;
    }
       getMoney(SumMoney)
    {
        var AllmoneyMachines=0;
       for(i=0;i<d.number;i++)
        {
            AllmoneyMachines+=s[i].money;
       
        }   
      if(AllmoneyMachines<SumMoney)
        {
            return;
        }
        search_most_money ();
        if(SumMoney<=s[most_money].money)
        {
            s[most_money].money-=SumMoney;
            d.money+=SumMoney;
        } 
        else{

            while(SumMoney>s[most_money].money)
            {
                d.money+=s[most_money].money;
                SumMoney-=s[most_money].money;
                s[most_money].money=0;
                search_most_money ();
            }
            s[most_money].money-=SumMoney;
            d.money+=SumMoney;
        }
    } 
}



class SlotMachine{
    constructor(initial_amount){
        this.initial_amount=initial_amount;
        this.money=initial_amount;
        this.lucky=false;
        this.notMoney=false;
    }
    seeMoney(){}
    getMoney(number){
        if(number>this.money)
        {
            return;
        }
        d.money+=number;
        this.money-=number;
    }
    putMoney(number)
    {
        if(this.notMoney==true)
        {
            return;
        }
        if(d.money<number)
        {
            return;
        }
        d.money-=number;
        this.money+=number;
    }
    Play(number)
    {
        if(this.money<value3)
        {
            alert("Недостатньо коштів");
            return;
        }
        var random_number=Math.floor(Math.random() * 900)+100;
        var first_number=Math.floor(random_number/100);
        var second_number=Math.floor((random_number-first_number*100)/10);
        var third_number=Math.floor(random_number-first_number*100-second_number*10);
        
        console.log(first_number);
        console.log(second_number);
        console.log(third_number);
        
        document.getElementsByClassName("firstNumber")[0].innerHTML=first_number;
        document.getElementsByClassName("secondNumber")[0].innerHTML=second_number;
        document.getElementsByClassName("thirdNumber")[0].innerHTML=third_number;      
        
        document.getElementsByClassName("numb")[0].innerHTML=d.money;

        if(((first_number==second_number) && (second_number==third_number)&& (third_number==first_number)&& (this.lucky==true))||((first_number==7)&&(second_number==7)&&(third_number==7)) )
        {
            this.money=0;
            d.money+=1000000;
            this.notMoney=true;
            document.getElementsByClassName("numb")[0].innerHTML=d.money;

        }
        else if((first_number==second_number) && (second_number==third_number)&& (third_number==first_number))
        {
            this.money+=number*4;
        }
        else if((first_number==second_number)||(second_number==third_number)||(third_number==first_number))
        {
            this.money+=number;
        }
        else
        {
            this.money-=number;
        }
    }
}

var s=[];
var d;
function Play(n,m)
{
d=new Casino(n,m);
for(i=0;i<d.number;i++)
{
    s[i]=new SlotMachine(d.initial_amount/d.number); 
}
const lucky=Math.floor(Math.random() * d.number) ;
s[lucky].lucky=true;
}
var most_money=0;
function search_most_money ()
{ 
    most_money=0;
    for(i=0;i<d.number;i++)
    {   
        if(s[i].money>s[most_money].money)
        {most_money=i;} 
      
    }
}

var button1=document.getElementsByClassName("create")[0];
var value1,value2,value3;
button1.onclick = function() {
    value1=Number(document.getElementsByTagName("input")[3].value);
    value2=Number(document.getElementsByTagName("input")[4].value);
    if(value1<=0 || value2<=0)
    {   
        alert("Введіть додатні числа");
        return;
    }
    Play(value2,value1);
    Selectchange ();
    var a=document.getElementsByTagName("select")[0].value-1;
    document.getElementsByClassName("num")[0].innerHTML=s[a].money;

}
    
var button2=document.getElementsByClassName("play")[0];
button2.onclick = function() {
    value3=Number(document.getElementsByTagName("input")[5].value);
    if(value3<=0)
    {   
        alert("Введіть додатнє число");
        return;
    }
    var a=document.getElementsByTagName("select")[0].value-1;
    s[a].Play(value3);
    document.getElementsByClassName("num")[0].innerHTML=s[a].money;
}

function Selectchange ()
{
    document.getElementsByTagName("select")[0].innerHTML="";
    for(i=1;i<d.number+1;i++)
    {
        document.getElementsByTagName("select")[0].innerHTML+="  <option> "+i+" </option> ";
    }
}

var button3=document.getElementsByClassName("createMachine")[0];
button3.onclick = function() {
    d.AddNewMachine();
    Selectchange ();
}

var button4=document.getElementsByClassName("removeMachine")[0];
button4.onclick = function() {
    
    var a=document.getElementsByClassName("inputremove")[0].value-1;
    if ((a<0) || (a>d.number) )
    {
        alert("Невірні дані");
        return;
    }
    d.removeMachine(a);
    Selectchange ();
}

var button5=document.getElementsByClassName("getmoney")[0];
button5.onclick = function() {
    var a=Number(document.getElementsByTagName("input")[1].value);
    var b=document.getElementsByTagName("select")[0].value-1;
    if(a>s[b].money)
    {
        alert("Недостатньо грошей");
        return;
    }
    s[b].getMoney(a);
    document.getElementsByClassName("numb")[0].innerHTML=d.money;
    Selectchange ();
}

var button6=document.getElementsByClassName("putmoney")[0];
button6.onclick = function() {
    var a=Number(document.getElementsByTagName("input")[2].value);
    var b=document.getElementsByTagName("select")[0].value-1;
    if(a>d.money)
    {
        alert("Недостатньо грошей");
        return;
    }
    s[b].putMoney(a);
    document.getElementsByClassName("numb")[0].innerHTML=d.money;
    Selectchange ();
}

var button7=document.getElementsByClassName("Allmoney")[0];
button7.onclick = function() {
    d.allmoney();
}
var select1=document.getElementsByTagName("select")[0];
select1.onchange= function() {
    var a=document.getElementsByTagName("select")[0].value-1;
    document.getElementsByClassName("num")[0].innerHTML=s[a].money;
}

