import { showLog } from '../logger';

describe('ShowLog ::', () => {
  const logObject = {
    SCREEN_1: true,
    SCREEN_2: {
      FUNCTION_1: true,
      FUNCTION_2: false,
    },
  };

  describe('when is __DEV__ and no testing', () => {
    beforeAll(() => {
      __DEV__ = true;
      process.env.NODE_ENV = 'no-test';
    });

    it('call callback when loggin SCREEN_1', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_1', () => callback());
      expect(callback).toHaveBeenCalled();
    });
    it('call callback when loggin SCREEN_2 FUNCTION_1 when set to true', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_2.FUNCTION_1', () => callback());
      expect(callback).toHaveBeenCalled();
    });
    it('did not call callback when loggin SCREEN_2 FUNCTION_2 when set to false', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_2.FUNCTION_2', () => callback());
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('when is not __DEV__ and test', () => {
    beforeAll(() => {
      __DEV__ = true;
      process.env.NODE_ENV = 'test';
    });

    it('did not call callback when loggin SCREEN_1', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_1', () => callback());
      expect(callback).not.toHaveBeenCalled();
    });
    it('did not call callback when loggin SCREEN_2 FUNCTION_1 when set to true', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_2.FUNCTION_1', () => callback());
      expect(callback).not.toHaveBeenCalled();
    });
    it('did not call callback when loggin SCREEN_2 FUNCTION_2 when set to false', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_2.FUNCTION_2', () => callback());
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('when is not __DEV__ and production', () => {
    beforeAll(() => {
      __DEV__ = false;
      process.env.NODE_ENV = 'production';
    });

    it('did not call callback when loggin SCREEN_1', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_1', () => callback());
      expect(callback).not.toHaveBeenCalled();
    });
    it('did not call callback when loggin SCREEN_2 FUNCTION_1 when set to true', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_2.FUNCTION_1', () => callback());
      expect(callback).not.toHaveBeenCalled();
    });
    it('did not call callback when loggin SCREEN_2 FUNCTION_2 when set to false', () => {
      const callback = jest.fn();
      showLog(logObject, 'SCREEN_2.FUNCTION_2', () => callback());
      expect(callback).not.toHaveBeenCalled();
    });
  });
});
