import {Args, Command, Flags} from '@oclif/core'
import {DynamoDBClient} from '@aws-sdk/client-dynamodb'
import {DynamoDBDocumentClient, PutCommand, PutCommandOutput} from '@aws-sdk/lib-dynamodb'
import {randomUUID} from 'node:crypto'

export default class StItemsInsert extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(StItemsInsert)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/Mathias.Boettcher/mydev/st-cli/src/commands/st/items/insert.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    await this.insertItem()
  }

  private async insertItem() {
    const client: DynamoDBClient = new DynamoDBClient({region: 'eu-central-1'})
    const ddbDocClient: DynamoDBDocumentClient = DynamoDBDocumentClient.from(client)

    const putCommandOutput: PutCommandOutput = await ddbDocClient.send(
      new PutCommand({
        TableName: 'SessionStoreCLI',
        Item: {
          SessionToken: this.getUUID(),
          Username: 'matboett',
          // Username: 'alexdebrie',
          CreatedAt: this.getISODateTimeNow(),
          ExpiresAt: this.getISODateTimeInAWeek(),
          TTL: this.getEpochTimeInAWeek(),
        },
        ConditionExpression: 'attribute_not_exists(SessionToken)',
      }),
    )

    this.log('putCommandOutput', JSON.stringify(putCommandOutput))
  }

  private getUUID() {
    // make this work in nodejs
    // browser is irrelevant
    // see https://stackoverflow.com/a/5344074/1985541
    return randomUUID()
  }

  private getISODateTimeNow() {
    return new Date().toISOString()
  }

  private getISODateTimeInAWeek() {
    const now = new Date()
    const inAWeek = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000))

    return inAWeek.toISOString()
  }

  private getEpochTimeInAWeek() {
    const now = new Date()
    const inAWeek = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000))

    return Math.floor(inAWeek.getTime() / 1000)
  }
}
