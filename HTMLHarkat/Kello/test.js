<!DOCTYPE html>
<html>
<body>

<p>Click the button to get a "Hyvää aamupäivää" greeting if the time is less than 12.00.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction()
{
var x="";
var time=new Date().getHours();
if (time<12)
  {
  x="Hyvää aamupäivää";
  }
  else x="Hyvää iltapäivää"
document.getElementById("demo").innerHTML=x;
}
</script>

</body>
</html>

