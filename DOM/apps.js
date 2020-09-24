document.addEventListener('DOMContentLoaded', function () {
   let button = document.createElement('button')
   button.innerText = 'Click Me'
   document.body.appendChild(button)
   let submitBtn = document.getElementById('Submit')
   let textInput = document.getElementById('text-input')

   //this is 1, ask why alert is not happening bc ur smol brained, also ask why button is small unless given innerText
   submitBtn.innerText = 'Submit'

   button.addEventListener('click', function () {
      let button = alert('YOU PRESSED THE FIRST BUTTON, CONGRATULATIONS YOU MADE IT TO STEP ONE OF THIS TERRIBLY STYLED PAGE')
      button.addEventListener('click', function () {
         alert(alertMsg)

      })
   })



   submitBtn.addEventListener('click', function () {

      alert(textInput.value)
   })

   //this is 2, im literally having to be carried to the finish line rn, but damnit we moving

   let div = document.getElementById('div-one')
   div.style.height = "50px"
   div.addEventListener('mouseover', function () {
      this.style.backgroundColor = 'blue'

      div.addEventListener('mouseout', function () {
         this.style.backgroundColor = 'white'
         //step 3, I ACTUALLY LEARNED HOW TO GOOGLE AND GET STUFF DONE OO RAH (THATS FOR MY BOY DEMPSY SINCE THEY TOOK HIM OUT OF ZOMBIES AFTER 10 YEARS)
      })

   })

   let p = document.querySelector("#paragraph");

   p.addEventListener('click', function () {
      //this.style.color = "red"
      p.style.color = getRandomColor()

      function getRandomColor() {
         var letters = '0123456789ABCDEF';
         var color = '#';
         for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
         }
         return color;
      }

   })
   //step 4, I REALLY REALLY THINK THE DEEPER I GET INTO THIS THAT I HAVE LITERAL BRAIN DAMAGE, WHICH I DEFINITLEY DO BC OF FOOTBALL AND GETTING HIT IN THE HEAD WITH A GOLF CLUB LOL

   let buttonThree = document.createElement('button')
   buttonThree.textContent = 'click for my name'
   document.body.appendChild(buttonThree)
   buttonThree.addEventListener('click', function () {
      let div3 = document.createElement('div')
      let span = document.createElement('span')
      span.innerText = 'Hunter/Scruffy'
      div3.appendChild(span)
      document.body.appendChild(div3)
   })
   //Step 5, WAS EXTERMELY CONFUSED BUT I GOT SOME CAFFINE IN ME SO NOW IM WORKING BETTER AND BRAIN IS FUNCTIONING SOMEWHAT; BRAIN INJURIES HAVE CEASED FOR NOW

   counter = 0
   let friendlist = ['joey', 'Karson', 'jaden', 'brooke', 'grayson', 'noah', 'grant', 'buck', 'scruffy', 'football']
   let btnfriend = document.getElementById('text-friends')
   btnfriend.textContent = 'friends'
   let ul = document.getElementById('ulid')
   btnfriend.addEventListener('click', function () {
      if (friendlist[counter] !== undefined) {
         let list = document.createElement('li')
         let name = document.createTextNode(friendlist[counter])
         list.appendChild(name)
         ul.appendChild(list)

         counter++

      }
   })
   //Step 6, CAFFINE MAKES THE BRAIN WORK, GOT THIS DONE, MAY HAVE A SMALL HEART ATTACK AFTER, BUT WE GOT IT DONE CHIEF.
})