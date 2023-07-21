import {expect, test} from '@oclif/test'

describe('st/items/insert', () => {
  test
  .stdout()
  .command(['st/items/insert'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['st/items/insert', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
