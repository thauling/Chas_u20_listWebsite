
/*
[
    {
      name: "fries",
      description: "extra fried fries",
      price: 10
    },
    {
      name: "hamburger",
      description: "juicy burger",
      price: 15
    },
    {
      name: "drink",
      description: "a lot of soda",
      price: 5
    }
  ];

  */

 const ourArr = [
    {
      name: "fries",
      description: "extra fried fries",
      price: 10
    },
    {
      name: "hamburger",
      description: "juicy burger",
      price: 15
    },
    {
      name: "drink",
      description: "a lot of soda",
      price: 5
    }
  ];

const returnDescription = function() {
    let itemId = this.getAttribute('id');
    //console.log(typeof(itemId))
    itemId = Number(itemId.substring(1, 2));
    //itemId = Number(itemId);
    //console.log(typeof(itemId));
    return document.querySelector('#someOutput').innerHTML = ourArr[itemId].description;
};

  //console.log(ourArr[0].name);
for (let i = 0; i < ourArr.length; i++) {
  document.querySelector(`#i${i}`).innerHTML = (ourArr[i].name);
};


for (let i = 0; i < ourArr.length; i++) {
  document.querySelector(`#i${i}`).addEventListener('click', returnDescription);
};