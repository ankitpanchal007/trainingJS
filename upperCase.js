function f(str)
{
    let string='';
string+=str[0].toUpperCase();
for(let i=1;i<str.length;i++)
{
    string+=str[i];
}
return string;
}
console.log(f('ankit'));