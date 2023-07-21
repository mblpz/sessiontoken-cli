oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @mblpz/st-cli
$ st COMMAND
running command...
$ st (--version)
@mblpz/st-cli/0.0.0 darwin-arm64 node-v18.16.1
$ st --help [COMMAND]
USAGE
  $ st COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`st hello PERSON`](#st-hello-person)
* [`st hello world`](#st-hello-world)
* [`st help [COMMANDS]`](#st-help-commands)
* [`st plugins`](#st-plugins)
* [`st plugins:install PLUGIN...`](#st-pluginsinstall-plugin)
* [`st plugins:inspect PLUGIN...`](#st-pluginsinspect-plugin)
* [`st plugins:install PLUGIN...`](#st-pluginsinstall-plugin-1)
* [`st plugins:link PLUGIN`](#st-pluginslink-plugin)
* [`st plugins:uninstall PLUGIN...`](#st-pluginsuninstall-plugin)
* [`st plugins:uninstall PLUGIN...`](#st-pluginsuninstall-plugin-1)
* [`st plugins:uninstall PLUGIN...`](#st-pluginsuninstall-plugin-2)
* [`st plugins update`](#st-plugins-update)

## `st hello PERSON`

Say hello

```
USAGE
  $ st hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/mblpz/st-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `st hello world`

Say hello world

```
USAGE
  $ st hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ st hello world
  hello world! (./src/commands/hello/world.ts)
```

## `st help [COMMANDS]`

Display help for st.

```
USAGE
  $ st help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for st.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.12/src/commands/help.ts)_

## `st plugins`

List installed plugins.

```
USAGE
  $ st plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ st plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `st plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ st plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ st plugins add

EXAMPLES
  $ st plugins:install myplugin 

  $ st plugins:install https://github.com/someuser/someplugin

  $ st plugins:install someuser/someplugin
```

## `st plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ st plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ st plugins:inspect myplugin
```

## `st plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ st plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ st plugins add

EXAMPLES
  $ st plugins:install myplugin 

  $ st plugins:install https://github.com/someuser/someplugin

  $ st plugins:install someuser/someplugin
```

## `st plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ st plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ st plugins:link myplugin
```

## `st plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ st plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ st plugins unlink
  $ st plugins remove
```

## `st plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ st plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ st plugins unlink
  $ st plugins remove
```

## `st plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ st plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ st plugins unlink
  $ st plugins remove
```

## `st plugins update`

Update installed plugins.

```
USAGE
  $ st plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
