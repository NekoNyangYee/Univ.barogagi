const switchTheme = () => {
    const body = document.querySelector('body');
    const themeState = body.getAttribute('data-theme');

    if (themeState === "light") {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
}

