import { formatDateRange } from "./date";

describe('formatDateRange', () => {
    // Same month and year tests
    test('formats dates in same month and year', () => {
      expect(formatDateRange('2022-11-21', '2022-11-25'))
        .toBe('November 21-25, 2022');
    });
  
    test('formats dates across single digit and double digit days in same month', () => {
      expect(formatDateRange('2022-11-08', '2022-11-12'))
        .toBe('November 8-12, 2022');
    });
  
    // Different month tests
    test('formats dates in different months of same year', () => {
      expect(formatDateRange('2022-11-21', '2022-12-03'))
        .toBe('November 21-December 3, 2022');
    });
  
    test('formats dates across months with single digit days', () => {
      expect(formatDateRange('2022-11-08', '2022-12-05'))
        .toBe('November 8-December 5, 2022');
    });
  
    // Edge cases
    test('handles same start and end date', () => {
      expect(formatDateRange('2022-11-21', '2022-11-21'))
        .toBe('November 21-21, 2022');
    });
  
    test('handles first day of month to last day of month', () => {
      expect(formatDateRange('2022-11-01', '2022-11-30'))
        .toBe('November 1-30, 2022');
    });
  
    test('handles month transition', () => {
      expect(formatDateRange('2022-11-30', '2022-12-01'))
        .toBe('November 30-December 1, 2022');
    });
  });