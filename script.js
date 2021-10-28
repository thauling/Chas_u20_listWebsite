
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

  //console.log(ourArr[0].name);

  document.querySelector('#i0').innerHTML = (ourArr[0].name);
  document.querySelector('#i1').innerHTML = (ourArr[1].name);
  document.querySelector('#i2').innerHTML = (ourArr[2].name);

const returnDescription = function() {
    let itemId = this.getAttribute('id');
    console.log(typeof(itemId))
    itemId = Number(itemId.substring(1, 2));
    //itemId = Number(itemId);
    console.log(typeof(itemId));
    return document.querySelector('#someOutput').innerHTML = ourArr[itemId].description;
};

  document.querySelector('#i0').addEventListener('click', returnDescription);
  document.querySelector('#i1').addEventListener('click', returnDescription);
  document.querySelector('#i2').addEventListener('click', returnDescription);
