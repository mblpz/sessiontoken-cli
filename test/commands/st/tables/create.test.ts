import {expect, test} from '@oclif/test'

describe('st/tables/create', () => {
  test
  .stdout()
  .command(['st/tables/create'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['st/tables/create', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
