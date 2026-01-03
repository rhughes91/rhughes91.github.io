var persistent = false;
var darkMode = true;

function onLoad()
{
    if (typeof(Storage) !== "undefined")
    {
        persistent = true;
        if (localStorage.getItem("darkMode") !== null)
        {
            darkMode = (localStorage.getItem("darkMode") === "true");
        }
        else
        {
            localStorage.setItem("darkMode", darkMode);
        }
    }
}


function vtoggleButton(button)
{
    darkMode = !darkMode;
    if (persistent)
    {
        localStorage.setItem("darkMode", darkMode);
    }
    setVToggleColors(darkMode);
}

function setVToggleColors(state)
{
    if(state)
        document.documentElement.classList.add("dark-mode");
    else
        document.documentElement.classList.remove("dark-mode");
}