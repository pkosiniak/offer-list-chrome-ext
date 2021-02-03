import { getHostnameFromUrl } from '../getHostnameFromUrl';


describe('getHostnameFromUrl', () => {
   it('should return hostname from URL', () => {
      expect(getHostnameFromUrl('https://www.google.com/', '')).toBe('www.google.com');
      expect(getHostnameFromUrl('https://github.com/pkosiniak', '')).toBe('github.com');
   });
   it('should return fallback string', () => {
      expect(getHostnameFromUrl('www.google.com', 'fail')).toBe('fail');
      expect(getHostnameFromUrl('//www.google.com/', 'fail')).toBe('fail');
   });
});