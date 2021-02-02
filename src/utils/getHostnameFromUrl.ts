export const getHostnameFromUrl = (
   url: string, fallback: string,
) => {
   try {
      return new URL(url).hostname;
   } catch (error) {
      return fallback;
   }
};