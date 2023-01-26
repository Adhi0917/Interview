<script>
function ques1(x,y,m,n)
{
	var a = Array(m+1).fill().map(()=>Array(n+1).fill(0));
	var res = 0;
	for(i=0;i<=m;i++)
	{
	 for(j=0;j<=n;j++)
	  {
	  if(i==0|| j==0)
	  {
	  a[i][j]=0;
	  }
	  else if(x[i-1]==y[j-1])
	  {
	  a[i][j]=a[i-1][j-1]+1;
	  res = Math.max(res,a[i][j]);
	  }
	  else
	  {
	  a[i][j]=0;
	  }
	  }
	}
	return res;
}

var x="this is my first ques";
var y="this is my answer";

var m =x.length;
var n =y.length;
document.write("the longest substring is"+ );
ques1(x,y,m,n);
</script>