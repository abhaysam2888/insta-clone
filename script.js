// swiper init
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

//   making clone of card and loop on array and make such cards and fill in slider
let arrOfCards = [
    {
        img: "https://pbs.twimg.com/card_img/1774481152767582208/J5DjD6Yh?format=jpg&name=900x900",
        name: "Narendra Modi",
        role: "New to instagram"
    },
    {
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Nischay Malhan",
        role: "New to instagram"
    },
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        name: "xtylishsycho",
        role: "Followed by virat.kohli"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Rohit Sharma",
        role: "popular"
    },
    {
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Ram Charan",
        role: "Acter"
    },
    {
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        name: "Krish",
        role: "New to instagram"
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        name: "Subham",
        role: "New to instagram"
    },
    {
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        name: "Samir",
        role: "Old Friend"
    },
    {
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        name: "Suraj Mahto",
        role: "New to instagram"
    },
    {
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        name: "Rupesh Mahto",
        role: "New to instagram"
    },
]

// making loop of cards

    function displayItem() {
        arrOfCards.forEach((item, index) => {
        let card_template = document.querySelector('#card-template')
        let parentToAppend = document.querySelector('.swiper-wrapper')
        let clone = card_template.content.cloneNode(true)
            
        fillingData(item, clone, index)
        parentToAppend.appendChild(clone)
        })
    }

    displayItem()

    // filling data in cards
function fillingData(item, clone, index) {
    let image = clone.querySelector('#card-sibling1-img')
    let headingName = clone.querySelector('#card-sibling1-h1')
    let paraRole = clone.querySelector('#card-sibling1-p')
    
    image.src = item.img
    headingName.textContent = item.name
    paraRole.textContent = item.role
    deleteItems(clone, index)
}

// delete items in cards
function deleteItems(clone, index) {
    let crossIcon = clone.querySelector('#card-sibling3')
    crossIcon.addEventListener('click', () => {
        arrOfCards.splice(index, 1)
        let parentToAppend = document.querySelector('.swiper-wrapper')
        parentToAppend.innerHTML = ""
        displayItem()
    })
}
