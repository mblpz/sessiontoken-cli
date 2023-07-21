import {expect, test} from '@oclif/test'

describe('st/tables/add-secondary-index', () => {
  test
  .stdout()
  .command(['st/tables/add-secondary-index'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['st/tables/add-secondary-index', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
