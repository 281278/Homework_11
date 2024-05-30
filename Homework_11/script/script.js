// Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// Пример объекта:


let menu = {
    width: 200, 
    height: 300,
    title: "my menu",
};


for(let key in menu){
   
    if (typeof(menu[key])=='number')
        {
            // console.log("Number:" +menu[key] *2 );
            menu[key]=menu[key]*2;
        }
  
};

for(let key in menu){
   
    if (typeof(menu[key])=='number')
        {
            console.log(key +":" +menu[key] );
        
        }
        if (typeof(menu[key])=='string')
            {
                console.log(key +":" +menu[key] );
            }
            
            
  
};



let arr = [
    {
    id: 1,
    title: "bicycle",
    price: 45000,
    discount: 10
    },
    {
    id: 2,
    title: "roller-skates",
    price: 15000,
    discount: 5
    },
    {
    id: 3,
    title: "Kick scooter",
    price: 10000,
    discount: 30
    },
    {
    id: 4,
    title: "skis",
    price: 25000,
    discount: 20
    },
    {
    id: 5,
    title: "skate",
    price: 10000,
    discount: 0
}
];


for (let i=0;i< arr.length;i++)
    {
        
        console.log("Title:" + arr[i].title);
    }

    for (let i=0;i< arr.length;i++)
        {
            
            console.log( arr[i].title + "(" + arr[i].price+ ")");
        }

        for (let i=0;i< arr.length;i++)
            {
                
                console.log( arr[i].title + "(" + (arr[i].price * (1 - arr[i].discount/100) )+ ")");
            }

    


