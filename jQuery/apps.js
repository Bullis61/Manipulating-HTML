$(document).ready(function () {

    let btn = $("<button>jQuery</button>")
    $("body").append(btn)

    btn.click(function () {
        alert("STEP 1 OF THIS IN JQUERY! IMMA BE HONEST CHIEF THIS AINT IT")
    })
    //STEP 1, I HATE JQUERY AND BRAIN HURT, I MANAGED TO NOT HAVE A HEART ATTACK FROM THE BANG BUT I WAS EXTREMELY CLOSE.
    let SubmitBtn = $("#Submit")
    SubmitBtn.text('Buton')
    SubmitBtn.click(function () {
        let textvalue = $("input[type = 'text']").val()
        alert(textvalue)
    })
    //STEP 2, I HAVE LOST TOTAL BRAIN CAPACITY, CAFFINE IS OUT OF BODY, BRAIN INJURIES COMING BACK TO FRUITION 

    let $div1 = $("#div1")

    $div1.mouseover(function () {
        $div1.css({
            "background-color": "blue"
        })

        $div1.mouseleave(function () {
            $div1.css({
                "background-color": "white"

            })
        })
    })
    //STEP 3, I HAVE RETURNED TO SHAKING AFTER EATING FOOD, I WAS WRONG, THE CAFFINE IS BACK, I REALLY NEED TO SWEAT IT OUT BY RUNNING

    let paraText = "Ah yes hello I am THE MAN. THE MAN WITH A PLAN. THE MAN WHO IS ALSO KNOWN AS THE LEGEND27. I AM THE MAN, THE MAN THAT WILL EASILY WRECK YOU IN A 1v1 QUICKSCOPE MATCH, THE ONE THAT WILL IS UNDENIABLY THE BEST"
    let para = $('<p>' + paraText + '<p>')
    para.appendTo(document.body)

    para.click(function () {
        para.css({
            "color": `${changeColor()}`
        })

    })

    function changeColor() {
        let randomNum1 = Math.floor(Math.random() * 255);
        let randomNum2 = Math.floor(Math.random() * 255);
        let randomNum3 = Math.floor(Math.random() * 255);
        return `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`
    }

    //STEP 4, HAVE LOST MOTOR FUNCTIONS, NEED A LIL REVIVE SO I CAN GET ME WORKING AGAIN, THIS IS LITERALLY THE DEFINITION OF PAIN 

    let $button3 = $("<button> Click Me 3</button>")
    $("btn-div").append($button3)

    let $div2 = $("<div></div>")
    $("body").append($div2)
    $div2.css({
        "margin-top": "15px",
        "margin-bottom": "15px"
    })

    let spanText = 'Hunter'
    let span1 = $('<span>' + spanText + '</span>')

    $button3.click(function () {
        $($div2).append(span1)
    })

    //STEP 5, I THINK I NEED MORE RGB IN MY PC, NO I KNOW I NEED MORE RGB, THEIR WILL NEVER BE ENOUGH RGB IN MY PC, I NEED WATERCOOLER W/ GIF IMAGE

    let $button4 = $("#button4")
    $button4.text("Show Friends")

    let friendlist = ['joey', 'Karson', 'jaden', 'brooke', 'grayson', 'noah', 'grant', 'buck', 'scruffy', 'football']

    let friendCount = 0

    let $list1 = $("#ulid")

    $button4.click(function () {
        if (friendCount < friendlist.length) {
            let arrayText = $("<li>" + (friendlist[friendCount]) + "</li>")
            $list1.append(arrayText)
            friendCount++

        }

//STEP 6 IS COMPLETE, I HATE JQUERY WITH A PASSION
    })
})
