/**
 * Copyright (c) 2019 Paul Armstrong
 */
import * as Command from '../upload-build';
import yargs from 'yargs';

describe('upload-build', () => {
  describe('builder', () => {
    test('defaults config', () => {
      const args = Command.builder(yargs([]));
      expect(args.argv).toEqual({
        $0: expect.any(String),
        _: [],
        o: true,
        out: true,
        'skip-dirty-check': false,
        skipDirtyCheck: false
      });
    });
  });

  describe('handler', () => {
    test.skip('TODO', () => {});
  });
});
