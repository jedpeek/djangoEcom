var updateBtns = document.getElementsByClassName('update-cart')

for(i=0; i < updateBtns.length; i++){
  updateBtns[i].addEventListener('click', function(){
    var productId = this.dataset.product
    var action = this.dataset.action
    console.log('productId:', productId, 'Action:', action)

    console.log('USER:', user)
    if(user == "AnonymousUser"){
      console.log("Not logged in")
    }else{
      updateUserOrder(productId, action)
    }

  })
}

function updateUserOrder(productId, action){
    let url = '/update_item/'
    fetch(url, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRFToken':csrftoken,
      },
      body:JSON.stringify({'productId':productId, 'action':action})
    })
    .then((response) => response.json())
    .then((data)=> console.log(data), location.reload())
}
