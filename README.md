# Your Package Name

[![npm version](https://badge.fury.io/js/your-package-name.svg)](https://badge.fury.io/js/your-package-name)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A seemless tool for creating tidy folders for react components in your project with ease.

## Description

Inspiration taken from laravel php artisan make commands, pass a couple of arguments as js or ts and the folder structure and the component will be created for you with css file imported and an index file.

## Features

- **Flexible Entity Creation**: Easily create different types of entities such as screens, features, components, and more.
- **Automatic File Generation**: Generates necessary files and directories based on the specified entity type, reducing manual effort.
- **Supports Multiple Languages**: Choose between JavaScript (js) or TypeScript (ts) for your project files.
- **Integration with React**: Seamlessly integrate with React projects, automatically importing necessary dependencies and exporting components.
- **Customizable Templates**: Customize templates for generated files to suit your project's specific requirements.
- **Error Handling**: Provides informative error messages and validation to ensure smooth usage of the tool.
- **Compatible with Yarn and npm**: Installable and updatable using popular package managers Yarn and npm.

## Installation

You can install this package via npm or Yarn:

```bash
npm install fast-folders
# or
yarn add fast-folders
```

## Usage

To create a new component HomeComponent.tsx under the folder HomeComponent with index.ts file and a styles.css filder inside the home feature folder src/Features/Home/components/HomeComponent, use the following command:

```bash
yarn create ts Features Home components HomeComponent
```
