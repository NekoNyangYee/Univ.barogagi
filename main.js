const getThemeState = () => {
    const body = document.querySelector('body');
    const themeState = body.getAttribute('data-theme');

    return themeState; // 현재 테마 상태 반환
}

const switchTheme = () => {
    const themeState = getThemeState();

    if (themeState === "light") setDark()
    else setLight();
}

const setLight = () => {
    const body = document.querySelector('body');
    const switchButton = document.getElementById('btnDisplayMode');

    body.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light');  //  테마 저장
    switchButton.setAttribute('value', '다크 모드')
}

const setDark = () => {
    const body = document.querySelector('body');
    const switchButton = document.getElementById('btnDisplayMode');

    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');  // 테마 저장
    switchButton.setAttribute('value', '라이트 모드')
}

// 테마 불러오고 적용하기
const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme'); // 저장소에 저장된 테마 상태

    if (typeof savedTheme === "undefined") setLight();

    // 저장된 테마 적용하기
    if (savedTheme === "dark") setDark();
    else setLight();
}