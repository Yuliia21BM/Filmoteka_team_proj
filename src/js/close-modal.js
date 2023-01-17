export const EscClose = func => {
    document.activeElement('keydown', e => {
        if (e.key === 'Escape') func();
    });
};