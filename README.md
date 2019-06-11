# phoenix-mobile-toolbox

## Installation

`yarn add phoenix-mobile-toolbox`

## Contributing

If you find an error, please raise an issue at GitHub's issues tab.

To contribute, send a pull request pointing to `develop` branch. Be sure to leave a detailed explanation of your changes in the pull request description to make its revision easier and therefore faster.

When contributing new functionality to _phoenix-mobile-toolbox_, try adding proper documentation to [the repo's wiki](https://github.com/Papinotas-Desarrollo/phoenix-mobile-toolbox/wiki)

## How to use when new feature or fix needed with any mobile project

Update `package.json`: 

```diff
  ...
  --- "@papinotas/phoenix-mobile-toolbox": "..version..",
  +++ "@papinotas/phoenix-mobile-toolbox": "file:..{path to toolbox folder}"
  ...
```

Then do `yarn`

Work normally on `toolbox`, if you need to update package just run `yarn upgrade {path to toolbox folder}`
