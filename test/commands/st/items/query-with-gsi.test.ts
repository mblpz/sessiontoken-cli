import {expect, test} from '@oclif/test'

describe('st/items/query-with-gsi', () => {
  test
  .stdout()
  .command(['st/items/query-with-gsi'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['st/items/query-with-gsi', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
