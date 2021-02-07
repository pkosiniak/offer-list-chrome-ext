export const isNoFluff = <T = void>(
   callback?: () => T,
) => !!window.location.hostname.match(/nofluffjobs/)
   && ((callback && callback()) || true);

export const isJustJoin = <T = void>(
   callback?: () => T,
) => !!window.location.hostname.match(/justjoin\.it/)
   && ((callback && callback()) || true);

export const isSupported = <T = void>(
   callback?: () => T,
) => (isJustJoin() || isNoFluff())
   && ((callback && callback()) || true);

   
export const isJustJoinOffer = (
) => !!window.location.href.match(/justjoin\.it\/offers/);

export const isNoFluffOffer = (
) => !!window.location.href.match(/nofluffjobs\.com\/\w\w\/job/);

export const isSupportedOffer = <T = void>(
   callback?: () => T,
) => (isJustJoinOffer() || isNoFluffOffer())
   && ((callback && callback()) || true);