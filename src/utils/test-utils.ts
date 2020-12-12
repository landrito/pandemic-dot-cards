/**
 * Describe path allows describing multiple scopes using a similar interface to Mocha.describe.
 *
 * @throws if the pathParts list is empty.
 *
 * @example
 *  // The following are equivalent
 *  describePaths(['foo', 'bar'], () => {
 *    expect(true).to.be.true;
 *  });
 *
 *  describe('foo' () => {
 *    describe('bar', () => {
 *      expect(true).to.be.true;
 *    });
 *  });
 *
 * @param pathParts The parts of a filepath leading up to the file under test.
 * @param fn The callback which includes the actual tests.
 */
export function describePath(
  pathParts: string[],
  fn: (this: Mocha.Suite) => void
): void {
  const first = pathParts[0];
  const rest = pathParts.slice(1);
  describe(
    first,
    rest.reverse().reduce((prev, part) => {
      return () => {
        return describe(part, prev);
      };
    }, fn)
  );
}
