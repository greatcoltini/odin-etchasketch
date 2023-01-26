var picked_colour = "#ff0000";


// function to create 16x16 divs; square in nature
function sketchboard_create(element, size)
{
    // adjust buttons disabled;
    buttons_adjustment(element);

    board = document.getElementById('board');
    //clear out previous elements of board
    clear_board(board);
    
    board.classList.add("grid-container");
    size_class = "grid-container-" + size.toString();
    board.classList.add(size_class);
    
    colorPicker.value = picked_colour;
    colorPicker = document.getElementById('colorPicker');

    colorPicker.addEventListener("change", watchColorPicker, false);

    // creates the [i] of the board
    for (let i = 0; i < size; i++)
    {
        // creates the [i][j] of the board
        for (let j = 0; j < size; j++)
        {
            var piece = document.createElement('div');
            piece.id = i.toString() + j.toString();
            // piece.innerHTML = i.toString() + j.toString();
            // piece.onmouseover = function(){colour_on_click(this, null)};
            piece.addEventListener("mouseover", function(e)
            {
                if (e.buttons == 1)
                {
                    colour_on_click(this, picked_colour);
                }
            })

            piece.onmouseleave = function() {entering(this)}
            piece.onmouseenter = function() {leaving(this)}
            
            piece.onclick = function() {colour_on_click(this, picked_colour)};
            piece.classList.add('grid-item');
            piece.classList.add('grid-item-' + size.toString());
            board.appendChild(piece);
        }
    }
}

function clear_board(element)
{
    // clears existing grid items
    while (element.firstChild)
    {
        element.removeChild(element.lastChild);
    }
    
    element.classList.remove("grid-container-16", "grid-container-32", "grid-container-64");
}

function watchColorPicker(event){
    picked_colour = event.target.value;
}

// color on click
function colour_on_click(element, colour)
{
    element.style.backgroundColor = colour;
}

function entering(element)
{
    element.style.opacity = 1;
}
function leaving(element)
{
    element.style.opacity = 0.5;
}

// adjustment for button selected
function buttons_adjustment(current_button)
{
    button_group_children = document.getElementById("size_buttons").children;
    for (let i = 0; i < button_group_children.length; i++)
    {
        if (button_group_children[i] == current_button)
        {
            button_group_children[i].classList.add('disabled');
        }
        else
        {
            button_group_children[i].classList.remove('disabled');
        }
    }
}

window.onload = function() {sketchboard_create(document.getElementById('1'), 16)};