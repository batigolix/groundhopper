# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Environment Setup

This is a Drupal 11 project running in DDEV with:
- PHP 8.3
- MariaDB 10.11
- nginx-fpm
- Node.js 18
- Redis for caching
- Composer 2

All commands must be run in the DDEV environment using `ddev` prefix.

## Essential Commands

### Code Quality & Testing
```bash
# Run PHPUnit tests
ddev phpunit path/to/module

# Static analysis (analyzes web/modules/custom and web/themes/custom by default)
ddev phpstan

# Check coding standards
ddev phpcs path/to/module/folder

# Auto-fix coding standards
ddev phpcbf path/to/module/folder

# CSS linting (requires yarn install in core first)
ddev stylelint
```

### Development Workflow
```bash
# Clear all caches
ddev drush cr

# Run database updates
ddev drush updb

# Check configuration status
ddev drush config:status

# Import configuration
ddev drush config:import

# Export configuration
ddev drush config:export

# Generate test content
ddev drush generate-content

# Run specific migration
ddev drush migrate:import [migration_id]

# Show migration status
ddev drush migrate:status
```

### Module Management
- Each contrib module in `web/modules/contrib/` has its own git repository
- When working on a module, cd to its directory to access git commands
- Check for patches (*.patch files) before updating modules
- 87 contrib modules are installed, 25 lack Drupal 11 support

## Architecture Overview

### Directory Structure
- **Docroot**: `web/` (Drupal files)
- **Config sync**: `config/sync/` (site configuration)
- **Custom modules**: `web/modules/custom/`
- **Contrib modules**: `web/modules/contrib/`
- **Themes**: `web/themes/` (Olivero default, Gin admin, Claro)

### Key Custom Modules
- **dumdum**: Migration module for content import
- **dummy_default_content**: Provides default content
- **dwo_dummy**: Complex migration examples with media handling
- **eme_content**: JSON-based content migrations
- **meppie**: Simple block module example with JS/CSS
- **ten_data**: Data migrations (monuments, zipcodes)
- **tic**: Custom entity type "Thing" implementation

### Testing Configuration
- PHPUnit tests use core's phpunit.xml.dist
- PHPStan configured at level 5 in `phpstan.neon`
- Coding standards use Drupal and DrupalPractice rulesets
- Test by file extensions: php, module, inc, install, test, profile, theme, scss, yml, twig, md

### Migration Infrastructure
Multiple migration modules indicate this project handles complex content imports:
- Migrate Plus/Tools/Devel for migration development
- Custom migrations in dumdum, dwo_dummy, eme_content modules
- CSV and JSON source support
- Media entity migrations

### Module Maintenance Notes
- 11 modules have patches applied (check before updating)
- 2 modules use deprecated `core: 8.x` syntax
- Several modules in alpha/beta/RC status
- jQuery UI modules present (monitor for deprecation)

## Memories
- remember
- onthou
- how to run phpunit: `ddev phpunit path/to/module`
- how to run phpstan: `ddev phpstan path/to/module`
- how to run phpcs: `ddev phpcs path/to/module`
- use the instructions in https://www.drupal.org/docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/documenting-your-project/readmemd-template when changing README files