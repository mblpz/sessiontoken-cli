import {Args, Command, Flags} from '@oclif/core'
import {DynamoDBClient} from '@aws-sdk/client-dynamodb'
import {DynamoDBDocumentClient, QueryCommand, QueryCommandOutput} from '@aws-sdk/lib-dynamodb'

export default class StItemsQuery extends Command {
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
    const {args, flags} = await this.parse(StItemsQuery)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/Mathias.Boettcher/mydev/st-cli/src/commands/st/items/query.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    await this.queryItem()
  }

  private async queryItem() {
    const client: DynamoDBClient = new DynamoDBClient({region: 'eu-central-1'})

    const ddbDocClient = DynamoDBDocumentClient.from(client)

    const queryCommandOutput: QueryCommandOutput = await ddbDocClient.send(
      new QueryCommand({
        TableName: 'SessionStoreCLI',
        KeyConditionExpression: '#token = :token',
        FilterExpression: '#ttl <= :epoch',
        ExpressionAttributeNames: {
          '#token': 'SessionToken',
          '#ttl': 'TTL',
        },
        ExpressionAttributeValues: {
          ':token': 'a81397e5-ba70-4f4e-9e5b-f9051d79186e',
          ':epoch': this.getNowEpochString(),
        },
      }),
    )

    this.log('queryCommandOutput', JSON.stringify(queryCommandOutput))
  }

  private getNowEpochString() {
    const now = new Date()
    const epoch = Math.round(now.getTime() / 1000)
    return epoch.toString()
  }
}
