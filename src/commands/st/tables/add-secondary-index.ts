import {Args, Command, Flags} from '@oclif/core'
import {DynamoDBClient, UpdateTableCommand, UpdateTableCommandOutput} from '@aws-sdk/client-dynamodb'

export default class StTablesAddSecondaryIndex extends Command {
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
    const {args, flags} = await this.parse(StTablesAddSecondaryIndex)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/Mathias.Boettcher/mydev/st-cli/src/commands/st/tables/add-secondary-index.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    await this.addSecondaryIndex()
  }

  private async addSecondaryIndex() {
    const client: DynamoDBClient = new DynamoDBClient({region: 'eu-central-1'})

    const updateTableCommandOutput: UpdateTableCommandOutput = await client.send(
      new UpdateTableCommand({
        TableName: 'SessionStoreCLI',
        AttributeDefinitions: [
          {
            AttributeName: 'Username',
            AttributeType: 'S',
          },
        ],
        GlobalSecondaryIndexUpdates: [
          {
            Create: {
              IndexName: 'UserIndex',
              KeySchema: [
                {
                  AttributeName: 'Username',
                  KeyType: 'HASH',
                },
              ],
              Projection: {
                ProjectionType: 'ALL',
              },
            },
          },
        ],
      },
      ),
    )
    this.log('updateTableCommandOutput', JSON.stringify(updateTableCommandOutput))
  }
}
