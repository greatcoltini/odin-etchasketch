

// function to create 16x16 divs; square in nature
function sketchboard_create(size)
{
    board = document.getElementById('board');

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
                    colour_on_click(this, null);
                }
            })

            piece.onmouseleave = function() {entering(this)}
            piece.onmouseenter = function() {leaving(this)}
            
            piece.onclick = function() {colour_on_click(this, null)};
            piece.classList.add('grid-item');
            board.appendChild(piece);
        }
    }
}

// color on click
function colour_on_click(element, colour)
{
    if (colour == null)
    {
        colour = "black";
    }

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

window.onload = function() {sketchboard_create(16)};