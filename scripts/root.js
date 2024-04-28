// run page script
window.onload = () => {
    try {
        init();
        main();
    } catch {
        console.error("There are no scripts on this page.")
    }
}