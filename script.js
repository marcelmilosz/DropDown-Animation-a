function topToBottom() {
    // Dropdown from top to bottom 
    var ele = document.querySelector("#ttb");

    switchClassText();

    if(ele.style.display == "block") {
        // console.log("1");
        switchClass(ele);
    }
    else {
        // console.log("2");
        switchClass(ele);
    }
}

function switchClass(ele) {
    let classes = (ele.classList);

    if(!classes.contains("jumpInAnim")) {
        console.log("jumpIn");
        ele.style.display = "block";
        ele.classList.add("jumpInAnim");
        ele.classList.remove("jumpOutAnim");

        // Add animation to text
        switchClassText(true);

    } else {
        console.log("jumpOut");
        ele.classList.remove("jumpInAnim");
        ele.classList.add("jumpOutAnim");
        setTimeout(function() {
            ele.style.display = "none";
        }, 500);

        // Remove animation to text
        switchClassText(false);
    }
 
}

function switchClassText(add) {
    let classes = document.querySelector(".bar-wr-options").childNodes;
    let animLatency = 100;
    
    for(let i = 0; i < classes.length; i++) {

        if(classes[i].nodeName != "#text") {
            if(add) {
                console.log(classes[i]);
                classes[i].style.animation = "textIn 500ms " + animLatency + "ms forwards";
                animLatency += 10;
            }
            else {
                console.log(classes[i]);
                classes[i].style.animation = "textOut 500ms " + animLatency + "ms forwards";
                animLatency -= 10;
            }
        }
    }
}
