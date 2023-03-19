import * as core from '@actions/core'
import * as fs from 'fs'
import * as toml from 'toml'

async function run(): Promise<void> {
  try {
    // Get the path to the TOML file
    const tomlFilePath = core.getInput('toml-file-path')

    // Read the TOML file
    const tomlData = fs.readFileSync(tomlFilePath, 'utf8')

    // Parse the TOML data
    const jsonObject = toml.parse(tomlData)

    // Convert the JSON object to a JSON string
    const jsonString = JSON.stringify(jsonObject)

    // Set the JSON file path as an output
    core.setOutput('json-output', jsonString)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
