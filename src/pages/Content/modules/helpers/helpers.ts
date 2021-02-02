export const isNoFluff = <T = void>(
   callback?: () => T,
) => !!window.location.hostname.match(/nofluffjobs/)
   && ((callback && callback()) || true);

export const isJustJoin = <T = void>(
   callback?: () => T,
) => !!window.location.hostname.match(/justjoin\.it/)
   && ((callback && callback()) || true);
