function vowels(str)
{ let str1='';
    for(let i=0;i<str.length;i++)
    {  
        if(str[i]== 'a'|| str[i]=='e'||str[i]== 'i' ||str[i]=='o' ||str[i]=='u')
        {
           str1+=str[i];
        }
        else{
            continue;
        }
    }
    console.log(str1);
}
vowels('ankit');