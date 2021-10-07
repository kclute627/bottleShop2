

export function getSpecificItems(items, setItems, route) {
  let craftArr = []
  
  for (let i = 0; i < items.length; i++) {
   
    items[i].item_data.variations.map((cur) => {
      
      if (
        cur.custom_attribute_values &&
        cur.custom_attribute_values[
          route
        ]
      ) {
        const varations =
          cur.custom_attribute_values[
            route
          ];
          // console.log(varations.boolean_value);
        if (varations.boolean_value === true) {
       
        
         craftArr = [...craftArr, items[i]]
        }
      }
    });
    
  }
 setItems(craftArr)
 
  
}