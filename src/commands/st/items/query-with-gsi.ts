import {Args, Command, Flags} from '@oclif/core'
import {DynamoDBClient} from '@aws-sdk/client-dynamodb'
import {DynamoDBDocumentClient, QueryCommand} from '@aws-sdk/lib-dynamodb'

export default class StItemsQueryWithGsi extends Command {
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
    const {args, flags} = await this.parse(StItemsQueryWithGsi)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/Mathias.Boettcher/mydev/st-cli/src/commands/st/items/query-with-gsi.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    await this.queryItems()
  }

  private async queryItems() {
    const client = new DynamoDBClient({region: 'eu-central-1'})

    const ddbDocClient = DynamoDBDocumentClient.from(client)

    const queryCommandOutput = await ddbDocClient.send(
      new QueryCommand({
        TableName: 'SessionStoreCLI',
        IndexName: 'UserIndex',
        KeyConditionExpression: '#user = :user',
        ExpressionAttributeNames: {
          '#user': 'Username',
        },
        ExpressionAttributeValues: {
          ':user': 'matboett',
        },
      }),
    )

    this.log('queryCommandOutput', JSON.stringify(queryCommandOutput))
  }
}
