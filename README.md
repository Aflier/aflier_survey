# AflierSurvey
Short description and motivation.

## Usage
How to use my plugin.

## Installation
Add this line to your application's Gemfile:

```ruby
gem 'aflier_survey'
```

And then execute:
```bash
$ bundle
```

Or install it yourself as:
```bash
$ gem install aflier_survey
```

## Confinguration

Add the following to your routes.rb file

```bash
mount AflierSurvey::Engine => "/aflier_survey", as: :aflier_survey
```

Copy migrations

```bash
rake aflier_survey:install:migrations
```

## Contributing
Contribution directions go here.

## License
The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
