let offset = -160;
/** side barの表示・非表示設定 */
document.getElementById("menuIcon").addEventListener("click", () => {
    showSideBar();
});

document.getElementById("menuIcon2").addEventListener("click", () => {
    showSideBar();
});

document.getElementById("cover").addEventListener("click", () => {
    showSideBar();
});


function showSideBar() {
    document.getElementById("cover").classList.toggle("coverVisible");
    offset = -offset;
    const animation = document.getElementById("sideBar").animate(
        [
            {   transform: `translateX(${offset}px)`    }
        ],
        {
            duration: 300,
            fill: "forwards"
        },
    );
}