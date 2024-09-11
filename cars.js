const cars=[
    {
        id:1,make:"Toyota",model:"camry",price:24425,inStock:'yes',features:{engine:"2.5L 4-cylinder",horsepower:203}
    },

    {
        id:2,make:"Ford",model:"Mustang",price:27470,inStock:'No',features:{engine:"2.3L 4-cylinder",horsepower:310}
    },

    {
        id:3,make:"Chevorlet",model:"Tahoe",price:49900,inStock:'yes',features:{engine:"5.3L V8",horsepower:355}
    },

    {
        id:4,make:"Tesla",model:"Model 3",price:39990,inStock:'yes',features:{engine:"Electric",horsepower:283}
    },

    {
        id:5,make:"BMW",model:"3 series",price:41450,inStock:'No',features:{engine:"2.0L 4-cylinder",horsepower:255}
    },
]

        // cars.forEach((items=>{console.log(items.make)}))

        // res=cars.find((items=>items.price>=30000))
        // console.log(res)

        // res=cars.find((items=>items.inStock=='No'))
        //     console.log(res)

        res=cars.find((items=>items.horsepower>=300))
         console.log(res)

