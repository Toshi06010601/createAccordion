(() => {
    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');

    $trigger[0].addEventListener("click", (e) => clickHandler(e));

    //clickしたら実行される処理
    const clickHandler = (e) => {
        e.preventDefault();
        
        const $content = e.target.nextElementSibling;
        $content.style.display = "block";

        
    }
}

)();