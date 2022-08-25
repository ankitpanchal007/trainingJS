let total=0;
function primeNumber(number)
{
    // while(total<=number)
    // {
    for(let i=2;i<=10;i++)
    {   let count=0;
        for(let j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                count++;
            }
        }
        if(count==0)
        {   
            total++;
            console.log(i);            
        }    
        }
}
// }
primeNumber(10);

