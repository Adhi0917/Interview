<script>
var n=4;
var a=[1,2,3,4,5,6];


function sum(a,n){
	for(let i=0;i<a.lenght;i++)
	{
	for(let j=i+1;j<a.length;j++)
	{
		if(a[i]+a[j]==n)
		{
		return [a[i],a[j]];
		}
	}
	}
}

sum(a,n);
</script>