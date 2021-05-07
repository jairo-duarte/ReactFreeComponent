export function CounterComponent() {

    // get the ID of root from index.html
    const root = document.getElementById("root")

    // set counter to 0
    let counter = 0;

    // create fragment 
    const fragment = document.createDocumentFragment()

    // create button for counter
    const btn = document.createElement("button")
    btn.setAttribute("id", "btn-counter")
    btn.innerHTML = "Counter"
    
    // create count text div
    const current_count = document.createElement("div")
    current_count.setAttribute("id", "elem-counter")

    // create reset button
    const reset_btn = document.createElement("button")
    reset_btn.setAttribute("id", "count-reset")
    reset_btn.innerHTML = "Reset Count"

    // test Hello world with root
    // root.innerHTML = `<h1>Hello, world!</h1>`

    const current_count_display = count => {
        return current_count.innerHTML = `<span style="color: red;">Counter ${count}`
    }

    const reset_counter = (count) => { 
        if(count > 10) { 
            root.append(reset_btn)
        } else { 
            if(document.body.contains(document.getElementById("count-reset"))) {
                console.log('false')
                reset_btn.remove()
            }
        }            
    }

    document.addEventListener('click', event=> {
        if(event.target && event.target.id === "btn-counter") { 
            console.log("count")
            counter = counter + 1;

            current_count_display(counter)
            reset_counter(counter)
        }
    })

    document.addEventListener("click", event => { 
        if(event.target && event.target.id === "count-reset") { 
            counter = 0;
            current_count.innerHTML = "Count reset"

        }

    })

    fragment.appendChild(btn)
    fragment.appendChild(current_count)



    return root.appendChild(fragment)

}