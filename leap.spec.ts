const ilLeap = (year: number):boolean => {
  if  (year % 400===0) return true;
  if (year %100===0) return false
  return year % 4 === 0;

};

describe('leap years', function () {
    it('should be leap if multiple of 400', function () {
expect(ilLeap(400)).toBe(true)
    });
    it('should not be leapp if for a classic year', function () {
expect(ilLeap(2017)).toBe(false)
    });
  it('should not be leap if multiple of 100', () => {
    expect (ilLeap(1700)).toBe(false)
  });
  it('should be leap if multiple of 4', () => {
    expect(ilLeap(2020)).toBe(true)
  });
});
