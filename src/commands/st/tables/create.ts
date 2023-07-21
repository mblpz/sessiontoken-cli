import {Args, Command, Flags} from '@oclif/core'
import {DynamoDBClient} from '@aws-sdk/client-dynamodb'
// import {DynamoDBDocumentClient} from '@aws-sdk/lib-dynamodb'
import {CreateTableCommand} from '@aws-sdk/client-dynamodb'
import {CreateTableCommandOutput} from '@aws-sdk/client-dynamodb'

export default class StTablesCreate extends Command {
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
    const {args, flags} = await this.parse(StTablesCreate)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/Mathias.Boettcher/mydev/st-cli/src/commands/st/tables/create.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    await this.createTable()
  }

  private async createTable() {
    const client: DynamoDBClient = new DynamoDBClient({region: 'eu-central-1'})

    const createTableCommandOutput: CreateTableCommandOutput = await client.send(
      new CreateTableCommand({
        AttributeDefinitions: [
          {
            AttributeName: 'SessionToken',
            AttributeType: 'S',
          },
        ],
        TableName: 'SessionStoreCLI',
        KeySchema: [
          {
            AttributeName: 'SessionToken',
            KeyType: 'HASH',
          },
        ],
        BillingMode: 'PAY_PER_REQUEST',
      },
      ),
    )
    this.log('createTableCommandOutput', JSON.stringify(createTableCommandOutput))
  }
}
