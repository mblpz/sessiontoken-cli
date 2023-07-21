import {expect, test} from '@oclif/test'

describe('st/items/query', () => {
  test
  .stdout()
  .command(['st/items/query'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['st/items/query', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
