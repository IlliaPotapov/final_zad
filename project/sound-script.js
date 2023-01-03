function SetSound(x) {

    change_user = JSON.parse(window.localStorage.getItem('user'));
    const newUser = {
        name: change_user['name'],
        score: change_user['score'],
        dies: change_user['dies'],
        background: change_user['background'],
        difficulty: change_user['difficulty'],
        quest1: change_user['quest1'],
        quest2: change_user['quest2'],
        total: change_user['total'],
        music: change_user['music'],
        sound: x.checked,

    }
    window.localStorage.setItem('user', JSON.stringify(newUser));



}
