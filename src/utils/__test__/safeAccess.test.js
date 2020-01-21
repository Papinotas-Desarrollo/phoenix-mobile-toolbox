import * as SafeAccess from '../safeAccess';

describe('SafeAccess ::', () => {
  const object = {
    firstProperty: 'test',
    secondProperty: {
      innerProperty: 'test',
    },
  };

  it('returns undefined when not finding property', () => {
    expect(SafeAccess.sa(object, 'thirdProperty')).toBeUndefined();
  });
  it('returns default value when not finding property', () => {
    expect(SafeAccess.sa(object, 'thirdProperty', 'default')).toBe('default');
  });
  it('returns property value when finding property', () => {
    expect(SafeAccess.sa(object, 'firstProperty')).toBe(object.firstProperty);
  });
  it('returns property value when finding innner property', () => {
    expect(SafeAccess.sa(object, 'secondProperty.innerProperty')).toBe(
      object.secondProperty.innerProperty
    );
  });
});
